import { DOM } from "../pal";
import { View, IView, IViewOwner } from "./view";
import { IElementComponent, IAttach, IBindSelf, IAttributeComponent } from "./component";
import { IBinding, Binding } from "../binding/binding";
import { ViewSlot } from "./view-slot";
import { IShadowSlot, ShadowDOM } from "./shadow-dom";
import { Listener } from "../binding/listener";
import { Call } from "../binding/call";
import { Ref } from "../binding/ref";
import { Expression } from "../binding/expression";
import { DI, IContainer, IResolver, IRegistration} from "../di";
import { BindingMode } from "../binding/binding-mode";
import { IBindScope } from "../binding/observation";
import { IScope } from "../binding/binding-context";

export interface ITemplate {
  container: IContainer;
  createFor(owner: IViewOwner, host?: Node): IView;
}

export interface IObservableDescription {
  name: string;
  changeHandler: string;
}

export interface ICompiledViewSource {
  template: string;
  targetInstructions: any[];
  dependencies?: any[];
  observables?: IObservableDescription[];
  containerless?: boolean;
  shadowOptions?: ShadowRootInit;
  hasSlots?: boolean;
  surrogateInstructions?: any[];
}

const noViewTemplate: ITemplate = {
  container: DI,
  createFor(owner: IViewOwner, host?: Node) {
    return View.none;
  }
};

export interface IVisual extends IBindScope, IAttach, IViewOwner { 
  $isAttached: boolean;
}

export const IViewFactory = DI.createInterface('IViewFactory');

export interface IViewFactory {
  /**
  * Indicates whether this factory is currently using caching.
  */
  isCaching: boolean;

  /**
  * Sets the cache size for this factory.
  * @param size The number of visuals to cache or "*" to cache all.
  * @param doNotOverrideIfAlreadySet Indicates that setting the cache should not override the setting if previously set.
  */
  setCacheSize(size: number | string, doNotOverrideIfAlreadySet: boolean): void;

  /**
  * Returns a visual to the cache.
  * @param view The visual to return to the cache if space is available.
  */
  returnToCache(view: IVisual): void;

  /**
  * Creates a visual or returns one from the internal cache, if available.
  * @return The created visual.
  */
  create(): IVisual;
}

class DefaultViewFactory implements IViewFactory {
  private cacheSize = -1;
  private cache: IVisual[] = null;

  public isCaching = false;

  constructor(private type: any) {}

