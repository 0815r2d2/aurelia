import { inject } from '@aurelia/kernel';
import { ForOfStatement } from '../../binding/ast';
import { Binding } from '../../binding/binding';
import { BindingContext, Scope } from '../../binding/binding-context';
import { getCollectionObserver } from '../../binding/observer-locator';
import { SetterObserver } from '../../binding/property-observation';
import { templateController } from '../../custom-attribute';
import { INode, IRenderLocation } from '../../dom';
import { Lifecycle, State } from '../../lifecycle';
import { ICustomAttribute, IRenderable } from '../../lifecycle-render';
import { BindingFlags, CollectionObserver, IBatchedCollectionSubscriber, IObservedArray, IScope, ObservedCollection } from '../../observation';
import { bindable } from '../bindable';
import { IView, IViewFactory } from '../view';

export interface Repeat<T extends ObservedCollection> extends ICustomAttribute, IBatchedCollectionSubscriber {}

@inject(IRenderLocation, IRenderable, IViewFactory)
@templateController('repeat')
export class Repeat<T extends ObservedCollection = IObservedArray> {
  @bindable public items: T;

  public $scope: IScope;
  public $observers: { items: SetterObserver };

  public encapsulationSource: INode = null;
  public views: IView[] = [];
  public observer: CollectionObserver = null;
  public hasPendingInstanceMutation: boolean = false;

  public forOf: ForOfStatement;
  public local: string;

  constructor(
    public location: IRenderLocation,
    public renderable: IRenderable,
    public factory: IViewFactory) { }

  public binding(flags: BindingFlags): void {
    this.checkCollectionObserver();
  }

  public bound(flags: BindingFlags): void {
    let current = this.renderable.$bindableHead;
    while (current !== null) {
      if ((<Binding>current).target === this && (<Binding>current).targetProperty === 'items') {
        this.forOf = (<Binding>current).sourceExpression as ForOfStatement;
        break;
      }
      current = current.$nextBind;
    }
    this.local = this.forOf.declaration.evaluate(flags, this.$scope, null);

    this.processViews(null, flags);
  }

  public attaching(): void {
    const { views, location } = this;
    for (let i = 0, ii = views.length; i < ii; ++i) {
      const view = views[i];
      view.hold(location);
      view.$attach();
    }
  }

  public detaching(): void {
    const { views } = this;
    for (let i = 0, ii = views.length; i < ii; ++i) {
      const view = views[i];
      view.$detach();
      view.release();
    }
  }

  public unbound(flags: BindingFlags): void {
    this.checkCollectionObserver();

    const { views } = this;
    for (let i = 0, ii = views.length; i < ii; ++i) {
      const view = views[i];
      view.$unbind(flags);
    }
  }

  // called by SetterObserver (sync)
  public itemsChanged(newValue: T, oldValue: T, flags: BindingFlags): void {
    this.checkCollectionObserver();
    this.processViews(null, flags | BindingFlags.updateTargetInstance);
  }

  // called by a CollectionObserver (async)
  public handleBatchedChange(indexMap: number[] | null): void {
    this.processViews(indexMap, BindingFlags.fromFlushChanges | BindingFlags.updateTargetInstance);
  }

  // if the indexMap === null, it is an instance mutation, otherwise it's an items mutation
  private processViews(indexMap: number[] | null, flags: BindingFlags): void {
    const views = this.views;
    if (this.$state & State.isBound) {
      const { local, $scope, factory, forOf, items } = this;
      const oldLength = views.length;
      const newLength = forOf.count(items);
      if (oldLength < newLength) {
        views.length = newLength;
        for (let i = oldLength; i < newLength; ++i) {
          views[i] = factory.create();
        }
      } else if (newLength < oldLength) {
        Lifecycle.beginDetach();
        for (let i = newLength, view = views[i]; i < oldLength; view = views[++i]) {
          view.release();
          view.$detach();
        }
        Lifecycle.endDetach();
        for (let i = newLength, view = views[i]; i < oldLength; view = views[++i]) {
          view.$unbind(flags | BindingFlags.fromUnbind);
        }
        views.length = newLength;
        if (newLength === 0) {
          return;
        }
      } else if (newLength === 0) {
        return;
      }

      if (indexMap === null) {
        forOf.iterate(items, (arr, i, item) => {
          const view = views[i];
          if (!!view.$scope && view.$scope.bindingContext[local] === item) {
            view.$bind(flags, Scope.fromParent($scope, view.$scope.bindingContext));
          } else {
            view.$bind(flags, Scope.fromParent($scope, BindingContext.create(local, item)));
          }
        });
      } else {
        forOf.iterate(items, (arr, i, item) => {
          const view = views[i];
          if (indexMap[i] === i && !!view.$scope) {
            view.$bind(flags, Scope.fromParent($scope, view.$scope.bindingContext));
          } else {
            view.$bind(flags, Scope.fromParent($scope, BindingContext.create(local, item)));
          }
        });
      }
    }

    if (this.$state & State.isAttached) {
      const { location } = this;
      Lifecycle.beginAttach();
      if (indexMap === null) {
        for (let i = 0, ii = views.length; i < ii; ++i) {
          const view = views[i];
          view.hold(location);
          view.$attach();
        }
      } else {
        for (let i = 0, ii = views.length; i < ii; ++i) {
          if (indexMap[i] !== i) {
            const view = views[i];
            view.hold(location);
            view.$attach();
          }
        }
      }
      Lifecycle.endAttach();
    }
  }

  private checkCollectionObserver(): void {
    const oldObserver = this.observer;
    if (this.$state & (State.isBound | State.isBinding)) {
      const newObserver = this.observer = getCollectionObserver(this.items);
      if (oldObserver !== newObserver) {
        if (oldObserver) {
          oldObserver.unsubscribeBatched(this);
        }
      }
      if (newObserver) {
        newObserver.subscribeBatched(this);
      }
    } else if (oldObserver) {
      oldObserver.unsubscribeBatched(this);
    }
  }
}
