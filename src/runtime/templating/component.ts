import { ViewEngine, ITemplate, } from './view-engine';
import { View, IViewOwner, IContentView } from './view';
import { ITaskQueue } from '../task-queue';
import { Observer } from '../binding/property-observation';
import { IEmulatedShadowSlot, ShadowDOMEmulation } from './shadow-dom';
import { PLATFORM } from '../platform';
import { IContainer, Registration, DI } from '../di';
import { BindingMode } from '../binding/binding-mode';
import { Constructable, ICallable } from '../interfaces';
import { IBindScope, IAccessor, ISubscribable } from '../binding/observation';
import { IScope, BindingContext } from '../binding/binding-context';
import { IRenderSlot } from './render-slot';
import { IBindSelf, IAttach, AttachContext, DetachContext } from './lifecycle';
import { ICompiledViewSource, IBindableInstruction } from './instructions';
import { INode, DOM, IView, IChildObserver } from '../dom';
import { SubscriberCollection } from '../binding/subscriber-collection';
import { ITemplateCache } from './template-cache';

export interface IElementComponent extends IBindSelf, IAttach, IViewOwner {
  $host: INode;
  $view: IView;
  $contentView: IContentView;
  $slots: Record<string, IEmulatedShadowSlot>;
  $usingSlotEmulation: boolean;

  $hydrate(container: IContainer, taskQueue: ITaskQueue, host: INode, replacements?: Record<string, ICompiledViewSource>, contentNodeOverride?: INode): void;
}

export interface IAttributeComponent extends IBindScope, IAttach { 
  $hydrate(taskQueue: ITaskQueue);
}

export interface IAttributeSource {
  name: string;
  defaultBindingMode?: BindingMode;
  aliases?: string[];
  isTemplateController?: boolean;
}

export interface IValueConverterSource {
  name: string;
}

export interface IBindingBehaviorSource {
  name: string;
}

export interface IAttributeType extends Constructable<IAttributeComponent> {
  source: IAttributeSource;
};

export interface IElementType extends Constructable<IElementComponent> {
  source: ICompiledViewSource;
}

export interface ValueConverterType extends Constructable {
  source: IValueConverterSource;
}

export interface BindingBehaviorType extends Constructable {
  source: IBindingBehaviorSource;
}

