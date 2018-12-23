import { PLATFORM, Reporter, Tracer } from '@aurelia/kernel';
import { BindingMode, BindingType, DOM, IExpressionParser, IHTMLElement, IHTMLTemplateElement, INode, Interpolation, IsExpressionOrStatement, IText, NodeType } from '@aurelia/runtime';
import { AttrSyntax } from './ast';
import { IAttributeParser } from './attribute-parser';
import { IBindingCommand } from './binding-command';
import { Char } from './common';
import { AttrInfo, BindableInfo, ElementInfo, ResourceModel } from './resource-model';

export const enum SymbolFlags {
  type                 = 0b000000_111111111,
  isTemplateController = 0b000000_000000001,
  isReplacePart        = 0b000000_000000010,
  isCustomAttribute    = 0b000000_000000100,
  isPlainAttribute     = 0b000000_000001000,
  isCustomElement      = 0b000000_000010000,
  isLetElement         = 0b000000_000100000,
  isPlainElement       = 0b000000_001000000,
  isText               = 0b000000_010000000,
  isBinding            = 0b000000_100000000,
  hasMarker            = 0b000001_000000000,
  hasTemplate          = 0b000010_000000000,
  hasAttributes        = 0b000100_000000000,
  hasBindings          = 0b001000_000000000,
  hasChildNodes        = 0b010000_000000000,
  hasParts             = 0b100000_000000000,
}

/**
 * A html attribute that is associated with a registered resource, specifically a template controller.
 */
export class TemplateControllerSymbol {
  public flags: SymbolFlags;
  public res: string;
  public partName: string | null;
  public physicalNode: IHTMLTemplateElement | null;
  public syntax: AttrSyntax;
  public template: ParentNodeSymbol | null;
  public templateController: TemplateControllerSymbol | null;
  public marker: IHTMLElement;

  private _bindings: BindingSymbol[] | null;
  public get bindings(): BindingSymbol[] {
    if (this._bindings === null) {
      this._bindings = [];
      this.flags |= SymbolFlags.hasBindings;
    }
    return this._bindings;
  }

  constructor(dom: DOM, syntax: AttrSyntax, info: AttrInfo, partName: string | null) {
    this.flags = SymbolFlags.isTemplateController | SymbolFlags.hasMarker;
    this.res = info.name;
    this.partName = partName;
    this.physicalNode = null;
    this.syntax = syntax;
    this.template = null;
    this.templateController = null;
    this.marker = createMarker(dom);
    this._bindings = null;
  }
}

/**
 * Wrapper for an element (with all of its attributes, regardless of the order in which they are declared)
 * that has a replace-part attribute on it.
 *
 * This element will be lifted from the DOM just like a template controller.
 */
export class ReplacePartSymbol {
  public flags: SymbolFlags;
  public name: string;
  public physicalNode: IHTMLTemplateElement | null;
  public parent: ParentNodeSymbol | null;
  public template: ParentNodeSymbol | null;

  constructor(name: string) {
    this.flags = SymbolFlags.isReplacePart;
    this.name = name;
    this.physicalNode = null;
    this.parent = null;
    this.template = null;
  }
}

/**
 * A html attribute that is associated with a registered resource, but not a template controller.
 */
export class CustomAttributeSymbol {
  public flags: SymbolFlags;
  public res: string;
  public syntax: AttrSyntax;

  private _bindings: BindingSymbol[] | null;
  public get bindings(): BindingSymbol[] {
    if (this._bindings === null) {
      this._bindings = [];
      this.flags |= SymbolFlags.hasBindings;
    }
    return this._bindings;
  }

  constructor(syntax: AttrSyntax, info: AttrInfo) {
    this.flags = SymbolFlags.isCustomAttribute;
    this.res = info.name;
    this.syntax = syntax;
    this._bindings = null;
  }
}

/**
 * An attribute, with either a binding command or an interpolation, whose target is the html
 * attribute of the element.
 *
 * This will never target a bindable property of a custom attribute or element;
 */
export class PlainAttributeSymbol {
  public flags: SymbolFlags;
  public syntax: AttrSyntax;
  public command: IBindingCommand | null;
  public expression: IsExpressionOrStatement | null;

