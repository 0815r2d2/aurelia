import { Template, CompiledViewSource, ITemplate } from "./template";
import { IBinding } from "../binding/binding";
import { IView } from "./view";
import { IScope } from "../binding/binding-interfaces";
import { createOverrideContext } from "../binding/scope";
import { TaskQueue } from "../task-queue";
import { Observer } from "../binding/property-observation";
import { makeElementIntoAnchor } from "./anchors";
import { IShadowSlot, ShadowDOM } from "./shadow-dom";

export interface IBindSelf {
  bind(): void;
  unbind(): void;
}
export interface IAttach {
  attach(): void;
  detach(): void;
}

export interface IApplyToTarget {
  applyTo(target: Element): this;
}

export interface IComponent extends IBindSelf, IAttach, IApplyToTarget {
  
}

export interface CompiledElementSource extends CompiledViewSource {
  name: string;
  containerless?: boolean;
  hasSlots?: boolean;
  observers: any[];
}

type Constructable = {
  new(...args: any[]): {};
}

type ConstructableComponent = Constructable & {
  new(...args: any[]): IComponent;
  template: ITemplate;
  source: CompiledElementSource;
}

export const Component = {
  fromCompiledSource<T extends Constructable>(ctor: T, source: CompiledElementSource): T & ConstructableComponent {
    let template = Template.fromCompiledSource(source);
      
    return class extends ctor implements IComponent {
      static template: ITemplate = template;
      static source: CompiledElementSource = source;
  
      $bindable: IBinding[] = [];
      $attachable: IAttach[] = [];
      $slots: Record<string, IShadowSlot> = source.hasSlots ? {} : null;
      $contentView: IView = null;

      private $isBound = false;
  
      private $view: IView;
      private $host: Element;
  
      private $changeCallbacks: (() => void)[] = [];
      
      private $scope: IScope = {
        bindingContext: this,
        overrideContext: createOverrideContext()
      };
  
      constructor(...args:any[]) {
        super(...args);
        setupObservers(this, source);
      }
  
      applyTo(host: Element) { 
        this.$host = source.containerless 
          ? makeElementIntoAnchor(host, true)
          : host;

        this.$view = this.createView(this.$host);
  
        if ('created' in this) {
          (<any>this).created();
        }
  
        return this;
      }
  
      createView(host: Element) {
        return template.createFor(this, host);
      }
  
      bind() {
        let scope = this.$scope;
        let bindable = this.$bindable;
  
        for (let i = 0, ii = bindable.length; i < ii; ++i) {
          bindable[i].bind(scope);
        }

        if (source.hasSlots) {
          ShadowDOM.distributeView(this.$contentView, this.$slots);
        }
  
        this.$isBound = true;
  
        let changeCallbacks = this.$changeCallbacks;
  
        for (let i = 0, ii = changeCallbacks.length; i < ii; ++i) {
          changeCallbacks[i]();
        }
  
        if ('bound' in this) {
          (<any>this).bound();
        }
      }
  
      attach() {
        if ('attaching' in this) {
          (<any>this).attaching();
        }
  
        let attachable = this.$attachable;
  
        for (let i = 0, ii = attachable.length; i < ii; ++i) {
          attachable[i].attach();
        }
  
        if (source.containerless) {
          this.$view.insertBefore(this.$host);
        } else {
          this.$view.appendTo(this.$host);
        }
      
        if ('attached' in this) {
          TaskQueue.instance.queueMicroTask(() => (<any>this).attached());
        }
      }
  
      detach() {
        if ('detaching' in this) {
          (<any>this).detaching();
        }
  
        this.$view.remove();
  
        let attachable = this.$attachable;
        let i = attachable.length;
  
        while (i--) {
          attachable[i].detach();
        }
  
        if ('detached' in this) {
          TaskQueue.instance.queueMicroTask(() => (<any>this).detached());
        }
      }
  
      unbind() {
        let bindable = this.$bindable;
        let i = bindable.length;
  
        while (i--) {
          bindable[i].unbind();
        }
  
        if ('unbound' in this) {
          (<any>this).unbound();
        }
  
        this.$isBound = false;
      }
    }
  }
};

function setupObservers(instance, config) {
  let observerConfigs = config.observers;
  let observers = {};

  for (let i = 0, ii = observerConfigs.length; i < ii; ++i) {
    let observerConfig = observerConfigs[i];
    let name = observerConfig.name;

    if ('changeHandler' in observerConfig) {
      let changeHandler = observerConfig.changeHandler;
      observers[name] = new Observer(instance[name], v => instance.$isBound ? instance[changeHandler](v) : void 0);
      instance.$changeCallbacks.push(() => instance[changeHandler](instance[name]));
    } else {
      observers[name] = new Observer(instance[name]);
    }

    createGetterSetter(instance, name);
  }

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
