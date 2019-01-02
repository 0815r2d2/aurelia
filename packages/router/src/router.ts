import { IContainer } from '@aurelia/kernel';
import { Aurelia, ICustomElementType } from '@aurelia/runtime';
import { HistoryBrowser, IHistoryEntry, IHistoryOptions, INavigationInstruction } from './history-browser';
import { AnchorEventInfo, LinkHandler } from './link-handler';
import { Scope } from './scope';
import { IViewportOptions, Viewport } from './viewport';

export interface IRouterOptions extends IHistoryOptions {
  reportCallback?: Function;
  separators?: IRouteSeparators;
}

export interface IRoute {
  name?: string;
  path: string;
  redirect?: string;
  title?: string;
  viewports?: Object;
  meta?: Object;
}

export interface IRouteViewport {
  name: string;
  component: ICustomElementType | string;
}

export interface IRouteSeparators {
  viewport: string;
  sibling: string;
  scope: string;
  ownsScope: string;
  parameters: string;
  add: string;
  clear: string;
  action: string;
}

export class Router {
  public static readonly inject: ReadonlyArray<Function> = [IContainer];

  public routes: IRoute[] = [];
  public viewports: Object = {};

  public rootScope: Scope;
  public scopes: Scope[] = [];

  public separators: IRouteSeparators;

  public historyBrowser: HistoryBrowser;
  public linkHandler: LinkHandler;

  private options: IRouterOptions;
  private isActive: boolean = false;
  private isRedirecting: boolean = false;

  constructor(public container: IContainer) {
    this.historyBrowser = new HistoryBrowser();
    this.linkHandler = new LinkHandler();
  }

  public activate(options?: IRouterOptions): Promise<void> {
    if (this.isActive) {
      throw new Error('Router has already been activated.');
    }

    this.isActive = true;
    this.options = {
      ...{
        callback: (navigationInstruction) => {
          this.historyCallback(navigationInstruction).catch(error => { throw error; });
        }
      }, ...options
    };

    this.separators = {
      ... {
        viewport: '@', // ':',
        sibling: '+', // '/',
        scope: '/', // '+',
        ownsScope: '!',
        parameters: '=',
        add: '+',
        clear: '-',
        action: '.',
      }, ...this.options.separators
    };

    this.linkHandler.activate({ callback: this.linkCallback });
    return this.historyBrowser.activate(this.options).catch(error => { throw error; });
  }

  public deactivate(): void {
    if (!this.isActive) {
      throw new Error('Router has not been activated.');
    }
    this.linkHandler.deactivate();
    this.historyBrowser.deactivate();
    return;
  }

  public linkCallback = (info: AnchorEventInfo): void => {
    let href = info.href;
    if (href.startsWith('#')) {
      href = href.substr(1);
    }
    if (!href.startsWith('/')) {
      const scope = this.closestScope(info.anchor);
      const context = scope.context();
      if (context) {
        href = `/${context}${this.separators.scope}${href}`;
      }
    }
    this.historyBrowser.setHash(href);
  }