  constructor(
    syntax: AttrSyntax,
    command: IBindingCommand | null,
    expression: IsExpressionOrStatement | null
  ) {
    this.flags = SymbolFlags.isPlainAttribute;
    this.syntax = syntax;
    this.command = command;
    this.expression = expression;
  }
}

/**
 * Either an attribute on an custom element that maps to a declared bindable property of that element,
 * a single-value bound custom attribute, or one of several bindables that were extracted from the attribute
 * value of a dynamicOptions custom attribute.
 *
 * This will always target a bindable property of a custom attribute or element;
 */
export class BindingSymbol {
  public flags: SymbolFlags;
  public command: IBindingCommand | null;
  public bindable: BindableInfo;
  public expression: IsExpressionOrStatement | null;
  public rawValue: string;
  public target: string;

  constructor(
    command: IBindingCommand | null,
    bindable: BindableInfo,
    expression: IsExpressionOrStatement | null,
    rawValue: string,
    target: string
  ) {
    this.flags = SymbolFlags.isBinding;
    this.command = command;
    this.bindable = bindable;
    this.expression = expression;
    this.rawValue = rawValue;
    this.target = target;
  }
}

/**
 * A html element that is associated with a registered resource either via its (lowerCase) `nodeName`
 * or the value of its `as-element` attribute.
 */
export class CustomElementSymbol {
  public flags: SymbolFlags;
  public res: string;
  public physicalNode: IHTMLElement;
  public bindables: Record<string, BindableInfo>;
  public isTarget: true;
  public templateController: TemplateControllerSymbol | null;
  public isContainerless: boolean;
  public marker: IHTMLElement | null;

  private _attributes: AttributeSymbol[] | null;
  public get attributes(): AttributeSymbol[] {
    if (this._attributes === null) {
      this._attributes = [];
      this.flags |= SymbolFlags.hasAttributes;
    }
    return this._attributes;
  }

  private _bindings: BindingSymbol[] | null;
  public get bindings(): BindingSymbol[] {
    if (this._bindings === null) {
      this._bindings = [];
      this.flags |= SymbolFlags.hasBindings;
    }
    return this._bindings;
  }

  private _childNodes: NodeSymbol[] | null;
  public get childNodes(): NodeSymbol[] {
    if (this._childNodes === null) {
      this._childNodes = [];
      this.flags |= SymbolFlags.hasChildNodes;
    }
    return this._childNodes;
  }

  private _parts: ReplacePartSymbol[] | null;
  public get parts(): ReplacePartSymbol[] {
    if (this._parts === null) {
      this._parts = [];
      this.flags |= SymbolFlags.hasParts;
    }
    return this._parts;
  }

  constructor(dom: DOM, node: IHTMLElement, info: ElementInfo) {
    this.flags = SymbolFlags.isCustomElement;
    this.res = info.name;
    this.physicalNode = node;
    this.bindables = info.bindables;
    this.isTarget = true;
    this.templateController = null;
    if (info.containerless) {
      this.isContainerless = true;
      this.marker = createMarker(dom);
      this.flags |= SymbolFlags.hasMarker;
    } else {
      this.isContainerless = false;
      this.marker = null;
    }
    this._attributes = null;
    this._bindings = null;
    this._childNodes = null;
    this._parts = null;
  }
}

export class LetElementSymbol {
  public flags: SymbolFlags;
  public physicalNode: IHTMLElement;
  public toViewModel: boolean;
  public marker: IHTMLElement;

  private _bindings: BindingSymbol[] | null;
  public get bindings(): BindingSymbol[] {
    if (this._bindings === null) {
      this._bindings = [];
      this.flags |= SymbolFlags.hasBindings;
    }
    return this._bindings;
  }

  constructor(dom: DOM, node: IHTMLElement) {
    this.flags = SymbolFlags.isLetElement | SymbolFlags.hasMarker;
    this.physicalNode = node;
    this.toViewModel = false;
    this.marker = createMarker(dom);
    this._bindings = null;
  }
}

