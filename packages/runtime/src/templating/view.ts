import { DI, Reporter } from '@aurelia/kernel';
import { INode, INodeSequence, IRenderLocation } from '../dom';
import { IAttach, IBindScope, IMountable, State, Lifecycle } from '../lifecycle';
import { BindingFlags, IScope } from '../observation';
import { IRenderable, IRenderContext, ITemplate } from './rendering-engine';

export type RenderCallback = (view: IView) => void;

export interface IView extends IBindScope, IRenderable, IAttach, IMountable {
  readonly cache: IViewCache;

  hold(location: IRenderLocation): void;
  release(): boolean;

  lockScope(scope: IScope): void;
}

export interface IViewFactory extends IViewCache {
  readonly name: string;
  create(): IView;
}

export interface IViewCache {
  readonly isCaching: boolean;
  setCacheSize(size: number | '*', doNotOverrideIfAlreadySet: boolean): void;
  canReturnToCache(view: IView): boolean;
  tryReturnToCache(view: IView): boolean;
}

export const IViewFactory = DI.createInterface<IViewFactory>().noDefault();

/*@internal*/
export interface View extends IView {}

/*@internal*/
export class View implements IView {
  public $bindableHead: IBindScope = null;
  public $bindableTail: IBindScope = null;

  public $nextBind: IBindScope = null;
  public $prevBind: IBindScope = null;

  public $attachableHead: IAttach = null;
  public $attachableTail: IAttach = null;

  public $nextAttach: IAttach = null;
  public $prevAttach: IAttach = null;

  // Pre-setting to null for performance (see RuntimeBehavior.create())
  public $nextMount: IMountable = null;

  public $state: State = State.none;
  public $scope: IScope = null;
  public $nodes: INodeSequence;
  public $context: IRenderContext;
  public location: IRenderLocation;
  private isFree: boolean = false;

  constructor(public cache: IViewCache) {}

  public hold(location: IRenderLocation): void {
    if (!location.parentNode) { // unmet invariant: location must be a child of some other node
      throw Reporter.error(60); // TODO: organize error codes
    }
    this.location = location;
    const lastChild = this.$nodes.lastChild;
    if (lastChild && lastChild.nextSibling === location) {
      this.$state &= ~State.needsMount;
    } else {
      this.$state |= State.needsMount;
    }
  }

  public lockScope(scope: IScope): void {
    this.$scope = scope;
    this.$bind = lockedBind;
  }

  public release(): boolean {
    this.isFree = true;
    if (this.$state & State.isAttached) {
      return this.cache.canReturnToCache(this);
    }

    return this.$unmount();
  }

  public $bind(flags: BindingFlags, scope: IScope): void {
    flags |= BindingFlags.fromBind;

    if (this.$state & State.isBound) {
      if (this.$scope === scope) {
        return;
      }

      this.$unbind(flags);
    }
    // add isBinding flag
    this.$state |= State.isBinding;

    this.$scope = scope;
    let current = this.$bindableHead;
    while (current !== null) {
      current.$bind(flags, scope);
      current = current.$nextBind;
    }

    // add isBound flag and remove isBinding flag
    this.$state |= State.isBound;
    this.$state &= ~State.isBinding;
  }

  public $unbind(flags: BindingFlags): void {
    if (this.$state & State.isBound) {
      // add isUnbinding flag
      this.$state |= State.isUnbinding;

      flags |= BindingFlags.fromUnbind;

      let current = this.$bindableTail;
      while (current !== null) {
        current.$unbind(flags);
        current = current.$prevBind;
      }

      // remove isBound and isUnbinding flags
      this.$state &= ~(State.isBound | State.isUnbinding);
      this.$scope = null;
    }
  }

  public $attach(): void {
    if (this.$state & State.isAttached) {
      return;
    }
    // add isAttaching flag
    this.$state |= State.isAttaching;

    let current = this.$attachableHead;
    while (current !== null) {
      current.$attach();
      current = current.$nextAttach;
    }

    if (this.$state & State.needsMount) {
      Lifecycle.queueMount(this);
    }

    // add isAttached flag, remove isAttaching flag
    this.$state |= State.isAttached;
    this.$state &= ~State.isAttaching;
  }

  public $detach(): void {
    if (this.$state & State.isAttached) {
      // add isDetaching flag
      this.$state |= State.isDetaching;

      Lifecycle.queueUnmount(this);

      let current = this.$attachableTail;
      while (current !== null) {
        current.$detach();
        current = current.$prevAttach;
      }

      // remove isAttached and isDetaching flags
      this.$state &= ~(State.isAttached | State.isDetaching);
    }
  }

  public $mount(): void {
    this.$state &= ~State.needsMount;
    this.$nodes.insertBefore(this.location);
  }

  public $unmount(): boolean {
    this.$state |= State.needsMount;
    this.$nodes.remove();

    if (this.isFree) {
      this.isFree = false;
      if (this.cache.tryReturnToCache(this)) {
        this.$state |= State.isCached;
        return true;
      }
    }
    return false;
  }

  public $cache(): void {
    let current = this.$attachableTail;
    while (current !== null) {
      current.$cache();
      current = current.$prevAttach;
    }
  }
}

/*@internal*/
export class ViewFactory implements IViewFactory {
  public static maxCacheSize: number = 0xFFFF;
  public isCaching: boolean = false;

  private cacheSize: number = -1;
  private cache: View[] = null;

  constructor(public name: string, private template: ITemplate) {}

  public setCacheSize(size: number | '*', doNotOverrideIfAlreadySet: boolean): void {
    if (size) {
      if (size === '*') {
        size = ViewFactory.maxCacheSize;
      } else if (typeof size === 'string') {
        size = parseInt(size, 10);
      }

      if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
        this.cacheSize = size;
      }
    }

    if (this.cacheSize > 0) {
      this.cache = [];
    } else {
      this.cache = null;
    }

    this.isCaching = this.cacheSize > 0;
  }

  public canReturnToCache(view: IView): boolean {
    return this.cache !== null && this.cache.length < this.cacheSize;
  }

  public tryReturnToCache(view: View): boolean {
    if (this.canReturnToCache(view)) {
      view.$cache();
      this.cache.push(view);
      return true;
    }

    return false;
  }

  public create(): IView {
    const cache = this.cache;
    let view: View;

    if (cache !== null && cache.length > 0) {
      view = cache.pop();
      view.$state &= ~State.isCached;
      return view;
    }

    view = new View(this);
    this.template.render(view);
    if (!view.$nodes) {
      throw Reporter.error(90);
    }
    return view;
  }
}

function lockedBind(this: View, flags: BindingFlags): void {
  if (this.$state & State.isBound) {
    return;
  }

  flags |= BindingFlags.fromBind;
  const lockedScope = this.$scope;
  let current = this.$bindableHead;
  while (current !== null) {
    current.$bind(flags, lockedScope);
    current = current.$nextBind;
  }

  this.$state |= State.isBound;
}