export const Component = {
  findElements(nodes: ArrayLike<INode>): IElementComponent[] {
    let components: IElementComponent[] = [];
  
    for (let i = 0, ii = nodes.length; i < ii; ++i) {
      const current = nodes[i];
      const component = DOM.getComponentForNode(current);
      
      if (component !== null) {
        components.push(component);
      }
    }
  
    return components;
  },
  valueConverter<T extends Constructable>(nameOrSource: string | IValueConverterSource, ctor: T): T & ValueConverterType {
    const source = (<any>ctor).source = ensureSource<IValueConverterSource>(nameOrSource);

    (<any>ctor).register = function(container: IContainer) {
      container.register(Registration.singleton(source.name, ctor));
    }

    return <any>ctor;
  },
  bindingBehavior<T extends Constructable>(nameOrSource: string | IBindingBehaviorSource, ctor: T): T & BindingBehaviorType {
    const source = (<any>ctor).source = ensureSource<IBindingBehaviorSource>(nameOrSource);

    (<any>ctor).register = function(container: IContainer) {
      container.register(Registration.singleton(source.name, ctor));
    };

    return <any>ctor;
  },
  attribute<T extends Constructable>(nameOrSource: string | IAttributeSource, ctor: T): T & IAttributeType {
    const source = ensureSource<IAttributeSource>(nameOrSource);
    const observables = (<any>ctor).observables || {};
    
    return class CustomAttribute extends ctor implements IAttributeComponent {
      static source: IAttributeSource = source;

      static register(container: IContainer){
        container.register(Registration.transient(source.name, CustomAttribute));

        let aliases = source.aliases;

        if (aliases) {
          for(let i = 0, ii = aliases.length; i < ii; ++i) {
            container.register(Registration.alias(source.name, aliases[i]));
          }
        }
      }

      private $changeCallbacks: (() => void)[] = [];
      private $behavior: RuntimeBehavior = null;

      $isAttached = false;
      $isBound = false;
      $scope: IScope = null;
      $slot: IRenderSlot = null;

      $hydrate(taskQueue: ITaskQueue) {
        RuntimeBehavior.get(this, observables, CustomAttribute).applyToAttribute(taskQueue, this);

        if (this.$behavior.hasCreated) {
          (<any>this).created();
        }
      }

      $bind(scope: IScope) {
        if (this.$isBound) {
          if (this.$scope === scope) {
            return;
          }
    
          this.$unbind();
        }

        this.$scope = scope
        this.$isBound = true;
  
        const changeCallbacks = this.$changeCallbacks;
  
        for (let i = 0, ii = changeCallbacks.length; i < ii; ++i) {
          changeCallbacks[i]();
        }
  
        if (this.$behavior.hasBound) {
          (<any>this).bound(scope);
        }
      }

      $attach(context: AttachContext){
        if (this.$isAttached) {
          return;
        }

        if (this.$behavior.hasAttaching) {
          (<any>this).attaching();
        }

        if (this.$slot !== null) {
          this.$slot.$attach(context);
        }
      
        if (this.$behavior.hasAttached) {
          context.queueForAttachedCallback(this);
        }

        this.$isAttached = true;
      }

      $detach(context: DetachContext) {
        if (this.$isAttached) {
          if (this.$behavior.hasDetaching) {
            (<any>this).detaching();
          }

          if (this.$slot !== null) {
            this.$slot.$detach(context);
          }
    
          if (this.$behavior.hasDetached) {
            context.queueForDetachedCallback(this);
          }

          this.$isAttached = false;
        }
      }

      $unbind() {
        if (this.$isBound) {
          if (this.$behavior.hasUnbound) {
            (<any>this).unbound();
          }
    
          this.$isBound = false;
        }
      }
    };
  },
  elementFromCompiledSource<T extends Constructable>(source: ICompiledViewSource, ctor: T = null): T & IElementType {
    //Support HTML-Only Elements by providing a generated class.
    if (ctor === null) {
      ctor = <any>class HTMLOnlyElement { };
    }
    
    source.shadowOptions = source.shadowOptions || (<any>ctor).shadowOptions || null;
    source.containerless = source.containerless || (<any>ctor).containerless || false;

    //Merge any observables from view compilation with those from bindable props on the class.
    const observables = Object.assign({}, (<any>ctor).observables, source.observables);

    const CompiledComponent = class extends ctor implements IElementComponent {
      static source: ICompiledViewSource = source;

      static register(container: IContainer){
        container.register(Registration.transient(source.name, CompiledComponent));
      }
  
      $bindable: IBindScope[] = [];
      $attachable: IAttach[] = [];
      $slots: Record<string, IEmulatedShadowSlot> = source.hasSlots ? {} : null;
      $usingSlotEmulation = source.hasSlots || false;
      $view: IView = null;
      $contentView: IContentView = null;
      $slot: IRenderSlot = null;
      $isAttached = false;
      $isBound = false;
      $scope: IScope = {
        bindingContext: this,
        overrideContext: BindingContext.createOverride()
      };
      
      $host: INode = null;
      private $shadowRoot: INode = null;
      private $changeCallbacks: (() => void)[] = [];
      private $behavior: RuntimeBehavior = null;
  
      $hydrate(container: IContainer, taskQueue: ITaskQueue, host: INode, replacements: Record<string, ICompiledViewSource> = PLATFORM.emptyObject, contentOverride?: INode) { 
        RuntimeBehavior.get(this, observables, CompiledComponent).applyToElement(taskQueue, this);
        
        this.$host = source.containerless ? DOM.convertToAnchor(host, true) : host;
        this.$shadowRoot = DOM.createElementViewHost(this.$host, source.shadowOptions);
        this.$usingSlotEmulation = DOM.isUsingSlotEmulation(this.$host);
        this.$contentView = View.fromCompiledContent(this.$host, contentOverride);
        this.$view = this.$createView(container, this.$host, replacements);

        (<any>this.$host).$component = this;
  
        if (this.$behavior.hasCreated) {
          (<any>this).created();
        }
      }
  
      $createView(container: IContainer, host: INode, replacements: Record<string, ICompiledViewSource>) {
        let cache = container.get<ITemplateCache>(ITemplateCache);
        let template = cache.getTemplate(
          source,
          container => {
            let t = ViewEngine.templateFromCompiledSource(container, source);

            //If the element has a view, support Recursive Components by adding self to own view template container.
            if (t.container !== null) {
              CompiledComponent.register(t.container);
            }

            return t;
          }
        );

        return this.$behavior.hasCreateView
          ? (<any>this).createView(host, replacements, template)
          : template.createFor(this, host, replacements);
      }
  
      $bind() {
        if (this.$isBound) {
          return;
        }

        const scope = this.$scope;
        const bindable = this.$bindable;
  
        for (let i = 0, ii = bindable.length; i < ii; ++i) {
          bindable[i].$bind(scope);
        }
  
        this.$isBound = true;
  
        const changeCallbacks = this.$changeCallbacks;
  
        for (let i = 0, ii = changeCallbacks.length; i < ii; ++i) {
          changeCallbacks[i]();
        }
  
        if (this.$behavior.hasBound) {
          (<any>this).bound();
        }
      }
  
      $attach(context?: AttachContext) {
        if (this.$isAttached) {
          return;
        }

        if (!context) {
          context = AttachContext.open(this);
        }

        if (this.$behavior.hasAttaching) {
          (<any>this).attaching();
        }
  
        const attachable = this.$attachable;
  
        for (let i = 0, ii = attachable.length; i < ii; ++i) {
          attachable[i].$attach(context);
        }

        if (this.$slot !== null) {
          this.$slot.$attach(context);
        }

        //Native ShadowDOM would be distributed as soon as we append the view below.
        //So, we emulate the distribution of nodes at the same time.
        if (this.$contentView !== null && this.$slots) {
          ShadowDOMEmulation.distributeContent(this.$contentView, this.$slots);
        }
  
        if (source.containerless) {
          this.$view.insertBefore(this.$host);
        } else {
          this.$view.appendTo(this.$shadowRoot);
        }
      
        if (this.$behavior.hasAttached) {
          context.queueForAttachedCallback(this);
        }

        this.$isAttached = true;

        if (context.wasOpenedBy(this)) {
          context.close();
        }
      }
  
      $detach(context?: DetachContext) {
        if (this.$isAttached) {
          if (!context) {
            context = DetachContext.open(this);
          }

          if (this.$behavior.hasDetaching) {
            (<any>this).detaching();
          }

          context.queueForViewRemoval(this);
    
          const attachable = this.$attachable;
          let i = attachable.length;
    
          while (i--) {
            attachable[i].$detach();
          }

          if (this.$slot !== null) {
            this.$slot.$detach(context);
          }
    
          if (this.$behavior.hasDetached) {
            context.queueForDetachedCallback(this);
          }

          this.$isAttached = false;

          if (context.wasOpenedBy(this)) {
            context.close();
          }
        }
      }
  
      $unbind() {
        if (this.$isBound) {
          const bindable = this.$bindable;
          let i = bindable.length;
    
          while (i--) {
            bindable[i].$unbind();
          }
    
          if (this.$behavior.hasUnbound) {
            (<any>this).unbound();
          }
    
          this.$isBound = false;
        }
      }
    }

    return CompiledComponent;
  }
};