/**
 * A normal html element that may or may not have attribute behaviors and/or child node behaviors.
 *
 * It is possible for a PlainElementSymbol to not yield any instructions during compilation.
 */
export class PlainElementSymbol {
  public flags: SymbolFlags;
  public physicalNode: IHTMLElement;
  public isTarget: boolean;
  public templateController: TemplateControllerSymbol | null;
  public hasSlots?: boolean;

  private _attributes: AttributeSymbol[] | null;
  public get attributes(): AttributeSymbol[] {
    if (this._attributes === null) {
      this._attributes = [];
      this.flags |= SymbolFlags.hasAttributes;
    }
    return this._attributes;
  }

  private _childNodes: NodeSymbol[] | null;
  public get childNodes(): NodeSymbol[] {
    if (this._childNodes === null) {
      this._childNodes = [];
      this.flags |= SymbolFlags.hasChildNodes;
    }
    return this._childNodes;
  }

  constructor(node: IHTMLElement) {
    this.flags = SymbolFlags.isPlainElement;
    this.physicalNode = node;
    this.isTarget = false;
    this.templateController = null;
    this._attributes = null;
    this._childNodes = null;
  }
}

/**
 * A standalone text node that has an interpolation.
 */
export class TextSymbol {
  public flags: SymbolFlags;
  public physicalNode: IText;
  public interpolation: Interpolation;
  public marker: IHTMLElement;

  constructor(dom: DOM, node: IText, interpolation: Interpolation) {
    this.flags = SymbolFlags.isText | SymbolFlags.hasMarker;
    this.physicalNode = node;
    this.interpolation = interpolation;
    this.marker = createMarker(dom);
  }
}

export type AttributeSymbol = CustomAttributeSymbol | PlainAttributeSymbol;
export type ResourceAttributeSymbol = CustomAttributeSymbol | TemplateControllerSymbol;
export type ElementSymbol = CustomElementSymbol | PlainElementSymbol;
export type ParentNodeSymbol = ElementSymbol | TemplateControllerSymbol;
export type NodeSymbol = TextSymbol | LetElementSymbol | ParentNodeSymbol;
export type SymbolWithBindings = LetElementSymbol | CustomElementSymbol | ResourceAttributeSymbol;
export type SymbolWithTemplate = TemplateControllerSymbol | ReplacePartSymbol;
export type SymbolWithMarker = TemplateControllerSymbol | TextSymbol | LetElementSymbol | CustomElementSymbol;
export type AnySymbol =
  TemplateControllerSymbol |
  ReplacePartSymbol |
  CustomAttributeSymbol |
  PlainAttributeSymbol |
  CustomElementSymbol |
  PlainElementSymbol |
  TextSymbol;

const slice = Array.prototype.slice;

function createMarker(dom: DOM): IHTMLElement {
  const marker = dom.createElement('au-m');
  marker.className = 'au';
  return marker as IHTMLElement;
}

const invalidSurrogateAttribute = {
  'id': true,
  'part': true,
  'replace-part': true
};

const attributesToIgnore = {
  'as-element': true,
  'part': true,
  'replace-part': true
};

export class TemplateBinder {
  public resources: ResourceModel;
  public attrParser: IAttributeParser;
  public exprParser: IExpressionParser;

  private surrogate: PlainElementSymbol | null;

  // This is any "original" (as in, not a template created for a template controller) element.
  // It collects all attribute symbols except for template controllers and replace-parts.
  private manifest: ElementSymbol | null;

  // This is the nearest wrapping custom element.
  // It only collects replace-parts (and inherently everything that the manifest collects, if they are the same instance)
  private manifestRoot: CustomElementSymbol | null;

  // This is the nearest wrapping custom element relative to the current manifestRoot (the manifestRoot "one level up").
  // It exclusively collects replace-parts that are placed on the current manifestRoot.
  private parentManifestRoot: CustomElementSymbol | null;

  private partName: string | null;

  constructor(resources: ResourceModel, attrParser: IAttributeParser, exprParser: IExpressionParser) {
    this.resources = resources;
    this.attrParser = attrParser;
    this.exprParser = exprParser;
    this.surrogate = null;
    this.manifest = null;
    this.manifestRoot = null;
    this.parentManifestRoot = null;
    this.partName = null;
  }