  public async historyCallback(instruction: INavigationInstruction): Promise<void> {
    if (this.options.reportCallback) {
      this.options.reportCallback(instruction);
    }

    if (instruction.isCancel) {
      return Promise.resolve();
    }

    let clearViewports: boolean = false;
    if (instruction.isBack || instruction.isForward) {
      instruction.path = instruction.fullStatePath;
    }
    const path = instruction.path;
    if (path === this.separators.clear || path.startsWith(this.separators.clear + this.separators.add)) {
      clearViewports = true;
      if (path.startsWith(this.separators.clear)) {
        instruction.path = path.substr(1);
      }
    }

    let title;
    let views: Object;
    let route: IRoute = this.findRoute(instruction);
    if (route) {
      if (route.redirect) {
        route = this.resolveRedirect(route, instruction.data);
        this.isRedirecting = true;
        this.historyBrowser.redirect(route.path, route.title, instruction.data);
        return Promise.resolve();
      }

      if (route.title) {
        title = route.title;
      }

      views = route.viewports;
    } else {
      views = this.findViews(instruction);
    }

    if (!views && !Object.keys(views).length && !clearViewports) {
      return Promise.resolve();
    }

    if (title) {
      this.historyBrowser.setEntryTitle(title);
    }

    const usedViewports = (clearViewports ? this.rootScope.allViewports().filter((value) => value.component !== null) : []);

    // TODO: Take care of cancellations down in subsets/iterations
    let { componentViewports, viewportsRemaining } = this.rootScope.findViewports(views);
    let guard = 100;
    while (componentViewports.length || viewportsRemaining) {
      // Guard against endless loop
      if (!guard--) {
        break;
      }
      const changedViewports: Viewport[] = [];
      for (const componentViewport of componentViewports) {
        const { component, viewport } = componentViewport;
        if (viewport.setNextContent(component, instruction)) {
          changedViewports.push(viewport);
        }
        const usedIndex = usedViewports.findIndex((value) => value === viewport);
        if (usedIndex >= 0) {
          usedViewports.splice(usedIndex, 1);
        }
      }
      for (const viewport of usedViewports) {
        if (viewport.setNextContent(this.separators.clear, instruction)) {
          changedViewports.push(viewport);
        }
      }

      // We've gone via a redirected route back to same viewport status so
      // we need to remove the added history entry for the redirect
      // TODO: Take care of empty subsets/iterations where previous has length
      if (!changedViewports.length && this.isRedirecting) {
        this.historyBrowser.cancel();
        this.isRedirecting = false;
      }

      let results = await Promise.all(changedViewports.map((value) => value.canLeave()));
      if (results.findIndex((value) => value === false) >= 0) {
        this.historyBrowser.cancel();
        return Promise.resolve();
      }
      results = await Promise.all(changedViewports.map((value) => value.canEnter()));
      if (results.findIndex((value) => value === false) >= 0) {
        this.historyBrowser.cancel();
        return Promise.resolve();
      }
      results = await Promise.all(changedViewports.map((value) => value.loadContent()));
      // TODO: Remove this once multi level recursiveness has been fixed
      // if (results.findIndex((value) => value === false) >= 0) {
      //   this.historyBrowser.cancel();
      //   return Promise.resolve();
      // }

      // TODO: Fix multi level recursiveness!
      const remaining = this.rootScope.findViewports();
      componentViewports = remaining.componentViewports;
      viewportsRemaining = remaining.viewportsRemaining;
    }
    // TODO: Make sure replace paths isn't called on wrong (later) navigation
    this.replacePaths();
  }

  // public view(views: Object, title?: string, data?: Object): Promise<void> {
  //   console.log('Router.view:', views, title, data);

  // tslint:disable-next-line:no-commented-code
  //   if (title) {
  //     this.historyBrowser.setEntryTitle(title);
  //   }

  // tslint:disable-next-line:no-commented-code
  //   const viewports: Viewport[] = [];
  //   for (const v in views) {
  //     const component: ICustomElementType = views[v];
  //     const viewport = this.findViewport(`${v}:${component}`);
  //     if (viewport.setNextContent(component, { path: '' })) {
  //       viewports.push(viewport);
  //     }
  //   }

  // tslint:disable-next-line:no-commented-code
  //   // We've gone via a redirected route back to same viewport status so
  //   // we need to remove the added history entry for the redirect
  //   if (!viewports.length && this.isRedirecting) {
  //     this.historyBrowser.cancel();
  //     this.isRedirecting = false;
  //   }

  // tslint:disable-next-line:no-commented-code
  //   let cancel: boolean = false;
  //   return Promise.all(viewports.map((value) => value.canLeave()))
  //     .then((promises: boolean[]) => {
  //       if (cancel || promises.findIndex((value) => value === false) >= 0) {
  //         cancel = true;
  //         return Promise.resolve([]);
  //       } else {
  //         return Promise.all(viewports.map((value) => value.canEnter()));
  //       }
  //     }).then((promises: boolean[]) => {
  //       if (cancel || promises.findIndex((value) => value === false) >= 0) {
  //         cancel = true;
  //         return Promise.resolve([]);
  //       } else {
  //         return Promise.all(viewports.map((value) => value.loadContent()));
  //       }
  //     }).then(() => {
  //       if (cancel) {
  //         this.historyBrowser.cancel();
  //       }
  //     }).then(() => {
  //       const viewports = Object.values(this.viewports).map((value) => value.description()).filter((value) => value && value.length);
  //       this.historyBrowser.history.replaceState({}, null, '#/' + viewports.join('/'));
  //     });
  // }

  public findRoute(entry: IHistoryEntry): IRoute {
    return this.routes.find((value) => value.path === entry.path);
  }
  public resolveRedirect(route: IRoute, data?: Object): IRoute {
    while (route.redirect) {
      const redirectRoute: IRoute = this.findRoute({
        path: route.redirect,
        fullStatePath: route.redirect,
        data: data,
      });
      if (redirectRoute) {
        route = redirectRoute;
      } else {
        break;
      }
    }
    return route;
  }

