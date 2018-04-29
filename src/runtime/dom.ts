import { IContainer, IResolver, DI } from "./di";

export const INode = DI.createInterface('INode');
export interface INode {
  readonly parentNode: INode | null;

  readonly firstChild: INode | null;
  readonly lastChild: INode | null;

  readonly childNodes: ArrayLike<INode>;

  readonly nextSibling: INode | null;
  readonly previousSibling: INode | null;
}

export interface INodeObserver {
  observe(node: INode, options: any): void;
  disconnect(): void;
}

let platformSupportsShadowDOM = function() {
  let available = !!HTMLElement.prototype.attachShadow;
  platformSupportsShadowDOM = () => available;
  return available;
};

export const DOM = {
  createFactoryFromMarkup(markup: string): () => INode {
    let template = document.createElement('template');
    template.innerHTML = markup;
    return () => <any>template.content.cloneNode(true);
  },

  createElement(name: string): INode {
    return <any>document.createElement(name);
  },

  createAnchor(): INode {
    return document.createComment('anchor');
  },

  createObserver(callback: () => void): INodeObserver {
    return new MutationObserver(callback);
  },

  createElementViewHost(node: INode, options?: any): INode {
    if (options && platformSupportsShadowDOM()) {
      return (<Element>node).attachShadow(options);
    }

    (<any>node).$usingSlotEmulation = true;
    return node;
  },

  cloneNode(node: INode, deep = true): INode {
    return (<Node>node).cloneNode(deep);
  },

  findCompileTargets(node: INode): ArrayLike<INode> {
    return (<Element>node).querySelectorAll('.au');
  },

  findContentNode(node: INode) {
    return (<Element>node).firstElementChild;
  },

  isUsingSlotEmulation(node: INode): boolean {
    return !!(<any>node).$usingSlotEmulation;
  },

  isNodeInstance(potentialNode: any): potentialNode is INode {
    return potentialNode instanceof Element;
  },

  isElementNodeType(node: INode): boolean {
    return (<Node>node).nodeType === 1;
  },

  isTextNodeType(node: INode): boolean {
    return (<Node>node).nodeType === 3;
  },

  normalizedTagName(node: INode): string {
    let name = (<Element>node).tagName;
    return name ? name.toLowerCase() : null;
  },

  removeNode(node: INode) {
    if (node.parentNode) {
      (<Node>node.parentNode).removeChild(<Node>node);
    }
  },

  replaceNode(newChild: INode, oldChild: INode): void {
    if (oldChild.parentNode) {
      (<Node>oldChild.parentNode).replaceChild(<Node>newChild, <Node>oldChild);
    }
  },

  appendChild(parent: INode, child: INode): void {
    (<Node>parent).appendChild(<Node>child);
  },

  insertBefore(nodeToInsert: INode, referenceNode: INode): void {
    (<Node>referenceNode.parentNode).insertBefore(<Node>nodeToInsert, <Node>referenceNode);
  },

  getAttribute(node: INode, name: string): any {
    return (<Element>node).getAttribute(name);
  },

  setAttribute(node: INode, name: string, value: any): void {
    (<Element>node).setAttribute(name, value);
  },

  removeAttribute(node: INode, name: string): void {
    (<Element>node).removeAttribute(name);
  },

  hasClass(node: INode, className: string): boolean {
    return (<Element>node).classList.contains(className);
  },
  
  addClass(node: INode, className: string): void {
    (<Element>node).classList.add(className);
  },

  removeClass(node: INode, className: string): void {
    (<Element>node).classList.remove(className);
  },

  addEventListener(eventName: string, subscriber: any, publisher?: INode, options?: any) {
    publisher = publisher || document;
    (<Node>publisher).addEventListener(eventName, subscriber, options);
  },

  removeEventListener(eventName: string, subscriber: any, publisher?: INode, options?: any) {
    publisher = publisher || document;
    (<Node>publisher).removeEventListener(eventName, subscriber, options);
  },

  isAllWhitespace(node: INode): boolean {
    // Use ECMA-262 Edition 3 String and RegExp features
    return !((<any>node).auInterpolationTarget || (/[^\t\n\r ]/.test((<Node>node).textContent)));
  },

  treatAsNonWhitespace(node: INode): void {
    //See isWhitespace above for an explanation.
    (<any>node).auInterpolationTarget = true;
  },

  convertToAnchor(node: INode, proxy = false): INode {
    let anchor = <any>DOM.createAnchor();
  
    if (proxy) {
      anchor.$proxyTarget = node;
      anchor.hasAttribute = hasAttribute;
      anchor.getAttribute = getAttribute;
      anchor.setAttribute = setAttribute;
    }
  
    DOM.replaceNode(anchor, node);
  
    return anchor;
  },

  registerElementResolver(container: IContainer, resolver: IResolver): void {
    container.registerResolver(INode, resolver);
    container.registerResolver(Element, resolver);
    container.registerResolver(HTMLElement, resolver);
    container.registerResolver(SVGElement, resolver);
  }
}

function hasAttribute(name) {
  return this.$proxyTarget.hasAttribute(name);
}

function getAttribute(name) {
  return this.$proxyTarget.getAttribute(name);
}

function setAttribute(name, value) {
  this.$proxyTarget.setAttribute(name, value);
}