  public bind(dom: DOM, node: IHTMLTemplateElement): PlainElementSymbol {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bind', slice.call(arguments)); }

    const surrogateSave = this.surrogate;
    const parentManifestRootSave = this.parentManifestRoot;
    const manifestRootSave = this.manifestRoot;
    const manifestSave = this.manifest;

    const manifest = this.surrogate = this.manifest = new PlainElementSymbol(node);

    const attributes = node.attributes;
    let i = 0;
    while (i < attributes.length) {
      const attr = attributes[i];
      const attrSyntax = this.attrParser.parse(attr.name, attr.value);

      if (invalidSurrogateAttribute[attrSyntax.target] === true) {
        throw new Error(`Invalid surrogate attribute: ${attrSyntax.target}`);
        // TODO: use reporter
      }
      const attrInfo = this.resources.getAttributeInfo(attrSyntax);
      if (attrInfo === null) {
        this.bindPlainAttribute(dom, attrSyntax);
      } else if (attrInfo.isTemplateController) {
        throw new Error('Cannot have template controller on surrogate element.');
        // TODO: use reporter
      } else {
        this.bindCustomAttribute(dom, attrSyntax, attrInfo);
      }
      ++i;
    }

    this.bindChildNodes(dom, node);

    this.surrogate = surrogateSave;
    this.parentManifestRoot = parentManifestRootSave;
    this.manifestRoot = manifestRootSave;
    this.manifest = manifestSave;

    if (Tracer.enabled) { Tracer.leave(); }
    return manifest;
  }

  private bindManifest(dom: DOM, parentManifest: ElementSymbol, node: IHTMLTemplateElement | IHTMLElement): void {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindManifest', slice.call(arguments)); }

    switch (node.nodeName) {
      case 'LET':
        // let cannot have children and has some different processing rules, so return early
        this.bindLetElement(dom, parentManifest, node);
        if (Tracer.enabled) { Tracer.leave(); }
        return;
      case 'SLOT':
        // slot requires no compilation
        this.surrogate.hasSlots = true;
        if (Tracer.enabled) { Tracer.leave(); }
        return;
    }

    // nodes are processed bottom-up so we need to store the manifests before traversing down and
    // restore them again afterwards
    const parentManifestRootSave = this.parentManifestRoot;
    const manifestRootSave = this.manifestRoot;
    const manifestSave = this.manifest;

    // get the part name to override the name of the compiled definition
    this.partName = node.getAttribute('part');

    let manifestRoot: CustomElementSymbol;
    const elementInfo = this.resources.getElementInfo(node);
    if (elementInfo === null) {
      // there is no registered custom element with this name
      this.manifest = new PlainElementSymbol(node);
    } else {
      // it's a custom element so we set the manifestRoot as well (for storing replace-parts)
      this.parentManifestRoot = this.manifestRoot;
      manifestRoot = this.manifestRoot = this.manifest = new CustomElementSymbol(dom, node, elementInfo);
    }

    // lifting operations done by template controllers and replace-parts effectively unlink the nodes, so start at the bottom
    this.bindChildNodes(dom, node);

    // the parentManifest will receive either the direct child nodes, or the template controllers / replace-parts
    // wrapping them
    this.bindAttributes(dom, node, parentManifest);

    if (manifestRoot !== undefined && manifestRoot.isContainerless) {
      node.parentNode.replaceChild(manifestRoot.marker, node);
    } else if (this.manifest.isTarget) {
      node.classList.add('au');
    }

    // restore the stored manifests so the attributes are processed on the correct lavel
    this.parentManifestRoot = parentManifestRootSave;
    this.manifestRoot = manifestRootSave;
    this.manifest = manifestSave;

    if (Tracer.enabled) { Tracer.leave(); }
  }

