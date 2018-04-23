import { ViewEngine, ICompiledViewSource, ITemplate, IObservableDescription } from "./view-engine";
import { IView, View, IViewOwner } from "./view";
import { TaskQueue } from "../task-queue";
import { Observer } from "../binding/property-observation";
import { IEmulatedShadowSlot, ShadowDOMEmulation } from "./shadow-dom";
import { FEATURE, DOM, PLATFORM } from "../pal";
import { IContainer, Registration } from "../di";
import { BindingMode } from "../binding/binding-mode";
import { Constructable } from "../interfaces";
import { IBindScope } from "../binding/observation";
import { IScope, BindingContext } from "../binding/binding-context";
import { IViewSlot } from "./view-slot";
import { IBindSelf, IAttach, AttachContext, DetachContext } from "./lifecycle";

export interface IElementComponent extends IBindSelf, IAttach, IViewOwner {
  hydrate(host: Element, content?: IView, replacements?: Record<string, ICompiledViewSource>): void;
}

export interface IAttributeComponent extends IBindScope, IAttach { }

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

export interface IAttributeType extends Constructable {
  new(...args: any[]): IAttributeComponent;
  source: IAttributeSource;
};

export interface IElementType extends Constructable {
  new(...args: any[]): IElementComponent;
  template: ITemplate;
  source: ICompiledViewSource;
}

export interface ValueConverterType extends Constructable {
  source: IValueConverterSource;
}

export interface BindingBehaviorType extends Constructable {
  source: IBindingBehaviorSource;
}

class RuntimeCharacteristics {
  private constructor() {}

  observables: IObservableDescription[] = [];
  hasCreated = false;
  hasBound = false;
  hasAttaching = false;
  hasAttached = false;
  hasDetaching = false;
  hasDetached = false;
  hasUnbound = false;

  static for(instance, Component: IElementType | IAttributeType) {
    let characteristics = new RuntimeCharacteristics();
    let configuredObservables = <Record<string, IObservableDescription>>(<any>Component).observables;
    let observables: IObservableDescription[] = [];

    for (let key in instance) {
      if (configuredObservables) {
        let found = configuredObservables[key];

        if (found) {
          if (found.changeHandler in instance) {
            observables.push(found);
          }

          continue;
        }
      }

      if (`${key}Changed` in instance) {
        observables.push({
          name: key,
          changeHandler: `${key}Changed`
        });
      }
    }

    characteristics.observables = observables;
    characteristics.hasCreated = 'created' in instance;
    characteristics.hasBound = 'bound' in instance;
    characteristics.hasAttaching = 'attaching' in instance;
    characteristics.hasAttached = 'attached' in instance;
    characteristics.hasDetaching = 'detaching' in instance;
    characteristics.hasDetached = 'detached' in instance;
    characteristics.hasUnbound = 'unbound' in instance;

    return characteristics;
  }
}