  setCacheSize(size: number | string, doNotOverrideIfAlreadySet: boolean): void {
    if (size) {
      if (size === '*') {
        size = Number.MAX_VALUE;
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

  returnToCache(visual: IVisual): void {
    if (visual.$isAttached) {
      visual.detach();
    }

    if (visual.$isBound) {
      visual.unbind();
    }

    if (this.cache !== null && this.cache.length < this.cacheSize) {
      this.cache.push(visual);
    }
  }

  create(): IVisual {
    const cache = this.cache;
    const cachedVisual = cache !== null ? (cache.pop() || null) : null;

    if (cachedVisual !== null) {
      return cachedVisual;
    }

    return new this.type();
  }
}

export const ViewEngine = {
  templateFromCompiledSource(source: ICompiledViewSource) {
    if (source && source.template) {
      return new CompiledTemplate(source);
    }

    return noViewTemplate;
  },

  factoryFromCompiledSource(source: ICompiledViewSource): IViewFactory {
    const template = ViewEngine.templateFromCompiledSource(source);

    const CompiledVisual = class extends Visual {
      static template: ITemplate = template;
      static source: ICompiledViewSource = source;

      $slots: Record<string, IShadowSlot> = source.hasSlots ? {} : null;

      createView() {
        return template.createFor(this);
      }
    }

    return new DefaultViewFactory(CompiledVisual);
  }
};

function applyInstruction(owner: IViewOwner, instruction, target, container: TemplateContainer) {
  switch(instruction.type) {
    case 'oneWayText':
      let next = target.nextSibling;
      DOM.treatNodeAsNonWhitespace(next);
      DOM.removeNode(target);
      owner.$bindable.push(new Binding(Expression.from(instruction.source), next, 'textContent', BindingMode.oneWay, container));
      break;
    case 'oneWay':
      owner.$bindable.push(new Binding(Expression.from(instruction.source), target, instruction.target, BindingMode.oneWay, container));
      break;
    case 'fromView':
      owner.$bindable.push(new Binding(Expression.from(instruction.source), target, instruction.target, BindingMode.fromView, container));
      break;
    case 'twoWay':
      owner.$bindable.push(new Binding(Expression.from(instruction.source), target, instruction.target, BindingMode.twoWay, container));
      break;
    case 'listener':
      owner.$bindable.push(new Listener(instruction.source, instruction.strategy, Expression.from(instruction.target), target, instruction.preventDefault, container));
      break;
    case 'call':
      owner.$bindable.push(new Call(Expression.from(instruction.source), target, instruction.target, container));
      break;
    case 'ref':
      owner.$bindable.push(new Ref(Expression.from(instruction.source), target, container));
      break;
    case 'style':
      owner.$bindable.push(new Binding(Expression.from(instruction.source), (target as HTMLElement).style, instruction.target, BindingMode.oneWay, container));
      break;
    case 'property':
      target[instruction.target] = instruction.value;
      break;
    case 'slot':
      if (owner.$useShadowDOM) {
        return;
      }

      let fallbackFactory = instruction.factory;

      if (fallbackFactory === undefined && instruction.fallback) {
        instruction.factory = fallbackFactory = ViewEngine.factoryFromCompiledSource(instruction.fallback);
      }

      let slot = ShadowDOM.createSlot(owner, instruction.name, instruction.destination, fallbackFactory);
      owner.$slots[slot.name] = slot;
      owner.$bindable.push(slot);
      owner.$attachable.push(slot);
      DOM.replaceNode(slot.anchor, target);

      break;
    case 'element':
      let elementInstructions = instruction.instructions;

      container.element.instance = target;
      let elementModel = container.get<IElementComponent>(instruction.resource);
      (<any>elementModel).$contentView = View.fromCompiledElementContent(elementModel, target);

      elementModel.applyTo(target);

      for (let i = 0, ii = elementInstructions.length; i < ii; ++i) {
        let current = elementInstructions[i];
        let realTarget = current.type === 'style' || current.type === 'listener' ? target : elementModel;
        applyInstruction(owner, current, realTarget, container);
      }

      owner.$bindable.push(elementModel);
      owner.$attachable.push(elementModel);

      break;
    case 'attribute':
      let attributeInstructions = instruction.instructions;

      container.element.instance = target;
      let attributeModel = container.get<IAttributeComponent>(instruction.resource);

      for (let i = 0, ii = attributeInstructions.length; i < ii; ++i) {
        applyInstruction(owner, attributeInstructions[i], attributeModel, container);
      }

      owner.$bindable.push(attributeModel);
      owner.$attachable.push(attributeModel);
      break;
    case 'templateController':
      let templateControllerInstructions = instruction.instructions;
      let factory = instruction.factory;

      if (factory === undefined) {
        instruction.factory = factory = ViewEngine.factoryFromCompiledSource(instruction.config);
      }

      container.element.instance = target;
      container.viewFactory.instance = factory;
      container.viewSlot.instance = new ViewSlot(DOM.makeElementIntoAnchor(target), false);
      let templateControllerModel = container.get<IAttributeComponent>(instruction.resource);

      if (instruction.link) {
        (<any>templateControllerModel).link(owner.$attachable[owner.$attachable.length - 1]);
      }

      for (let i = 0, ii = templateControllerInstructions.length; i < ii; ++i) {
        applyInstruction(owner, templateControllerInstructions[i], templateControllerModel, container);
      }

      owner.$bindable.push(templateControllerModel);
      owner.$attachable.push(templateControllerModel);

      break;
  }
}

class FastInstance<T> implements IResolver {
  public instance: T;

  get(handler: IContainer, requestor: IContainer) {
    return this.instance;
  }
}

type TemplateContainer = IContainer & {
  element: FastInstance<Element>,
  viewFactory: FastInstance<IViewFactory>,
  viewSlot: FastInstance<ViewSlot>
};

function createTemplateContainer(dependencies) {
  let container = <TemplateContainer>DI.createChild();

  container.registerResolver(Element, container.element = new FastInstance());
  container.registerResolver(IViewFactory, container.viewFactory = new FastInstance());
  container.registerResolver(ViewSlot, container.viewSlot = new FastInstance());

  if (dependencies) {
    container.register(...dependencies);
  }

  return container;
}

class CompiledTemplate implements ITemplate {
  private element: HTMLTemplateElement;
  container: TemplateContainer;

  constructor(private source: ICompiledViewSource) {
    this.container = createTemplateContainer(source.dependencies);
    this.element = DOM.createTemplateElement();
    this.element.innerHTML = source.template;
  }

  createFor(owner: IViewOwner, host?: Node): IView {
    const source = this.source;
    const view = View.fromCompiledTemplate(this.element);
    const targets = view.findTargets();
    const container = this.container;

    const targetInstructions = source.targetInstructions;

    for (let i = 0, ii = targets.length; i < ii; ++i) {
      let instructions = targetInstructions[i];
      let target = targets[i];

      for (let j = 0, jj = instructions.length; j < jj; ++j) {
        applyInstruction(owner, instructions[j], target, container);
      }
    }

    if (host) {
      const surrogateInstructions = source.surrogateInstructions;
      
      for (let i = 0, ii = surrogateInstructions.length; i < ii; ++i) {
        applyInstruction(owner, surrogateInstructions[i], host, container);
      }
    }

    return view;
  }
}

abstract class Visual implements IVisual {
  $bindable: IBindScope[] = [];
  $attachable: IAttach[] = [];
  $scope: IScope;
  $view: IView;
  $isBound = false;
  $isAttached = false;

  constructor() {
    this.$view = this.createView();
  }

  abstract createView(): IView;

  bind(scope: IScope) {
    this.$scope = scope;

    let bindable = this.$bindable;

    for (let i = 0, ii = bindable.length; i < ii; ++i) {
      bindable[i].bind(scope);
    }

    this.$isBound = true;
  }

  attach() {
    let attachable = this.$attachable;

    for (let i = 0, ii = attachable.length; i < ii; ++i) {
      attachable[i].attach();
    }

    this.$isAttached = true;
  }

  detach() { 
    let attachable = this.$attachable;
    let i = attachable.length;

    while (i--) {
      attachable[i].detach();
    }

    this.$isAttached = false;
  }

  unbind() {
    let bindable = this.$bindable;
    let i = bindable.length;

    while (i--) {
      bindable[i].unbind();
    }

    this.$isBound = false;
  }
}