  private bindLetElement(dom: DOM, parentManifest: ElementSymbol, node: IHTMLElement): void {
    const symbol = new LetElementSymbol(dom, node);
    parentManifest.childNodes.push(symbol);

    const attributes = node.attributes;
    let i = 0;
    while (i < attributes.length) {
      const attr = attributes[i];
      if (attr.name === 'to-view-model') {
        node.removeAttribute('to-view-model');
        symbol.toViewModel = true;
        continue;
      }
      const attrSyntax = this.attrParser.parse(attr.name, attr.value);
      const command = this.resources.getBindingCommand(attrSyntax);
      const bindingType = command === null ? BindingType.Interpolation : command.bindingType;
      const expr = this.exprParser.parse(attrSyntax.rawValue, bindingType);
      const to = PLATFORM.camelCase(attrSyntax.target);
      const info = new BindableInfo(to, BindingMode.toView);
      symbol.bindings.push(new BindingSymbol(command, info, expr, attrSyntax.rawValue, to));

      ++i;
    }
    node.parentNode.replaceChild(symbol.marker, node);
  }

  private bindAttributes(dom: DOM, node: IHTMLTemplateElement | IHTMLElement, parentManifest: ElementSymbol): void {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindAttributes', slice.call(arguments)); }

    const { parentManifestRoot, manifestRoot, manifest } = this;
    // This is the top-level symbol for the current depth.
    // If there are no template controllers or replace-parts, it is always the manifest itself.
    // If there are template controllers, then this will be the outer-most TemplateControllerSymbol.
    let manifestProxy = manifest as ParentNodeSymbol;

    const replacePart = this.declareReplacePart(dom, node);

    let previousController: TemplateControllerSymbol;
    let currentController: TemplateControllerSymbol;

    const attributes = node.attributes;
    let i = 0;
    while (i < attributes.length) {
      const attr = attributes[i];
      ++i;
      if (attributesToIgnore[attr.name] === true) {
        continue;
      }
      const attrSyntax = this.attrParser.parse(attr.name, attr.value);
      const attrInfo = this.resources.getAttributeInfo(attrSyntax);

      if (attrInfo === null) {
        // it's not a custom attribute but might be a regular bound attribute or interpolation (it might also be nothing)
        this.bindPlainAttribute(dom, attrSyntax);
      } else if (attrInfo.isTemplateController) {
        // the manifest is wrapped by the inner-most template controller (if there are multiple on the same element)
        // so keep setting manifest.templateController to the latest template controller we find
        currentController = manifest.templateController = this.declareTemplateController(dom, attrSyntax, attrInfo);

        // the proxy and the manifest are only identical when we're at the first template controller (since the controller
        // is assigned to the proxy), so this evaluates to true at most once per node
        if (manifestProxy === manifest) {
          currentController.template = manifest;
          manifestProxy = currentController;
        } else {
          currentController.templateController = previousController;
          currentController.template = previousController.template;
          previousController.template = currentController;
        }
        previousController = currentController;
      } else {
        // a regular custom attribute
        this.bindCustomAttribute(dom, attrSyntax, attrInfo);
      }
    }

    processTemplateControllers(dom, manifestProxy, manifest);

    if (replacePart === null) {
      // the proxy is either the manifest itself or the outer-most controller; add it directly to the parent
      parentManifest.childNodes.push(manifestProxy);
    } else {
      // there is a replace-part attribute on this node, so add it to the parts collection of the manifestRoot
      // instead of to the childNodes
      replacePart.parent = parentManifest;
      replacePart.template = manifestProxy;

      // if the current manifest is also the manifestRoot, it means the replace-part sits on a custom
      // element, so add the part to the parent wrapping custom element instead
      const partOwner = manifest === manifestRoot ? parentManifestRoot : manifestRoot;
      partOwner.parts.push(replacePart);

      processReplacePart(dom, replacePart, manifestProxy);
    }

    if (Tracer.enabled) { Tracer.leave(); }
  }