function ensureSource<T>(nameOrSource: any): T {
  let source: any;
    
  if (typeof nameOrSource === 'string') {
    source = { name: source };
  } else {
    source = nameOrSource;
  }

  return source;
}

class RuntimeBehavior {
  private constructor() {}

  observables: Record<string, IBindableInstruction>;
  hasCreated = false;
  hasBound = false;
  hasAttaching = false;
  hasAttached = false;
  hasDetaching = false;
  hasDetached = false;
  hasUnbound = false;
  hasCreateView = false;

  static get(instance, observables: Record<string, IBindableInstruction>, Component: IElementType | IAttributeType) {
    let behavior: RuntimeBehavior = (<any>Component).behavior;
  
    if (behavior === undefined) {
      behavior
        = (<any>Component).behavior
        = RuntimeBehavior.for(instance, observables, Component);
    }

    return behavior;
  }

  private static for(instance, observables: Record<string, IBindableInstruction>, Component: IElementType | IAttributeType) {
    let behavior = new RuntimeBehavior();

    for (let name in instance) {
      if (name in observables) {
        continue;
      }

      const callback = `${name}Changed`;

      if (callback in instance) {
        observables[name] = { callback };
      }
    }

    behavior.observables = observables;
    behavior.hasCreated = 'created' in instance;
    behavior.hasBound = 'bound' in instance;
    behavior.hasAttaching = 'attaching' in instance;
    behavior.hasAttached = 'attached' in instance;
    behavior.hasDetaching = 'detaching' in instance;
    behavior.hasDetached = 'detached' in instance;
    behavior.hasUnbound = 'unbound' in instance;
    behavior.hasCreateView = 'createView' in instance;

    return behavior;
  }