  public findViews(entry: IHistoryEntry): Object {
    const views: Object = {};
    let path = entry.path;
    // TODO: Let this govern start of scope
    if (path.startsWith('/')) {
      path = path.substr(1);
    }
    let sections: string[] = path.split(this.separators.sibling);

    // TODO: Remove this once multi level recursiveness is fixed
    // Expand with instances for all containing views
    // const expandedSections: string[] = [];
    // while (sections.length) {
    //   const part = sections.shift();
    //   const parts = part.split(this.separators.scope);
    //   for (let i = 1; i <= parts.length; i++) {
    //     expandedSections.push(parts.slice(0, i).join(this.separators.scope));
    //   }
    // }
    // sections = expandedSections;

    let index = 0;
    while (sections.length) {
      const view = sections.shift();
      // TODO: implement parameters
      // As a = part at the end of the view!
      const scopes = view.split(this.separators.scope);
      const leaf = scopes.pop();
      const parts = leaf.split(this.separators.viewport);
      // Noooooo?
      const component = parts[0];
      scopes.push(parts.length ? parts.join(this.separators.viewport) : `?${index++}`);
      const name = scopes.join(this.separators.scope);
      if (component) {
        views[name] = component;
      }
    }
    return views;
  }

  // public findViewport(name: string): Viewport {
  //   return this.rootScope.findViewport(name);
  // }

  public findScope(element: Element): Scope {
    if (!this.rootScope) {
      const aureliaRootElement = this.container.get(Aurelia).root().$host;
      this.rootScope = new Scope(this, aureliaRootElement as Element, null);
      this.scopes.push(this.rootScope);
    }
    return this.closestScope(element);
  }

  // Called from the viewport custom element in attached()
  public addViewport(name: string, element: Element, options?: IViewportOptions): Viewport {
    // tslint:disable-next-line:no-console
    console.log('Viewport added', name, element);
    const parentScope = this.findScope(element);
    return parentScope.addViewport(name, element, options);
  }
  // Called from the viewport custom element
  public removeViewport(viewport: Viewport): void {
    // TODO: There's something hinky with remove!
    const scope = viewport.owningScope;
    if (!scope.removeViewport(viewport)) {
      this.removeScope(scope);
    }
  }

  public removeScope(scope: Scope): void {
    if (scope !== this.rootScope) {
      scope.removeScope();
      const index = this.scopes.indexOf(scope);
      if (index >= 0) {
        this.scopes.splice(index, 1);
      }
    }
  }

  public addRoute(route: IRoute): void {
    this.routes.push(route);
  }

  public goto(pathOrViewports: string | Object, title?: string, data?: Object): void {
    if (typeof pathOrViewports === 'string') {
      this.historyBrowser.goto(pathOrViewports, title, data);
    }
    // else {
    //   this.view(pathOrViewports, title, data);
    // }
  }

  public replace(pathOrViewports: string | Object, title?: string, data?: Object): void {
    if (typeof pathOrViewports === 'string') {
      this.historyBrowser.replace(pathOrViewports, title, data);
    }
  }

  public refresh(): void {
    this.historyBrowser.refresh();
  }

  public back(): void {
    this.historyBrowser.back();
  }

  public forward(): void {
    this.historyBrowser.forward();
  }

  private closestScope(element: Element): Scope {
    let closest: number = Number.MAX_SAFE_INTEGER;
    let scope: Scope;
    for (const sc of this.scopes) {
      let el = element;
      let i = 0;
      while (el) {
        if (el === sc.element) {
          break;
        }
        i++;
        el = el.parentElement;
      }
      if (i < closest) {
        closest = i;
        scope = sc;
      }
    }
    return scope;
  }

  private removeStateDuplicates(states: string[]): string[] {
    let sorted: string[] = states.slice().sort((a, b) => b.split(this.separators.scope).length - a.split(this.separators.scope).length);
    sorted = sorted.map((value) => `${this.separators.scope}${value}${this.separators.scope}`);

    let unique: string[] = [];
    if (sorted.length) {
      unique.push(sorted.shift());
      while (sorted.length) {
        const state = sorted.shift();
        if (unique.find((value) => {
          return value.indexOf(state) === -1;
        })) {
          unique.push(state);
        }
      }
    }
    unique = unique.map((value) => value.substring(1, value.length - 1));
    unique.sort((a, b) => a.split(this.separators.scope).length - b.split(this.separators.scope).length);

    return unique;
  }

  private replacePaths(): void {
    let viewportStates = this.rootScope.viewportStates();
    viewportStates = this.removeStateDuplicates(viewportStates);
    let fullViewportStates = this.rootScope.viewportStates(true);
    fullViewportStates = this.removeStateDuplicates(fullViewportStates);
    fullViewportStates.unshift(this.separators.clear);
    this.historyBrowser.replacePath(viewportStates.join(this.separators.sibling), fullViewportStates.join(this.separators.sibling));
  }
}