  private bindChildNodes(dom: DOM, node: IHTMLTemplateElement | IHTMLElement): void {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindChildNodes', slice.call(arguments)); }

    let childNode: INode;
    if (node.nodeName === 'TEMPLATE') {
      childNode = (node as IHTMLTemplateElement).content.firstChild;
    } else {
      childNode = node.firstChild;
    }

    let nextChild: INode;
    while (childNode !== null) {
      switch (childNode.nodeType) {
        case NodeType.Element:
          nextChild = childNode.nextSibling;
          this.bindManifest(dom, this.manifest, childNode as IHTMLElement);
          childNode = nextChild;
          break;
        case NodeType.Text:
          childNode = this.bindText(dom, childNode as IText).nextSibling;
          break;
        case NodeType.CDATASection:
        case NodeType.ProcessingInstruction:
        case NodeType.Comment:
        case NodeType.DocumentType:
          childNode = childNode.nextSibling;
          break;
        case NodeType.Document:
        case NodeType.DocumentFragment:
          childNode = childNode.firstChild;
      }
    }

    if (Tracer.enabled) { Tracer.leave(); }
  }

  private bindText(dom: DOM, node: IText): INode {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindText', slice.call(arguments)); }
    const interpolation = this.exprParser.parse(node.wholeText, BindingType.Interpolation);
    if (interpolation !== null) {
      const symbol = new TextSymbol(dom, node, interpolation);
      this.manifest.childNodes.push(symbol);
      processInterpolationText(dom, symbol);
    }
    while (node.nextSibling !== null && node.nextSibling.nodeType === NodeType.Text) {
      node = node.nextSibling as IText;
    }
    if (Tracer.enabled) { Tracer.leave(); }
    return node;
  }

  private declareTemplateController(dom: DOM, attrSyntax: AttrSyntax, attrInfo: AttrInfo): TemplateControllerSymbol {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.declareTemplateController', slice.call(arguments)); }

    let symbol: TemplateControllerSymbol;
    // dynamicOptions logic here is similar to (and explained in) bindCustomAttribute
    const command = this.resources.getBindingCommand(attrSyntax);
    if (command === null && attrInfo.hasDynamicOptions) {
      symbol = new TemplateControllerSymbol(dom, attrSyntax, attrInfo, this.partName);
      this.partName = null;
      this.bindMultiAttribute(dom, symbol, attrInfo, attrSyntax.rawValue);
    } else {
      symbol = new TemplateControllerSymbol(dom, attrSyntax, attrInfo, this.partName);
      const bindingType = command === null ? BindingType.Interpolation : command.bindingType;
      const expr = this.exprParser.parse(attrSyntax.rawValue, bindingType);
      symbol.bindings.push(new BindingSymbol(command, attrInfo.bindable, expr, attrSyntax.rawValue, attrSyntax.target));
      this.partName = null;
    }

    if (Tracer.enabled) { Tracer.leave(); }
    return symbol;
  }

  private bindCustomAttribute(dom: DOM, attrSyntax: AttrSyntax, attrInfo: AttrInfo): void {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindCustomAttribute', slice.call(arguments)); }

    const command = this.resources.getBindingCommand(attrSyntax);
    let symbol: CustomAttributeSymbol;
    if (command === null && attrInfo.hasDynamicOptions) {
      // a dynamicOptions (semicolon separated binding) is only valid without a binding command;
      // the binding commands must be declared in the dynamicOptions expression itself
      symbol = new CustomAttributeSymbol(attrSyntax, attrInfo);
      this.bindMultiAttribute(dom, symbol, attrInfo, attrSyntax.rawValue);
    } else {
      // we've either got a command (with or without dynamicOptions, the latter maps to the first bindable),
      // or a null command but without dynamicOptions (which may be an interpolation or a normal string)
      symbol = new CustomAttributeSymbol(attrSyntax, attrInfo);
      const bindingType = command === null ? BindingType.Interpolation : command.bindingType;
      const expr = this.exprParser.parse(attrSyntax.rawValue, bindingType);
      symbol.bindings.push(new BindingSymbol(command, attrInfo.bindable, expr, attrSyntax.rawValue, attrSyntax.target));
    }
    this.manifest.attributes.push(symbol);
    this.manifest.isTarget = true;

    if (Tracer.enabled) { Tracer.leave(); }
  }

