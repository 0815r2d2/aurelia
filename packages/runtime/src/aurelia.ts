import { DI, IContainer, IRegistry, PLATFORM, Registration } from '@aurelia/kernel';
import { IDOM, INode } from './dom';
import { LifecycleFlags } from './interfaces';
import { IRenderingEngine } from './rendering-engine';
import { CustomElementResource, ICustomElement, ICustomElementType } from './templating/custom-element';

export interface ISinglePageApp {
  host: unknown;
  component: unknown;
}

export class Aurelia {
  private container: IContainer;
  private components: ICustomElement[];
  private startTasks: (() => void)[];
  private stopTasks: (() => void)[];
  private isStarted: boolean;
  private _root: ICustomElement | null;

  constructor(container: IContainer = DI.createContainer()) {
    this.container = container;
    this.components = [];
    this.startTasks = [];
    this.stopTasks = [];
    this.isStarted = false;
    this._root = null;

    Registration
      .instance(Aurelia, this)
      .register(container, Aurelia);
  }

  public register(...params: (IRegistry | Record<string, Partial<IRegistry>>)[]): this {
    this.container.register(...params);
    return this;
  }

  public app(config: ISinglePageApp): this {
    const host = config.host as INode & {$au?: Aurelia | null};
    let component: ICustomElement;
    const componentOrType = config.component as ICustomElement | ICustomElementType;
    if (CustomElementResource.isType(componentOrType as ICustomElementType)) {
      this.container.register(componentOrType as ICustomElementType);
      component = this.container.get<ICustomElement>(CustomElementResource.keyFrom((componentOrType as ICustomElementType).description.name));
    } else {
      component = componentOrType as ICustomElement;
    }

    const startTask = () => {
      host.$au = this;
      if (!this.components.includes(component)) {
        this._root = component;
        this.components.push(component);
        const re = this.container.get(IRenderingEngine);
        const dom = this.container.get(IDOM);
        component.$hydrate(dom, re, host);
      }

      component.$bind(LifecycleFlags.fromStartTask | LifecycleFlags.fromBind, null);
      component.$attach(LifecycleFlags.fromStartTask | LifecycleFlags.fromAttach, host);
    };

    this.startTasks.push(startTask);

    this.stopTasks.push(() => {
      component.$detach(LifecycleFlags.fromStopTask | LifecycleFlags.fromDetach);
      component.$unbind(LifecycleFlags.fromStopTask | LifecycleFlags.fromUnbind);
      host.$au = null;
    });

    if (this.isStarted) {
      startTask();
    }

    return this;
  }

  public root(): ICustomElement | null {
    return this._root;
  }

  public start(): this {
    for (const runStartTask of this.startTasks) {
      runStartTask();
    }
    this.isStarted = true;
    return this;
  }

  public stop(): this {
    this.isStarted = false;
    for (const runStopTask of this.stopTasks) {
      runStopTask();
    }
    return this;
  }
}

(PLATFORM.global as {Aurelia: unknown}).Aurelia = Aurelia;