export const Component = {
  valueConverter<T extends Constructable>(nameOrSource: string | IValueConverterSource, ctor: T): T & ValueConverterType {
    (<any>ctor).source = ensureSource<IValueConverterSource>(nameOrSource);

    (<any>ctor).register = function(container: IContainer) {
      container.register(Registration.singleton(name, ctor));
    }

    return <any>ctor;
  },
  bindingBehavior<T extends Constructable>(nameOrSource: string | IBindingBehaviorSource, ctor: T): T & BindingBehaviorType {
    (<any>ctor).source = ensureSource<IBindingBehaviorSource>(nameOrSource);

    (<any>ctor).register = function(container: IContainer) {
      container.register(Registration.singleton(name, ctor));
    }

    return <any>ctor;
  },
  attribute<T extends Constructable>(nameOrSource: string | IAttributeSource, ctor: T): T & IAttributeType {
    let source = ensureSource<IAttributeSource>(nameOrSource);
    
    return class CustomAttribute extends ctor implements IAttributeComponent {
      static source: IAttributeSource = source;

      static register(container: IContainer){
        container.register(Registration.transient(source.name, CustomAttribute));

        let aliases = source.aliases;

        if (aliases) {
          for(let i = 0, ii = aliases.length; i < ii; ++i) {
            container.register(Registration.transient(aliases[i], CustomAttribute));
          }
        }
      }

      private $changeCallbacks: (() => void)[] = [];
      private $characteristics: RuntimeCharacteristics = null;

      $isAttached = false;
      $isBound = false;
      $scope: IScope = null;
      $viewSlot: IViewSlot = null;

      constructor(...args:any[]) {
        super(...args);
        discoverAndApplyCharacteristics(this, CustomAttribute);

        if (this.$characteristics.hasCreated) {
          (<any>this).created();
        }
      }

      bind(scope: IScope) {
        if (this.$isBound) {
          if (this.$scope === scope) {
            return;
          }
    
          this.unbind();
        }

        this.$scope = scope
        this.$isBound = true;
  
        let changeCallbacks = this.$changeCallbacks;
  
        for (let i = 0, ii = changeCallbacks.length; i < ii; ++i) {
          changeCallbacks[i]();
        }
  
        if (this.$characteristics.hasBound) {
          (<any>this).bound(scope);
        }
      }

      attach(context: AttachContext){
        if (this.$isAttached) {
          return;
        }

        if (this.$characteristics.hasAttaching) {
          (<any>this).attaching();
        }

        if (this.$viewSlot !== null) {
          this.$viewSlot.attach(context);
        }
      
        if (this.$characteristics.hasAttached) {
          context.queueForAttachedCallback(this);
        }

        this.$isAttached = true;
      }

      detach(context: DetachContext) {
        if (this.$isAttached) {
          if (this.$characteristics.hasDetaching) {
            (<any>this).detaching();
          }

          if (this.$viewSlot !== null) {
            this.$viewSlot.detach(context);
          }
    
          if (this.$characteristics.hasDetached) {
            context.queueForDetachedCallback(this);
          }

          this.$isAttached = false;
        }
      }

      unbind() {
        if (this.$isBound) {
          if (this.$characteristics.hasUnbound) {
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

    //Merge any observables from view compilation with any from bindable props on the class.
    const observables = source.observables;

    if (observables) {
      const observableRecord = <Record<string, IObservableDescription>>(<any>ctor).observables || {};

      for (let i = 0, ii = observables.length; i < ii; ++i) {
        const current = observables[i];
        observableRecord[current.name] = current;
      }
    }

    const template = ViewEngine.templateFromCompiledSource(source);
    const CompiledComponent = class extends ctor implements IElementComponent {
      static template: ITemplate = template;
      static source: ICompiledViewSource = source;

      static register(container: IContainer){
        container.register(Registration.transient(source.name, CompiledComponent));
      }
  
      $bindable: IBindScope[] = [];
      $attachable: IAttach[] = [];
      $slots: Record<string, IEmulatedShadowSlot> = source.hasSlots ? {} : null;
      $useShadowDOM = source.shadowOptions && FEATURE.shadowDOM;
      $view: IView = null;
      $contentView: IView = null;
      $isAttached = false;
      $isBound = false;
      $scope: IScope = {
        bindingContext: this,
        overrideContext: BindingContext.createOverride()
      };
      
      private $host: Element = null;
      private $shadowRoot: Element | ShadowRoot = null;
      private $changeCallbacks: (() => void)[] = [];
      private $characteristics: RuntimeCharacteristics = null;
  
      constructor(...args:any[]) {
        super(...args);
        discoverAndApplyCharacteristics(this, CompiledComponent);
      }
  
      hydrate(host: Element, content: IView = View.none, replacements: Record<string, ICompiledViewSource> = PLATFORM.emptyObject) { 
        this.$host = source.containerless 
          ? DOM.makeElementIntoAnchor(host, true)
          : host;

        this.$shadowRoot = this.$useShadowDOM 
          ? host.attachShadow(source.shadowOptions) 
          : this.$host;

        this.$contentView = content;
        this.$view = this.createView(this.$host, replacements);
  
        if (this.$characteristics.hasCreated) {
          (<any>this).created();
        }
      }
  
      createView(host: Element, replacements: Record<string, ICompiledViewSource>) {
        return template.createFor(this, host, replacements);
      }
  
      bind() {
        if (this.$isBound) {
          return;
        }

        let scope = this.$scope;
        let bindable = this.$bindable;
  
        for (let i = 0, ii = bindable.length; i < ii; ++i) {
          bindable[i].bind(scope);
        }
  
        this.$isBound = true;
  
        let changeCallbacks = this.$changeCallbacks;
  
        for (let i = 0, ii = changeCallbacks.length; i < ii; ++i) {
          changeCallbacks[i]();
        }
  
        if (this.$characteristics.hasBound) {
          (<any>this).bound();
        }
      }
  
      attach(context?: AttachContext) {
        if (this.$isAttached) {
          return;
        }

        if (!context) {
          context = AttachContext.open(this);
        }

        if (this.$characteristics.hasAttaching) {
          (<any>this).attaching();
        }
  
        let attachable = this.$attachable;
  
        for (let i = 0, ii = attachable.length; i < ii; ++i) {
          attachable[i].attach(context);
        }
  
        if (source.containerless) {
          this.$view.insertBefore(this.$host);
        } else {
          this.$view.appendTo(this.$shadowRoot);
        }

        //Native ShadowDOM would be distributed as soon as we append the view above.
        //So, we emulate the distribution of nodes at the same time.
        if (this.$contentView !== View.none) {
          ShadowDOMEmulation.distributeView(this.$contentView, this.$slots);
        }
      
        if (this.$characteristics.hasAttached) {
          context.queueForAttachedCallback(this);
        }

        this.$isAttached = true;

        if (context.wasOpenedBy(this)) {
          context.close();
        }
      }
  
      detach(context?: DetachContext) {
        if (this.$isAttached) {
          if (!context) {
            context = DetachContext.open(this);
          }

          if (this.$characteristics.hasDetaching) {
            (<any>this).detaching();
          }

          context.queueForViewRemoval(this);
    
          let attachable = this.$attachable;
          let i = attachable.length;
    
          while (i--) {
            attachable[i].detach();
          }
    
          if (this.$characteristics.hasDetached) {
            context.queueForDetachedCallback(this);
          }

          this.$isAttached = false;

          if (context.wasOpenedBy(this)) {
            context.close();
          }
        }
      }
  
      unbind() {
        if (this.$isBound) {
          let bindable = this.$bindable;
          let i = bindable.length;
    
          while (i--) {
            bindable[i].unbind();
          }
    
          if (this.$characteristics.hasUnbound) {
            (<any>this).unbound();
          }
    
          this.$isBound = false;
        }
      }
    }

    //If the element has a view, support Recursive Components by adding self to own view template container.
    if (template.container !== null) {
      CompiledComponent.register(template.container);
    }

    return CompiledComponent;
  }
};

function discoverAndApplyCharacteristics(instance, Component: IElementType | IAttributeType) {
  let characteristics: RuntimeCharacteristics = (<any>Component).characteristics;

  if (characteristics === undefined) {
    characteristics = (<any>Component).characteristics = RuntimeCharacteristics.for(instance, Component);
  }

  let observables = characteristics.observables;
  let observers = {};

  for (let i = 0, ii = observables.length; i < ii; ++i) {
    let observerConfig = observables[i];
    let name = observerConfig.name;
    let changeHandler = observerConfig.changeHandler;

    observers[name] = new Observer(instance[name], v => instance.$isBound ? instance[changeHandler](v) : void 0);
    instance.$changeCallbacks.push(() => instance[changeHandler](instance[name]));

    createGetterSetter(instance, name);
  }

  instance.$characteristics = characteristics;

  Object.defineProperty(instance, '$observers', {
    enumerable: false,
    value: observers
  });
}

function createGetterSetter(instance, name) {
  Object.defineProperty(instance, name, {
    enumerable: true,
    get: function() { return this.$observers[name].getValue(); },
    set: function(value) { this.$observers[name].setValue(value); }
  });
}

function ensureSource<T>(nameOrSource: any): T {
  let source: any;
    
  if (typeof nameOrSource === 'string') {
    source = { name: source };
  } else {
    source = nameOrSource;
  }

  return source;
}
