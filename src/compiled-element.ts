import { Template } from "./framework/templating/template";
import { IBinding } from "./framework/binding/binding";
import { View } from "./framework/templating/view";
import { Scope } from "./framework/binding/binding-interfaces";
import { createOverrideContext } from "./framework/binding/scope";
import { oneWayText, twoWay, listener, oneWay } from "./framework/generated";
import { Observer } from "./framework/binding/property-observation";
import { TaskQueue } from "./framework/task-queue";

export interface CompiledElementConfiguration {
  name: string;
  template: Template;
  observers: any[];
  targetInstructions: any[];
  surrogateInstructions: any[];
}

function applyInstruction(component, instruction, target) {
  switch(instruction.type) {
    case 'oneWayText':
      component.$bindings.push(oneWayText(instruction.source, target));
      break;
    case 'oneWay':
      component.$bindings.push(oneWay(instruction.source, target, instruction.target));
      break;
    case 'twoWay':
      component.$bindings.push(twoWay(instruction.source, target, instruction.target));
      break;
    case 'listener':
      component.$bindings.push(listener(instruction.source, target, instruction.target));
      break;
    case 'style':
      component.$bindings.push(oneWay(instruction.source, (target as HTMLElement).style, instruction.target))
      break;
  }
}

function setupObservers(component, config) {
  let observerConfigs = config.observers;
  let observers = {};

  for (let i = 0, ii = observerConfigs.length; i < ii; ++i) {
    let observerConfig = observerConfigs[i];
    let name = observerConfig.name;

    if ('changeHandler' in observerConfig) {
      let changeHandler = observerConfig.changeHandler;
      observers[name] = new Observer(component[name], v => component.$isBound ? component[changeHandler](v) : void 0);
      component.$changeCallbacks.push(() => component[changeHandler](component[name]));
    } else {
      observers[name] = new Observer(component[name]);
    }

    createGetterSetter(component, name);
  }

  Object.defineProperty(component, '$observers', {
    enumerable: false,
    value: observers
  });
}

function createGetterSetter(component, name) {
  Object.defineProperty(component, name, {
    enumerable: true,
    get: function() { return this.$observers[name].getValue(); },
    set: function(value) { this.$observers[name].setValue(value); }
  });
}

export function compiledElement(config: CompiledElementConfiguration) {
  return function<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
      private $bindings: IBinding[] = [];
      private $isBound = false;

      private $view: View;
      private $anchor: Element;

      private $changeCallbacks: (() => void)[] = [];
      
      private $scope: Scope = {
        bindingContext: this,
        overrideContext: createOverrideContext()
      };

      constructor(...args:any[]) {
        super(...args);
        setupObservers(this, config);
      }

      applyTo(anchor: Element) { 
        this.$anchor = anchor;
        this.$view = config.template.create();

        let targets = this.$view.targets;
        let targetInstructions = config.targetInstructions;

        for (let i = 0, ii = targets.length; i < ii; ++i) {
          let instructions = targetInstructions[i];
          let target = targets[i];

          for (let j = 0, jj = instructions.length; j < jj; ++j) {
            let instruction = instructions[j];
            applyInstruction(this, instruction, target);
          }
        }

        let surrogateInstructions = config.surrogateInstructions;

        for (let i = 0, ii = surrogateInstructions.length; i < ii; ++i) {
          applyInstruction(this, surrogateInstructions[i], anchor);
        }

        if ('created' in this) {
          (<any>this).created();
        }

        return this;
      }

      bind() {
        let scope = this.$scope;
        let bindings = this.$bindings;

        for (let i = 0, ii = bindings.length; i < ii; ++i) {
          bindings[i].bind(scope);
        }

        let changeCallbacks = this.$changeCallbacks;

        this.$isBound = true;

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

        //attach children
        this.$view.appendTo(this.$anchor); //attach children before the parent
      
        if ('attached' in this) {
          TaskQueue.instance.queueMicroTask(() => (<any>this).attached());
        }
      }

      detach() {
        if ('detaching' in this) {
          (<any>this).attaching();
        }

        this.$view.remove(); //remove parent before detaching children

        if ('detached' in this) {
          TaskQueue.instance.queueMicroTask(() => (<any>this).detached());
        }
      }

      unbind() {
        let bindings = this.$bindings;
        let i = bindings.length;

        while (i--) {
          bindings[i].unbind();
        }

        if ('unbound' in this) {
          (<any>this).unbound();
        }
      }
    }
  }
}