  private bindMultiAttribute(dom: DOM, symbol: ResourceAttributeSymbol, attrInfo: AttrInfo, value: string): void {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindMultiAttribute', slice.call(arguments)); }

    const attributes = parseMultiAttributeBinding(value);
    let attr: IAttrLike;
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
      attr = attributes[i];
      const attrSyntax = this.attrParser.parse(attr.name, attr.value);
      const command = this.resources.getBindingCommand(attrSyntax);
      const bindingType = command === null ? BindingType.Interpolation : command.bindingType;
      const expr = this.exprParser.parse(attrSyntax.rawValue, bindingType);
      let bindable = attrInfo.bindables[attrSyntax.target];
      if (bindable === undefined) {
        // everything in a dynamicOptions expression must be used, so if it's not a bindable then we create one on the spot
        bindable = attrInfo.bindables[attrSyntax.target] = new BindableInfo(attrSyntax.target, BindingMode.toView);
      }

      symbol.bindings.push(new BindingSymbol(command, bindable, expr, attrSyntax.rawValue, attrSyntax.target));
    }

    if (Tracer.enabled) { Tracer.leave(); }
  }

  private bindPlainAttribute(dom: DOM, attrSyntax: AttrSyntax): void {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.bindPlainAttribute', slice.call(arguments)); }

    if (attrSyntax.rawValue.length === 0) {
      if (Tracer.enabled) { Tracer.leave(); }
      return;
    }

    const command = this.resources.getBindingCommand(attrSyntax);
    const bindingType = command === null ? BindingType.Interpolation : command.bindingType;
    const manifest = this.manifest;
    const expr = this.exprParser.parse(attrSyntax.rawValue, bindingType);

    if (manifest.flags & SymbolFlags.isCustomElement) {
      const bindable = (manifest as CustomElementSymbol).bindables[attrSyntax.target];
      if (bindable !== undefined) {
        // if the attribute name matches a bindable property name, add it regardless of whether it's a command, interpolation, or just a plain string;
        // the template compiler will translate it to the correct instruction
        (manifest as CustomElementSymbol).bindings.push(new BindingSymbol(command, bindable, expr, attrSyntax.rawValue, attrSyntax.target));
        manifest.isTarget = true;
      } else if (expr !== null) {
        // if it does not map to a bindable, only add it if we were able to parse an expression (either a command or interpolation)
        manifest.attributes.push(new PlainAttributeSymbol(attrSyntax, command, expr));
        manifest.isTarget = true;
      }
    } else if (expr !== null || attrSyntax.target === 'ref') {
      // either a binding command, an interpolation, or a ref
      manifest.attributes.push(new PlainAttributeSymbol(attrSyntax, command, expr));
      manifest.isTarget = true;
    } else if (manifest === this.surrogate) {
      // any attributes, even if they are plain (no command/interpolation etc), should be added if they
      // are on the surrogate element
      manifest.attributes.push(new PlainAttributeSymbol(attrSyntax, command, expr));
    }

    if (Tracer.enabled) { Tracer.leave(); }
  }

  private declareReplacePart(dom: DOM, node: IHTMLTemplateElement | IHTMLElement): ReplacePartSymbol {
    if (Tracer.enabled) { Tracer.enter('TemplateBinder.declareReplacePart', slice.call(arguments)); }

    const name = node.getAttribute('replace-part');
    if (name === null) {
      if (Tracer.enabled) { Tracer.leave(); }
      return null;
    }
    node.removeAttribute('replace-part');

    const symbol = new ReplacePartSymbol(name);

    if (Tracer.enabled) { Tracer.leave(); }
    return symbol;
  }
}

function processInterpolationText(dom: DOM, symbol: TextSymbol): void {
  const node = symbol.physicalNode;
  const parentNode = node.parentNode;
  while (node.nextSibling !== null && node.nextSibling.nodeType === NodeType.Text) {
    parentNode.removeChild(node.nextSibling);
  }
  node.textContent = '';
  parentNode.insertBefore(symbol.marker, node);
}

/**
 * A (temporary) standalone function that purely does the DOM processing (lifting) related to template controllers.
 * It's a first refactoring step towards separating DOM parsing/binding from mutations.
 */
