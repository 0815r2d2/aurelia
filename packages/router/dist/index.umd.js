(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@aurelia/runtime'), require('@aurelia/kernel')) :
  typeof define === 'function' && define.amd ? define(['exports', '@aurelia/runtime', '@aurelia/kernel'], factory) :
  (global = global || self, factory(global.router = {}, global.runtime, global.kernel));
}(this, function (exports, runtime, kernel) { 'use strict';

  class HistoryBrowser {
      constructor() {
          this.pathChanged = () => {
              if (this.ignorePathChange !== null) {
                  // tslint:disable-next-line:no-console
                  console.log('=== ignore path change', this.getPath());
                  const resolve = this.ignorePathChange;
                  this.ignorePathChange = null;
                  resolve();
                  return;
              }
              const path = this.getPath();
              const search = this.getSearch();
              // tslint:disable-next-line:no-console
              console.log('path changed to', path, this.activeEntry, this.currentEntry);
              const navigationFlags = {};
              let previousEntry;
              let historyEntry = this.getState('HistoryEntry');
              if (this.activeEntry && this.activeEntry.path === path) { // Only happens with new history entries (including replacing ones)
                  navigationFlags.isNew = true;
                  const index = (this.isReplacing ? this.currentEntry.index : this.history.length - this.historyOffset);
                  previousEntry = this.currentEntry;
                  this.currentEntry = this.activeEntry;
                  this.currentEntry.index = index;
                  if (this.isReplacing) {
                      this.lastHistoryMovement = 0;
                      this.historyEntries[this.currentEntry.index] = this.currentEntry;
                      if (this.isCancelling) {
                          navigationFlags.isCancel = true;
                          this.isCancelling = false;
                          // Prevent another cancel by clearing lastHistoryMovement?
                      }
                      else if (this.isRefreshing) {
                          navigationFlags.isRefresh = true;
                          this.isRefreshing = false;
                      }
                      else {
                          navigationFlags.isReplace = true;
                      }
                      this.isReplacing = false;
                  }
                  else {
                      this.lastHistoryMovement = 1;
                      this.historyEntries = this.historyEntries.slice(0, this.currentEntry.index);
                      this.historyEntries.push(this.currentEntry);
                  }
                  this.setState({
                      'HistoryEntries': this.historyEntries,
                      'HistoryOffset': this.historyOffset,
                      'HistoryEntry': this.currentEntry
                  });
              }
              else { // Refresh, history navigation, first navigation, manual navigation or cancel
                  this.historyEntries = (this.historyEntries || this.getState('HistoryEntries') || []);
                  // tslint:disable-next-line:strict-boolean-expressions
                  this.historyOffset = (this.historyOffset || this.getState('HistoryOffset') || 0);
                  if (!historyEntry && !this.currentEntry) {
                      navigationFlags.isNew = true;
                      navigationFlags.isFirst = true;
                      this.historyOffset = this.history.length;
                  }
                  else if (!historyEntry) {
                      navigationFlags.isNew = true;
                  }
                  else if (!this.currentEntry) {
                      navigationFlags.isRefresh = true;
                  }
                  else if (this.currentEntry.index < historyEntry.index) {
                      navigationFlags.isForward = true;
                  }
                  else if (this.currentEntry.index > historyEntry.index) {
                      navigationFlags.isBack = true;
                  }
                  if (!historyEntry) {
                      // TODO: max history length of 50, find better new index
                      historyEntry = {
                          path: path,
                          fullStatePath: null,
                          index: this.history.length - this.historyOffset,
                          query: search,
                      };
                      this.historyEntries = this.historyEntries.slice(0, historyEntry.index);
                      this.historyEntries.push(historyEntry);
                      this.setState({
                          'HistoryEntries': this.historyEntries,
                          'HistoryOffset': this.historyOffset,
                          'HistoryEntry': historyEntry
                      });
                  }
                  this.lastHistoryMovement = (this.currentEntry ? historyEntry.index - this.currentEntry.index : 0);
                  previousEntry = this.currentEntry;
                  this.currentEntry = historyEntry;
                  if (this.isCancelling) {
                      navigationFlags.isCancel = true;
                      this.isCancelling = false;
                      // Prevent another cancel by clearing lastHistoryMovement?
                  }
              }
              this.activeEntry = null;
              if (this.cancelRedirectHistoryMovement) {
                  this.cancelRedirectHistoryMovement--;
              }
              // tslint:disable-next-line:no-console
              console.log('navigated', this.getState('HistoryEntry'), this.historyEntries, this.getState('HistoryOffset'));
              this.callback(this.currentEntry, navigationFlags, previousEntry);
          };
          this.location = window.location;
          this.history = window.history;
          this.currentEntry = null;
          this.historyEntries = null;
          this.historyOffset = null;
          this.replacedEntry = null;
          this.activeEntry = null;
          this.options = null;
          this.isActive = false;
          this.lastHistoryMovement = null;
          this.cancelRedirectHistoryMovement = null;
          this.isCancelling = false;
          this.isReplacing = false;
          this.isRefreshing = false;
          this.ignorePathChange = null;
      }
      activate(options) {
          if (this.isActive) {
              throw new Error('History has already been activated.');
          }
          this.isActive = true;
          this.options = Object.assign({}, options);
          window.addEventListener('popstate', this.pathChanged);
          return Promise.resolve().then(() => {
              this.setPath(this.getPath(), true);
          });
      }
      deactivate() {
          window.removeEventListener('popstate', this.pathChanged);
          this.isActive = false;
      }
      goto(path, title, data) {
          this.activeEntry = {
              path: path,
              fullStatePath: null,
              title: title,
              data: data,
          };
          this.setPath(path);
      }
      replace(path, title, data) {
          this.isReplacing = true;
          this.activeEntry = {
              path: path,
              fullStatePath: null,
              title: title,
              data: data,
          };
          this.setPath(path, true);
      }
      redirect(path, title, data) {
          // This makes sure we can cancel redirects from both pushes and replaces
          this.cancelRedirectHistoryMovement = this.lastHistoryMovement + 1;
          this.replace(path, title, data);
      }
      refresh() {
          if (!this.currentEntry) {
              return;
          }
          this.isRefreshing = true;
          this.replace(this.currentEntry.path, this.currentEntry.title, this.currentEntry.data);
      }
      back() {
          this.history.go(-1);
      }
      forward() {
          this.history.go(1);
      }
      cancel() {
          this.isCancelling = true;
          const movement = this.lastHistoryMovement || this.cancelRedirectHistoryMovement;
          if (movement) {
              this.history.go(-movement);
          }
          else {
              this.replace(this.replacedEntry.path, this.replacedEntry.title, this.replacedEntry.data);
          }
      }
      async pop() {
          // TODO: Make sure we don't back out of application
          let state;
          // tslint:disable-next-line:promise-must-complete
          let wait = new Promise((resolve, reject) => {
              this.ignorePathChange = resolve;
          });
          this.history.go(-1);
          await wait;
          const path = this.location.toString();
          state = this.history.state;
          // tslint:disable-next-line:promise-must-complete
          wait = new Promise((resolve, reject) => {
              this.ignorePathChange = resolve;
          });
          this.history.go(-1);
          await wait;
          this.history.pushState(state, null, path);
      }
      setState(key, value) {
          const { pathname, search, hash } = this.location;
          let state = Object.assign({}, this.history.state);
          if (typeof key === 'string') {
              state[key] = JSON.parse(JSON.stringify(value));
          }
          else {
              state = Object.assign({}, state, JSON.parse(JSON.stringify(key)));
          }
          this.history.replaceState(state, null, `${pathname}${search}${hash}`);
      }
      getState(key) {
          const state = Object.assign({}, this.history.state);
          return state[key];
      }
      setEntryTitle(title) {
          this.currentEntry.title = title;
          this.historyEntries[this.currentEntry.index] = this.currentEntry;
          this.setState({
              'HistoryEntries': this.historyEntries,
              'HistoryEntry': this.currentEntry,
          });
      }
      replacePath(path, fullStatePath, entry) {
          if (entry.index !== this.currentEntry.index) {
              // TODO: Store unresolved in localStorage to set if we should ever navigate back to it
              // tslint:disable-next-line:no-console
              console.warn('replacePath: entry not matching currentEntry', entry, this.currentEntry);
              return;
          }
          const newHash = `#/${path}`;
          const { pathname, search, hash } = this.location;
          // tslint:disable-next-line:possible-timing-attack
          if (newHash === hash && this.currentEntry.path === path && this.currentEntry.fullStatePath === fullStatePath) {
              return;
          }
          this.currentEntry.path = path;
          this.currentEntry.fullStatePath = fullStatePath;
          const state = Object.assign({}, this.history.state, {
              'HistoryEntry': this.currentEntry,
              'HistoryEntries': this.historyEntries,
          });
          this.history.replaceState(state, null, `${pathname}${search}${newHash}`);
      }
      setHash(hash) {
          if (!hash.startsWith('#')) {
              hash = `#${hash}`;
          }
          this.location.hash = hash;
      }
      get titles() {
          return (this.historyEntries ? this.historyEntries.slice(0, this.currentEntry.index + 1).map((value) => value.title) : []);
      }
      getPath() {
          const hash = this.location.hash.substring(1);
          return hash.split('?')[0];
      }
      setPath(path, replace = false) {
          // More checks, such as parameters, needed
          if (this.currentEntry && this.currentEntry.path === path && !this.isRefreshing) {
              return;
          }
          const { pathname, search } = this.location;
          const hash = `#${path}`;
          if (replace) {
              this.replacedEntry = this.currentEntry;
              this.history.replaceState({}, null, `${pathname}${search}${hash}`);
          }
          else {
              // tslint:disable-next-line:no-commented-code
              // this.location.hash = hash;
              this.history.pushState({}, null, `${pathname}${search}${hash}`);
          }
          this.pathChanged();
      }
      getSearch() {
          const hash = this.location.hash.substring(1);
          const hashSearches = hash.split('?');
          hashSearches.shift();
          return hashSearches.length > 0 ? hashSearches.shift() : '';
      }
      callback(currentEntry, navigationFlags, previousEntry) {
          const instruction = Object.assign({}, currentEntry, navigationFlags);
          instruction.previous = previousEntry;
          // tslint:disable-next-line:no-console
          console.log('callback', currentEntry, navigationFlags);
          if (this.options.callback) {
              this.options.callback(instruction);
          }
      }
  }

  /**
   * Class responsible for handling interactions that should trigger navigation.
   */
  class LinkHandler {
      constructor() {
          this.isActive = false;
          this.handler = (e) => {
              const info = LinkHandler.getEventInfo(e);
              if (info.shouldHandleEvent) {
                  e.preventDefault();
                  this.options.callback(info);
              }
          };
          this.document = document;
      }
      /**
       * Gets the href and a "should handle" recommendation, given an Event.
       *
       * @param event The Event to inspect for target anchor and href.
       */
      static getEventInfo(event) {
          const info = {
              shouldHandleEvent: false,
              href: null,
              anchor: null
          };
          const target = LinkHandler.findClosestAnchor(event.target);
          if (!target || !LinkHandler.targetIsThisWindow(target)) {
              return info;
          }
          if (target.hasAttribute('external')) {
              return info;
          }
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
              return info;
          }
          const href = target.getAttribute('href');
          info.anchor = target;
          info.href = href;
          const leftButtonClicked = event.which === 1;
          info.shouldHandleEvent = leftButtonClicked;
          return info;
      }
      /**
       * Finds the closest ancestor that's an anchor element.
       *
       * @param el The element to search upward from.
       * @returns The link element that is the closest ancestor.
       */
      static findClosestAnchor(el) {
          while (el) {
              if (el.tagName === 'A') {
                  return el;
              }
              el = el.parentNode;
          }
      }
      /**
       * Gets a value indicating whether or not an anchor targets the current window.
       *
       * @param target The anchor element whose target should be inspected.
       * @returns True if the target of the link element is this window; false otherwise.
       */
      static targetIsThisWindow(target) {
          const targetWindow = target.getAttribute('target');
          const win = LinkHandler.window;
          return !targetWindow ||
              targetWindow === win.name ||
              targetWindow === '_self';
      }
      /**
       * Activate the instance.
       *
       */
      activate(options) {
          if (this.isActive) {
              throw new Error('LinkHandler has already been activated.');
          }
          this.isActive = true;
          this.options = Object.assign({}, options);
          this.document.addEventListener('click', this.handler, true);
      }
      /**
       * Deactivate the instance. Event handlers and other resources should be cleaned up here.
       */
      deactivate() {
          this.document.removeEventListener('click', this.handler, true);
          this.isActive = false;
      }
  }

  // NOTE: this file is currently not in use
  class NavRoute {
      constructor(nav, route) {
          this.active = '';
          this.nav = nav;
          Object.assign(this, {
              components: route.components,
              title: route.title,
              children: null,
              meta: route.meta,
              active: '',
          });
          this.link = this._link(this.components);
          this.linkActive = route.consideredActive ? this._link(route.consideredActive) : this.link;
          this.observerLocator = this.nav.router.container.get(runtime.IObserverLocator);
          this.observer = this.observerLocator.getObserver(runtime.LifecycleFlags.none, this.nav.router, 'activeComponents');
          this.observer.subscribe(this);
      }
      get hasChildren() {
          return (this.children && this.children.length ? 'nav-has-children' : '');
      }
      handleChange() {
          if (this.link && this.link.length) {
              this.active = this._active();
          }
          else {
              this.active = (this.active === 'nav-active' ? 'nav-active' : (this.activeChild() ? 'nav-active-child' : ''));
          }
      }
      _active() {
          const components = this.linkActive.split(this.nav.router.separators.add);
          const activeComponents = this.nav.router.activeComponents;
          for (const component of components) {
              if (component.indexOf(this.nav.router.separators.viewport) >= 0) {
                  if (activeComponents.indexOf(component) < 0) {
                      return '';
                  }
              }
              else {
                  if (activeComponents.findIndex((value) => value.replace(/\@[^=]*/, '') === component) < 0) {
                      return '';
                  }
              }
          }
          return 'nav-active';
      }
      toggleActive() {
          this.active = (this.active.startsWith('nav-active') ? '' : 'nav-active');
      }
      _link(components) {
          if (Array.isArray(components)) {
              return components.map((value) => this.linkName(value)).join(this.nav.router.separators.sibling);
          }
          else {
              return this.linkName(components);
          }
      }
      activeChild() {
          if (this.children) {
              for (const child of this.children) {
                  if (child.active.startsWith('nav-active') || child.activeChild()) {
                      return true;
                  }
              }
          }
          return false;
      }
      linkName(component) {
          if (!component) {
              return '';
          }
          else if (typeof component === 'string') {
              return component;
          }
          else if (component.description) {
              return component.description.name;
          }
          else if (component.component) {
              return this.linkName(component.component) + (component.viewport ? `@${component.viewport}` : '');
          }
      }
  }

  // NOTE: this file is currently not in use
  class Nav {
      constructor(router, name) {
          this.router = router;
          this.name = name;
          this.routes = [];
      }
      addRoutes(routes) {
          for (const route of routes) {
              this.addRoute(this.routes, route);
          }
      }
      addRoute(routes, route) {
          const newRoute = new NavRoute(this, route);
          routes.push(newRoute);
          if (route.children) {
              newRoute.children = [];
              for (const child of route.children) {
                  this.addRoute(newRoute.children, child);
              }
          }
      }
  }

  function parseQuery(query) {
      const parameters = {};
      const list = [];
      if (!query || !query.length) {
          return { parameters: parameters, list: list };
      }
      const params = query.replace('+', ' ').split('&');
      for (const param of params) {
          const kv = param.split('=');
          const key = decodeURIComponent(kv.shift());
          if (!kv.length) {
              list.push(key);
              continue;
          }
          const value = decodeURIComponent(kv.shift());
          parameters[key] = value;
          // TODO: Deal with complex parameters such as lists and objects
      }
      return { parameters: parameters, list: list };
  }
  function mergeParameters(parameters, query, specifiedParameters) {
      const parsedQuery = parseQuery(query);
      const parsedParameters = parseQuery(parameters);
      const params = Object.assign({}, parsedQuery.parameters, parsedParameters.parameters);
      const list = [...parsedQuery.list, ...parsedParameters.list];
      if (list.length && specifiedParameters && specifiedParameters.length) {
          for (const param of specifiedParameters) {
              // TODO: Support data types
              params[param] = list.shift();
          }
      }
      if (list.length && Object.keys(params).length) {
          params['-unnamed'] = list.splice(0, list.length);
      }
      let merged;
      if (list.length) {
          merged = list;
      }
      else {
          merged = params;
      }
      return {
          parameters: params,
          list: list,
          merged: merged,
      };
  }

  class Viewport {
      constructor(router, name, element, owningScope, scope, options) {
          this.router = router;
          this.name = name;
          this.element = element;
          this.owningScope = owningScope;
          this.scope = scope;
          this.options = options;
          this.clear = false;
          this.content = null;
          this.nextContent = null;
          this.parameters = null;
          this.nextParameters = null;
          this.instruction = null;
          this.nextInstruction = null;
          this.component = null;
          this.nextComponent = null;
          this.elementResolve = null;
      }
      setNextContent(content, instruction) {
          let parameters;
          this.clear = false;
          if (typeof content === 'string') {
              if (content === this.router.separators.clear) {
                  this.clear = true;
                  content = null;
              }
              else {
                  const cp = content.split(this.router.separators.parameters);
                  content = cp.shift();
                  parameters = cp.length ? cp.join(this.router.separators.parameters) : null;
                  const resolver = this.router.container.getResolver(runtime.CustomElementResource.keyFrom(content));
                  if (resolver !== null) {
                      content = resolver.getFactory(this.router.container).Type;
                  }
              }
          }
          this.nextContent = content;
          this.nextInstruction = instruction;
          this.nextParameters = parameters;
          if (this.content !== content || this.parameters !== parameters || !this.instruction || this.instruction.query !== instruction.query || instruction.isRefresh) {
              return true;
          }
          return false;
      }
      setElement(element, options) {
          // First added viewport with element is always scope viewport (except for root scope)
          if (this.scope && this.scope.parent && !this.scope.viewport) {
              this.scope.viewport = this;
          }
          if (this.scope && !this.scope.element) {
              this.scope.element = element;
          }
          if (!this.element) {
              this.element = element;
              if (options && options.usedBy) {
                  this.options.usedBy = options.usedBy;
              }
              if (options && options.default) {
                  this.options.default = options.default;
              }
              if (options && options.noLink) {
                  this.options.noLink = options.noLink;
              }
              if (options && options.noHistory) {
                  this.options.noHistory = options.noHistory;
              }
              if (this.elementResolve) {
                  this.elementResolve();
              }
          }
          if (!this.component && !this.nextComponent && this.options.default) {
              this.router.addProcessingViewport(this, this.options.default);
          }
      }
      canLeave() {
          if (!this.component) {
              return Promise.resolve(true);
          }
          const component = this.component;
          if (!component.canLeave) {
              return Promise.resolve(true);
          }
          // tslint:disable-next-line:no-console
          console.log('viewport canLeave', component.canLeave(this.instruction, this.nextInstruction));
          const result = component.canLeave(this.instruction, this.nextInstruction);
          if (typeof result === 'boolean') {
              return Promise.resolve(result);
          }
          return result;
      }
      canEnter() {
          if (this.clear) {
              return Promise.resolve(true);
          }
          if (!this.nextContent) {
              return Promise.resolve(false);
          }
          this.loadComponent(this.nextContent);
          if (!this.nextComponent) {
              return Promise.resolve(false);
          }
          const component = this.nextComponent;
          if (!component.canEnter) {
              return Promise.resolve(true);
          }
          const result = component.canEnter(this.nextInstruction, this.instruction);
          // tslint:disable-next-line:no-console
          console.log('viewport canEnter', result);
          if (typeof result === 'boolean') {
              return Promise.resolve(result);
          }
          return result;
      }
      async loadContent() {
          // tslint:disable-next-line:no-console
          console.log('Viewport loadContent', this.name);
          if (this.component) {
              if (this.component.leave) {
                  await this.component.leave(this.instruction, this.nextInstruction);
              }
              // No need to wait for next component activation
              if (!this.nextComponent) {
                  this.removeComponent(this.component);
              }
          }
          if (this.nextComponent) {
              if (this.nextComponent.enter) {
                  const merged = mergeParameters(this.nextParameters, this.nextInstruction.query, this.nextContent.parameters);
                  this.nextInstruction.parameters = merged.parameters;
                  this.nextInstruction.parameterList = merged.list;
                  await this.nextComponent.enter(merged.merged, this.nextInstruction, this.instruction);
              }
              if (!this.element) {
                  // TODO: Refactor this once multi level recursiveness is fixed
                  await this.waitForElement();
                  if (!this.element) {
                      return Promise.resolve(false);
                  }
              }
              // Only when next component activation is done
              if (this.component) {
                  this.removeComponent(this.component);
              }
              this.addComponent(this.nextComponent);
              this.content = this.nextContent;
              this.parameters = this.nextParameters;
              this.instruction = this.nextInstruction;
              this.component = this.nextComponent;
          }
          if (this.clear) {
              this.content = this.parameters = this.component = null;
              this.instruction = this.nextInstruction;
          }
          this.nextContent = this.nextParameters = this.nextInstruction = this.nextComponent = null;
          return Promise.resolve(true);
      }
      description(full = false) {
          if (this.content) {
              const component = this.content.description.name;
              const newScope = this.scope ? this.router.separators.ownsScope : '';
              const parameters = this.parameters ? this.router.separators.parameters + this.parameters : '';
              if (full || newScope.length || this.options.forceDescription) {
                  return `${component}${this.router.separators.viewport}${this.name}${newScope}${parameters}`;
              }
              const viewports = {};
              viewports[component] = component;
              const found = this.owningScope.findViewports(viewports);
              if (!found) {
                  return `${component}${this.router.separators.viewport}${this.name}${newScope}${parameters}`;
              }
              return `${component}${parameters}`;
          }
      }
      scopedDescription(full = false) {
          const descriptions = [this.owningScope.context(full), this.description(full)];
          return descriptions.filter((value) => value && value.length).join(this.router.separators.scope);
      }
      // TODO: Deal with non-string components
      wantComponent(component) {
          let usedBy = this.options.usedBy || [];
          if (typeof usedBy === 'string') {
              usedBy = usedBy.split(',');
          }
          return usedBy.indexOf(component) >= 0;
      }
      // TODO: Deal with non-string components
      acceptComponent(component) {
          if (component === '-' || component === null) {
              return true;
          }
          let usedBy = this.options.usedBy;
          if (!usedBy || !usedBy.length) {
              return true;
          }
          if (typeof usedBy === 'string') {
              usedBy = usedBy.split(',');
          }
          if (usedBy.indexOf(component) >= 0) {
              return true;
          }
          if (usedBy.filter((value) => value.indexOf('*') >= 0).length) {
              return true;
          }
          return false;
      }
      binding(flags) {
          if (this.component) {
              this.component.$bind(flags);
          }
      }
      attaching(flags) {
          if (this.component) {
              this.component.$attach(flags);
          }
      }
      detaching(flags) {
          if (this.component) {
              this.component.$detach(flags);
          }
      }
      unbinding(flags) {
          if (this.component) {
              this.component.$unbind(flags);
          }
      }
      loadComponent(component) {
          this.nextComponent = this.router.container.get(runtime.CustomElementResource.keyFrom(component.description.name));
      }
      addComponent(component) {
          const host = this.element;
          const container = this.router.container;
          const dom = container.get(runtime.IDOM);
          const projectorLocator = container.get(runtime.IProjectorLocator);
          const renderingEngine = container.get(runtime.IRenderingEngine);
          // TODO: get useProxies settings from the template definition
          component.$hydrate(runtime.LifecycleFlags.none, dom, projectorLocator, renderingEngine, host, null);
          component.$bind(runtime.LifecycleFlags.fromStartTask | runtime.LifecycleFlags.fromBind, null);
          component.$attach(runtime.LifecycleFlags.fromStartTask);
      }
      removeComponent(component) {
          component.$detach(runtime.LifecycleFlags.fromStopTask);
          component.$unbind(runtime.LifecycleFlags.fromStopTask | runtime.LifecycleFlags.fromUnbind);
      }
      async waitForElement() {
          if (this.element) {
              return Promise.resolve();
          }
          // tslint:disable-next-line:promise-must-complete
          return new Promise((resolve) => {
              this.elementResolve = resolve;
          });
      }
  }

  class Scope {
      constructor(router, element, parent) {
          this.router = router;
          this.element = element;
          this.parent = parent;
          this.viewport = null;
          this.children = [];
          this.viewports = {};
          this.scopeViewportParts = {};
          this.availableViewports = null;
          if (this.parent) {
              this.parent.addChild(this);
          }
      }
      // TODO: Reduce complexity (currently at 45)
      findViewports(viewports) {
          const componentViewports = [];
          let viewportsRemaining = false;
          // Get a shallow copy of all available viewports (clean if it's the first find)
          if (viewports) {
              this.availableViewports = {};
              this.scopeViewportParts = {};
          }
          this.availableViewports = Object.assign({}, this.viewports, this.availableViewports);
          // Get the parts for this scope (pointing to the rest)
          for (const viewport in viewports) {
              const parts = viewport.split(this.router.separators.scope);
              const vp = parts.shift();
              if (!this.scopeViewportParts[vp]) {
                  this.scopeViewportParts[vp] = [];
              }
              this.scopeViewportParts[vp].push(parts);
          }
          // Configured viewport is ruling
          for (const viewportPart in this.scopeViewportParts) {
              const parameters = viewportPart.split(this.router.separators.parameters);
              const componentViewportPart = parameters.shift();
              const component = componentViewportPart.split(this.router.separators.viewport).shift();
              const componentParameters = component + (parameters.length ? this.router.separators.parameters + parameters.join(this.router.separators.parameters) : '');
              for (const name in this.availableViewports) {
                  const viewport = this.availableViewports[name];
                  // TODO: Also check if (resolved) component wants a specific viewport
                  if (viewport && viewport.wantComponent(component)) {
                      const found = this.foundViewport(viewports, this.scopeViewportParts, viewportPart, componentParameters, viewport);
                      componentViewports.push(...found.componentViewports);
                      viewportsRemaining = viewportsRemaining || found.viewportsRemaining;
                      this.availableViewports[name] = null;
                      // tslint:disable-next-line:no-dynamic-delete
                      delete this.scopeViewportParts[viewportPart];
                      break;
                  }
              }
          }
          // Next in line is specified viewport
          for (const viewportPart in this.scopeViewportParts) {
              const parameters = viewportPart.split(this.router.separators.parameters);
              const componentViewportPart = parameters.shift();
              const parts = componentViewportPart.split(this.router.separators.viewport);
              const component = parts.shift();
              const componentParameters = component + (parameters.length ? this.router.separators.parameters + parameters.join(this.router.separators.parameters) : '');
              let name = parts.shift();
              if (!name || !name.length || name.startsWith('?')) {
                  continue;
              }
              let newScope = false;
              if (name.endsWith(this.router.separators.ownsScope)) {
                  newScope = true;
                  name = name.substring(0, name.length - 1);
              }
              if (!this.viewports[name]) {
                  this.addViewport(name, null, { scope: newScope, forceDescription: true });
                  this.availableViewports[name] = this.viewports[name];
              }
              const viewport = this.availableViewports[name];
              if (viewport && viewport.acceptComponent(component)) {
                  const found = this.foundViewport(viewports, this.scopeViewportParts, viewportPart, componentParameters, viewport);
                  componentViewports.push(...found.componentViewports);
                  viewportsRemaining = viewportsRemaining || found.viewportsRemaining;
                  this.availableViewports[name] = null;
                  // tslint:disable-next-line:no-dynamic-delete
                  delete this.scopeViewportParts[viewportPart];
              }
          }
          // Finally, only one accepting viewport left?
          for (const viewportPart in this.scopeViewportParts) {
              const parameters = viewportPart.split(this.router.separators.parameters);
              const componentViewportPart = parameters.shift();
              const component = componentViewportPart.split(this.router.separators.viewport).shift();
              const componentParameters = component + (parameters.length ? this.router.separators.parameters + parameters.join(this.router.separators.parameters) : '');
              const remainingViewports = [];
              for (const name in this.availableViewports) {
                  const viewport = this.availableViewports[name];
                  if (viewport && viewport.acceptComponent(component)) {
                      remainingViewports.push(viewport);
                  }
              }
              if (remainingViewports.length === 1) {
                  const viewport = remainingViewports.shift();
                  const found = this.foundViewport(viewports, this.scopeViewportParts, viewportPart, componentParameters, viewport);
                  componentViewports.push(...found.componentViewports);
                  viewportsRemaining = viewportsRemaining || found.viewportsRemaining;
                  this.availableViewports[viewport.name] = null;
                  // tslint:disable-next-line:no-dynamic-delete
                  delete this.scopeViewportParts[viewportPart];
                  break;
              }
          }
          viewportsRemaining = viewportsRemaining || Object.keys(this.scopeViewportParts).length > 0;
          // If it's a repeat there might be remaining viewports in scope children
          if (!viewports) {
              for (const child of this.children) {
                  const found = child.findViewports();
                  componentViewports.push(...found.componentViewports);
                  viewportsRemaining = viewportsRemaining || found.viewportsRemaining;
              }
          }
          return {
              componentViewports: componentViewports,
              viewportsRemaining: viewportsRemaining,
          };
      }
      foundViewport(viewports, scopeViewportParts, viewportPart, component, viewport) {
          const componentViewports = [{ component: component, viewport: viewport }];
          let viewportsRemaining = false;
          if (scopeViewportParts[viewportPart].length) {
              const scope = viewport.scope || viewport.owningScope;
              for (const remainingParts of scopeViewportParts[viewportPart]) {
                  if (remainingParts.length) {
                      const remaining = remainingParts.join(this.router.separators.scope);
                      const vps = {};
                      vps[remaining] = viewports[viewportPart + this.router.separators.scope + remaining];
                      const scoped = scope.findViewports(vps);
                      componentViewports.push(...scoped.componentViewports);
                      viewportsRemaining = viewportsRemaining || scoped.viewportsRemaining;
                  }
              }
          }
          return {
              componentViewports: componentViewports,
              viewportsRemaining: viewportsRemaining,
          };
      }
      // public findViewport(name: string): Viewport {
      //   const parts = name.split(this.router.separators.scope);
      //   const names = parts.shift().split(this.router.separators.viewport);
      //   const comp = names.shift();
      //   name = names.shift();
      //   let newScope = false;
      //   if (name.endsWith(this.router.separators.ownsScope)) {
      //     newScope = true;
      //     name = name.substring(0, name.length - 1);
      //   }
      //   const viewport = this.resolveViewport(name, comp) || this.addViewport(name, null, { scope: newScope });
      //   if (!parts.length) {
      //     return viewport;
      //   } else {
      //     const scope = viewport.scope || viewport.owningScope;
      //     return scope.findViewport(parts.join(this.router.separators.scope));
      //   }
      // }
      // public resolveViewport(name: string, component: string): Viewport {
      //   if (name.length && name.charAt(0) !== '?') {
      //     return this.viewports[name];
      //   }
      //   // Need more ways to resolve viewport based on component name!
      //   const comp = this.resolveComponent(component);
      //   if (comp.viewport) {
      //     name = comp.viewport;
      //     return this.viewports[name];
      //   }
      //   return null;
      // }
      addViewport(name, element, options) {
          let viewport = this.viewports[name];
          if (!viewport) {
              let scope;
              if (options.scope) {
                  scope = new Scope(this.router, element, this);
                  this.router.scopes.push(scope);
              }
              viewport = this.viewports[name] = new Viewport(this.router, name, element, this, scope, options);
          }
          if (element) {
              viewport.setElement(element, options);
          }
          return viewport;
      }
      removeViewport(viewport) {
          if (viewport.scope) {
              this.router.removeScope(viewport.scope);
          }
          // tslint:disable-next-line:no-dynamic-delete
          delete this.viewports[viewport.name];
          return Object.keys(this.viewports).length;
      }
      removeScope() {
          for (const child of this.children) {
              child.removeScope();
          }
          for (const viewport in this.viewports) {
              this.router.removeViewport(this.viewports[viewport]);
          }
      }
      renderViewport(viewport) {
          return viewport.canEnter().then(() => viewport.loadContent());
      }
      addChild(child) {
          if (this.children.indexOf(child) < 0) {
              this.children.push(child);
          }
      }
      removeChild(child) {
          this.children.splice(this.children.indexOf(child), 1);
      }
      viewportStates(full = false, active = false) {
          const states = [];
          for (const vp in this.viewports) {
              const viewport = this.viewports[vp];
              if ((viewport.options.noHistory || (viewport.options.noLink && !full)) && !active) {
                  continue;
              }
              states.push(viewport.scopedDescription(full));
          }
          for (const scope of this.children) {
              states.push(...scope.viewportStates(full));
          }
          return states.filter((value) => value && value.length);
      }
      allViewports() {
          const viewports = [];
          for (const viewport in this.viewports) {
              viewports.push(this.viewports[viewport]);
          }
          for (const scope of this.children) {
              viewports.push(...scope.allViewports());
          }
          return viewports;
      }
      context(full = false) {
          if (!this.element || !this.parent) {
              return '';
          }
          const parents = [];
          if (this.viewport) {
              parents.unshift(this.viewport.description(full));
          }
          let viewport = this.parent.closestViewport(this.element.parentElement);
          while (viewport && viewport.owningScope === this.parent) {
              parents.unshift(viewport.description(full));
              viewport = this.closestViewport(viewport.element.parentElement);
          }
          parents.unshift(this.parent.context(full));
          return parents.filter((value) => value && value.length).join(this.router.separators.scope);
      }
      resolveComponent(component) {
          if (typeof component === 'string') {
              const resolver = this.router.container.getResolver(runtime.CustomElementResource.keyFrom(component));
              if (resolver !== null) {
                  component = resolver.getFactory(this.router.container).Type;
              }
          }
          return component;
      }
      // This is not an optimal way of doing this
      closestViewport(element) {
          let closest = Number.MAX_SAFE_INTEGER;
          let viewport;
          for (const vp in this.viewports) {
              const viewportElement = this.viewports[vp].element;
              let el = element;
              let i = 0;
              while (el) {
                  if (el === viewportElement) {
                      break;
                  }
                  i++;
                  el = el.parentElement;
              }
              if (i < closest) {
                  closest = i;
                  viewport = this.viewports[vp];
              }
          }
          return viewport;
      }
  }

  class Router {
      constructor(container) {
          this.container = container;
          this.viewports = {};
          this.scopes = [];
          this.navs = {};
          this.activeComponents = [];
          this.addedViewports = [];
          this.isActive = false;
          this.isRedirecting = false;
          this.pendingNavigations = [];
          this.processingNavigation = null;
          this.linkCallback = (info) => {
              let href = info.href;
              if (href.startsWith('#')) {
                  href = href.substring(1);
              }
              if (!href.startsWith('/')) {
                  const scope = this.closestScope(info.anchor);
                  const context = scope.context();
                  if (context) {
                      href = `/${context}${this.separators.scope}${href}`;
                  }
              }
              this.historyBrowser.setHash(href);
          };
          this.historyBrowser = new HistoryBrowser();
          this.linkHandler = new LinkHandler();
      }
      activate(options) {
          if (this.isActive) {
              throw new Error('Router has already been activated.');
          }
          this.isActive = true;
          this.options = Object.assign({
              callback: (navigationInstruction) => {
                  this.historyCallback(navigationInstruction);
              }
          }, options);
          this.separators = Object.assign({
              viewport: '@',
              sibling: '+',
              scope: '/',
              ownsScope: '!',
              parameters: '=',
              add: '+',
              clear: '-',
              action: '.',
          }, this.options.separators);
          this.linkHandler.activate({ callback: this.linkCallback });
          return this.historyBrowser.activate(this.options).catch(error => { throw error; });
      }
      deactivate() {
          if (!this.isActive) {
              throw new Error('Router has not been activated.');
          }
          this.linkHandler.deactivate();
          this.historyBrowser.deactivate();
          return;
      }
      historyCallback(instruction) {
          this.pendingNavigations.push(instruction);
          this.processNavigations().catch(error => { throw error; });
      }
      // TODO: Reduce complexity (currently at 46)
      async processNavigations() {
          if (this.processingNavigation !== null || !this.pendingNavigations.length) {
              return Promise.resolve();
          }
          const instruction = this.pendingNavigations.shift();
          this.processingNavigation = instruction;
          if (this.options.reportCallback) {
              this.options.reportCallback(instruction);
          }
          if (instruction.isCancel) {
              this.processingNavigation = null;
              return Promise.resolve();
          }
          let clearViewports = false;
          let fullStateInstruction = false;
          if ((instruction.isBack || instruction.isForward) && instruction.fullStatePath) {
              instruction.path = instruction.fullStatePath;
              fullStateInstruction = true;
              // tslint:disable-next-line:no-commented-code
              // if (!confirm('Perform history navigation?')) {
              //   this.historyBrowser.cancel();
              //   this.processingNavigation = null;
              //   return Promise.resolve();
              // }
          }
          let path = instruction.path;
          if (this.options.transformFromUrl && !fullStateInstruction) {
              path = this.options.transformFromUrl(path, this);
              if (Array.isArray(path)) {
                  path = this.statesToString(path);
              }
          }
          if (path === this.separators.clear || path.startsWith(this.separators.clear + this.separators.add)) {
              clearViewports = true;
              if (path.startsWith(this.separators.clear)) {
                  path = path.substring(1);
              }
          }
          const parsedQuery = parseQuery(instruction.query);
          instruction.parameters = parsedQuery.parameters;
          instruction.parameterList = parsedQuery.list;
          const views = this.findViews(path);
          if (!views && !Object.keys(views).length && !clearViewports) {
              this.processingNavigation = null;
              return Promise.resolve();
          }
          this.ensureRootScope();
          const usedViewports = (clearViewports ? this.rootScope.allViewports().filter((value) => value.component !== null) : []);
          const defaultViewports = this.rootScope.allViewports().filter((value) => value.options.default && value.component === null);
          let keepHistoryEntry = instruction.isFirst;
          // TODO: Take care of cancellations down in subsets/iterations
          let { componentViewports, viewportsRemaining } = this.rootScope.findViewports(views);
          let guard = 100;
          while (componentViewports.length || viewportsRemaining || defaultViewports.length) {
              // Guard against endless loop
              if (!guard--) {
                  break;
              }
              const changedViewports = [];
              for (const componentViewport of componentViewports) {
                  const { component, viewport } = componentViewport;
                  if (viewport.setNextContent(component, instruction)) {
                      changedViewports.push(viewport);
                  }
                  const usedIndex = usedViewports.findIndex((value) => value === viewport);
                  if (usedIndex >= 0) {
                      usedViewports.splice(usedIndex, 1);
                  }
                  const defaultIndex = defaultViewports.findIndex((value) => value === viewport);
                  if (defaultIndex >= 0) {
                      defaultViewports.splice(defaultIndex, 1);
                  }
              }
              for (const viewport of usedViewports) {
                  if (viewport.setNextContent(this.separators.clear, instruction)) {
                      changedViewports.push(viewport);
                  }
              }
              // TODO: Support/review viewports not found in first iteration
              let vp;
              while (vp = defaultViewports.shift()) {
                  if (vp.setNextContent(vp.options.default, instruction)) {
                      changedViewports.push(vp);
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
                  this.processingNavigation = null;
                  return Promise.resolve();
              }
              results = await Promise.all(changedViewports.map((value) => value.canEnter()));
              if (results.findIndex((value) => value === false) >= 0) {
                  this.historyBrowser.cancel();
                  this.processingNavigation = null;
                  return Promise.resolve();
              }
              await Promise.all(changedViewports.map((value) => value.loadContent()));
              // TODO: Remove this once multi level recursiveness has been fixed
              // results = await Promise.all(changedViewports.map((value) => value.loadContent()));
              // if (results.findIndex((value) => value === false) >= 0) {
              //   this.historyBrowser.cancel();
              //   return Promise.resolve();
              // }
              if (changedViewports.reduce((accumulated, current) => !current.options.noHistory || accumulated, keepHistoryEntry)) {
                  keepHistoryEntry = true;
              }
              // TODO: Fix multi level recursiveness!
              const remaining = this.rootScope.findViewports();
              componentViewports = [];
              let addedViewport;
              while (addedViewport = this.addedViewports.shift()) {
                  if (!remaining.componentViewports.find((value) => value.viewport === addedViewport.viewport)) {
                      componentViewports.push(addedViewport);
                  }
              }
              componentViewports = [...componentViewports, ...remaining.componentViewports];
              viewportsRemaining = remaining.viewportsRemaining;
          }
          this.replacePaths(instruction);
          if (!keepHistoryEntry) {
              this.historyBrowser.pop().catch(error => { throw error; });
          }
          this.processingNavigation = null;
          if (this.pendingNavigations.length) {
              this.processNavigations().catch(error => { throw error; });
          }
      }
      addProcessingViewport(viewport, component) {
          if (this.processingNavigation) {
              this.addedViewports.push({ viewport: viewport, component: component });
          }
      }
      // public view(views: string | Record<string, Viewport>, title?: string, data?: Record<string, unknown>): Promise<void> {
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
      findViews(path) {
          const views = {};
          // TODO: Let this govern start of scope
          if (path.startsWith('/')) {
              path = path.substring(1);
          }
          const sections = path.split(this.separators.sibling);
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
      findScope(element) {
          this.ensureRootScope();
          return this.closestScope(element);
      }
      // Called from the viewport custom element in attached()
      addViewport(name, element, options) {
          // tslint:disable-next-line:no-console
          console.log('Viewport added', name, element);
          const parentScope = this.findScope(element);
          return parentScope.addViewport(name, element, options);
      }
      // Called from the viewport custom element
      removeViewport(viewport) {
          // TODO: There's something hinky with remove!
          const scope = viewport.owningScope;
          if (!scope.removeViewport(viewport)) {
              this.removeScope(scope);
          }
      }
      removeScope(scope) {
          if (scope !== this.rootScope) {
              scope.removeScope();
              const index = this.scopes.indexOf(scope);
              if (index >= 0) {
                  this.scopes.splice(index, 1);
              }
          }
      }
      goto(pathOrViewports, title, data) {
          if (typeof pathOrViewports === 'string') {
              this.historyBrowser.goto(pathOrViewports, title, data);
          }
          // else {
          //   this.view(pathOrViewports, title, data);
          // }
      }
      replace(pathOrViewports, title, data) {
          if (typeof pathOrViewports === 'string') {
              this.historyBrowser.replace(pathOrViewports, title, data);
          }
      }
      refresh() {
          this.historyBrowser.refresh();
      }
      back() {
          this.historyBrowser.back();
      }
      forward() {
          this.historyBrowser.forward();
      }
      statesToString(states) {
          const stringStates = [];
          for (const state of states) {
              // TODO: Support non-string components
              let stateString = state.component;
              if (state.viewport) {
                  stateString += this.separators.viewport + state.viewport;
              }
              if (state.parameters) {
                  // TODO: Support more than one parameter
                  for (const key in state.parameters) {
                      stateString += this.separators.parameters + state.parameters[key];
                  }
              }
              stringStates.push(stateString);
          }
          return stringStates.join(this.separators.sibling);
      }
      statesFromString(statesString) {
          const states = [];
          const stateStrings = statesString.split(this.separators.sibling);
          for (const stateString of stateStrings) {
              let component, viewport, parameters;
              const [componentPart, rest] = stateString.split(this.separators.viewport);
              if (rest === undefined) {
                  [component, parameters] = componentPart.split(this.separators.parameters);
              }
              else {
                  component = componentPart;
                  [viewport, parameters] = rest.split(this.separators.parameters);
              }
              // TODO: Support more than one parameter
              const state = { component: component };
              if (viewport) {
                  state.viewport = viewport;
              }
              if (parameters) {
                  state.parameters = { id: parameters };
              }
              states.push(state);
          }
          return states;
      }
      setNav(name, routes) {
          const nav = this.findNav(name);
          if (nav) {
              nav.routes = [];
          }
          this.addNav(name, routes);
      }
      addNav(name, routes) {
          let nav = this.navs[name];
          if (!nav) {
              nav = this.navs[name] = new Nav(this, name);
          }
          nav.addRoutes(routes);
      }
      findNav(name) {
          return this.navs[name];
      }
      ensureRootScope() {
          if (!this.rootScope) {
              const aureliaRootElement = this.container.get(runtime.Aurelia).root().$host;
              this.rootScope = new Scope(this, aureliaRootElement, null);
              this.scopes.push(this.rootScope);
          }
      }
      closestScope(element) {
          let closest = Number.MAX_SAFE_INTEGER;
          let scope;
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
      removeStateDuplicates(states) {
          let sorted = states.slice().sort((a, b) => b.split(this.separators.scope).length - a.split(this.separators.scope).length);
          sorted = sorted.map((value) => `${this.separators.scope}${value}${this.separators.scope}`);
          let unique = [];
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
      replacePaths(instruction) {
          this.activeComponents = this.rootScope.viewportStates(true, true);
          this.activeComponents = this.removeStateDuplicates(this.activeComponents);
          let viewportStates = this.rootScope.viewportStates();
          viewportStates = this.removeStateDuplicates(viewportStates);
          let state = viewportStates.join(this.separators.sibling);
          if (this.options.transformToUrl) {
              state = this.options.transformToUrl(this.statesFromString(state), this);
          }
          let fullViewportStates = this.rootScope.viewportStates(true);
          fullViewportStates = this.removeStateDuplicates(fullViewportStates);
          fullViewportStates.unshift(this.separators.clear);
          const query = (instruction.query && instruction.query.length ? `?${instruction.query}` : '');
          this.historyBrowser.replacePath(state + query, fullViewportStates.join(this.separators.sibling) + query, instruction);
      }
  }
  Router.inject = [kernel.IContainer];

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  class ViewportCustomElement {
      constructor(router, element) {
          this.router = router;
          this.element = element;
          this.name = 'default';
          this.scope = null;
          this.usedBy = null;
          this.default = null;
          this.noLink = null;
          this.noHistory = null;
          this.viewport = null;
      }
      attached() {
          const options = { scope: this.element.hasAttribute('scope') };
          if (this.usedBy && this.usedBy.length) {
              options.usedBy = this.usedBy;
          }
          if (this.default && this.default.length) {
              options.default = this.default;
          }
          if (this.element.hasAttribute('no-link')) {
              options.noLink = true;
          }
          if (this.element.hasAttribute('no-history')) {
              options.noHistory = true;
          }
          this.viewport = this.router.addViewport(this.name, this.element, options);
      }
      detached() {
          this.router.removeViewport(this.viewport);
      }
      binding(flags) {
          if (this.viewport) {
              this.viewport.binding(flags);
          }
      }
      attaching(flags) {
          if (this.viewport) {
              this.viewport.attaching(flags);
          }
      }
      detaching(flags) {
          if (this.viewport) {
              this.viewport.detaching(flags);
          }
      }
      unbinding(flags) {
          if (this.viewport) {
              this.viewport.unbinding(flags);
          }
      }
  }
  ViewportCustomElement.inject = [Router, runtime.INode];
  __decorate([
      runtime.bindable
  ], ViewportCustomElement.prototype, "name", void 0);
  __decorate([
      runtime.bindable
  ], ViewportCustomElement.prototype, "scope", void 0);
  __decorate([
      runtime.bindable
  ], ViewportCustomElement.prototype, "usedBy", void 0);
  __decorate([
      runtime.bindable
  ], ViewportCustomElement.prototype, "default", void 0);
  __decorate([
      runtime.bindable
  ], ViewportCustomElement.prototype, "noLink", void 0);
  __decorate([
      runtime.bindable
  ], ViewportCustomElement.prototype, "noHistory", void 0);
  // tslint:disable-next-line:no-invalid-template-strings
  runtime.CustomElementResource.define({ name: 'au-viewport', template: '<template><div class="viewport-header"> Viewport: <b>${name}</b> </div></template>' }, ViewportCustomElement);

  // NOTE: this file is currently not in use
  exports.NavCustomElement = class NavCustomElement {
      constructor(router) {
          this.router = router;
          this.name = null;
          this.routes = null;
          this.level = 0;
      }
      get navRoutes() {
          const nav = this.router.findNav(this.name);
          return (nav ? nav.routes : []);
      }
      active(route) {
          return 'Active';
      }
  };
  __decorate([
      runtime.bindable
  ], exports.NavCustomElement.prototype, "name", void 0);
  __decorate([
      runtime.bindable
  ], exports.NavCustomElement.prototype, "routes", void 0);
  __decorate([
      runtime.bindable
  ], exports.NavCustomElement.prototype, "level", void 0);
  exports.NavCustomElement = __decorate([
      kernel.inject(Router, Element),
      runtime.customElement({
          name: 'au-nav', template: `<template>
  <nav if.bind="name" class="\${name}">
    <au-nav routes.bind="navRoutes" containerless></au-nav>
  </nav>
  <ul if.bind="routes" class="nav-level-\${level}">
    <li repeat.for="route of routes" class="\${route.active} \${route.hasChildren}">
      <a if.bind="route.link && route.link.length" href="\${route.link}">\${route.title}</a>
      <a if.bind="!route.link || !route.link.length" click.delegate="route.toggleActive()" href="">\${route.title}</a>
      <au-nav if.bind="route.children" routes.bind="route.children" level.bind="level + 1" containerless></au-nav>
    </li>
  </ul>
</template>`
      })
  ], exports.NavCustomElement);

  exports.HistoryBrowser = HistoryBrowser;
  exports.LinkHandler = LinkHandler;
  exports.Nav = Nav;
  exports.Router = Router;
  exports.Scope = Scope;
  exports.Viewport = Viewport;
  exports.ViewportCustomElement = ViewportCustomElement;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