  applyToAttribute(taskQueue: ITaskQueue, instance: IAttributeComponent) {
    this.applyTo(taskQueue, instance);
  }

  applyToElement(taskQueue: ITaskQueue, instance: IElementComponent) {
    const observers = this.applyTo(taskQueue, instance);

    (<any>observers).$children = new ChildrenObserver(taskQueue, instance);

    Reflect.defineProperty(instance, '$children', {
      enumerable: false,
      get: function() {
        return this.$observers.$children.getValue();
      }
    });
  }

  private applyTo(taskQueue: ITaskQueue, instance: any) {
    const observers = {};
    const finalObservables = this.observables;
    const observableNames = Object.getOwnPropertyNames(finalObservables);
  
    for (let i = 0, ii = observableNames.length; i < ii; ++i) {
      const name = observableNames[i];
      const observable = finalObservables[name];
      const changeHandler = observable.callback;
  
      if (changeHandler in instance) {
        observers[name] = new Observer(taskQueue, instance[name], v => instance.$isBound ? instance[changeHandler](v) : void 0);
        instance.$changeCallbacks.push(() => instance[changeHandler](instance[name]));
      } else {
        observers[name] = new Observer(taskQueue, instance[name]);
      }
  
      createGetterSetter(instance, name);
    }
  
    Reflect.defineProperty(instance, '$observers', {
      enumerable: false,
      value: observers
    });

    instance.$behavior = this;

    return observers;
  }
}

function createGetterSetter(instance, name) {
  Reflect.defineProperty(instance, name, {
    enumerable: true,
    get: function() { return this.$observers[name].getValue(); },
    set: function(value) { this.$observers[name].setValue(value); }
  });
}

export class ChildrenObserver extends SubscriberCollection implements IAccessor, ISubscribable, ICallable {
  private observer: IChildObserver = null;
  private children: IElementComponent[] = null;
  private queued = false;

  constructor(private taskQueue: ITaskQueue, private component: IElementComponent) {
    super();
  }

  getValue(): IElementComponent[] {
    if (this.observer === null) {
      this.observer = DOM.createChildObserver(this.component.$host, () => this.onChildrenChanged());
      this.children = Component.findElements(this.observer.childNodes);
    }

    return this.children;
  }

  setValue(newValue) {}

  private onChildrenChanged() {
    this.children = Component.findElements(this.observer.childNodes);

    if ('$childrenChanged' in this.component) {
      (<any>this.component).$childrenChanged();
    }

    if (!this.queued) {
      this.queued = true;
      this.taskQueue.queueMicroTask(this);
    }
  }

  call() {
    this.queued = false;
    this.callSubscribers(this.children);
  }

  subscribe(context: string, callable: ICallable) {
    this.addSubscriber(context, callable);
  }

  unsubscribe(context: string, callable: ICallable) {
    this.removeSubscriber(context, callable);
  }
}