function processTemplateControllers(dom: DOM, manifestProxy: ParentNodeSymbol, manifest: ElementSymbol): void {
  const manifestNode = manifest.physicalNode;
  let current = manifestProxy as TemplateControllerSymbol;
  while ((current as ParentNodeSymbol) !== manifest) {
    if (current.template === manifest) {
      // the DOM linkage is still in its original state here so we can safely assume the parentNode is non-null
      manifestNode.parentNode.replaceChild(current.marker, manifestNode);

      // if the manifest is a template element (e.g. <template repeat.for="...">) then we can skip one lift operation
      // and simply use the template directly, saving a bit of work
      if (manifestNode.nodeName === 'TEMPLATE') {
        current.physicalNode = manifestNode as IHTMLTemplateElement;
        // the template could safely stay without affecting anything visible, but let's keep the DOM tidy
        manifestNode.remove();
      } else {
        // the manifest is not a template element so we need to wrap it in one
        current.physicalNode = dom.createTemplate();
        current.physicalNode.content.appendChild(manifestNode);
      }
    } else {
      current.physicalNode = dom.createTemplate();
      current.physicalNode.content.appendChild(current.marker);
    }
    manifestNode.removeAttribute(current.syntax.rawName);
    current = current.template as TemplateControllerSymbol;
  }
}

function processReplacePart(dom: DOM, replacePart: ReplacePartSymbol, manifestProxy: ParentNodeSymbol): void {
    let proxyNode: IHTMLElement;
    if (manifestProxy.flags & SymbolFlags.hasMarker) {
      proxyNode = (manifestProxy as SymbolWithMarker).marker;
    } else {
      proxyNode = manifestProxy.physicalNode;
    }
    if (proxyNode.nodeName === 'TEMPLATE') {
      // if it's a template element, no need to do anything special, just assign it to the replacePart
      replacePart.physicalNode = proxyNode as IHTMLTemplateElement;
    } else {
      // otherwise wrap the replace-part in a template
      replacePart.physicalNode = dom.createTemplate();
      replacePart.physicalNode.content.appendChild(proxyNode);
    }
}

interface IAttrLike {
  name: string;
  value: string;
}

class ParserState {
  public input: string;
  public index: number;
  public length: number;

  constructor(input: string) {
    this.input = input;
    this.index = 0;
    this.length = input.length;
  }
}

const fromCharCode = String.fromCharCode;

// TODO: move to expression parser
function parseMultiAttributeBinding(input: string): IAttrLike[] {
  const attributes: IAttrLike[] = [];

  const state = new ParserState(input);
  const length = state.length;
  let name: string;
  let value: string;

  while (state.index < length) {
    name = scanAttributeName(state);
    if (name.length === 0) {
      return attributes;
    }
    value = scanAttributeValue(state);
    attributes.push({ name, value });
  }

  return attributes;
}

function scanAttributeName(state: ParserState): string {
  const start = state.index;
  const { length, input } = state;
  while (state.index < length && input.charCodeAt(++state.index) !== Char.Colon);

  return input.slice(start, state.index).trim();
}

function scanAttributeValue(state: ParserState): string {
  ++state.index;
  const { length, input } = state;
  let token = '';
  let inString = false;
  let quote = null;
  let ch = 0;
  while (state.index < length) {
    ch = input.charCodeAt(state.index);
    switch (ch) {
      case Char.Semicolon:
        ++state.index;
        return token.trim();
      case Char.Slash:
        ch = input.charCodeAt(++state.index);
        if (ch === Char.DoubleQuote) {
          if (inString === false) {
            inString = true;
            quote = Char.DoubleQuote;
          } else if (quote === Char.DoubleQuote) {
            inString = false;
            quote = null;
          }
        }
        token += `\\${fromCharCode(ch)}`;
        break;
      case Char.SingleQuote:
        if (inString === false) {
          inString = true;
          quote = Char.SingleQuote;
        } else if (quote === Char.SingleQuote) {
          inString = false;
          quote = null;
        }
        token += '\'';
        break;
      default:
        token += fromCharCode(ch);
    }
    ++state.index;
  }

  return token.trim();
}
