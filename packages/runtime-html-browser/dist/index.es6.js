import { DI, Registration, IContainer } from '@aurelia/kernel';
import { IDOMInitializer, IDOM } from '@aurelia/runtime';
import { BasicConfiguration as BasicConfiguration$1, HTMLDOM } from '@aurelia/runtime-html';

class BrowserDOMInitializer {
    constructor(container) {
        this.container = container;
    }
    static register(container) {
        return Registration.singleton(IDOMInitializer, this).register(container);
    }
    initialize(config) {
        if (this.container.has(IDOM, false)) {
            return this.container.get(IDOM);
        }
        let dom;
        if (config !== undefined) {
            if (config.dom !== undefined) {
                dom = config.dom;
            }
            else if (config.host.ownerDocument !== null) {
                dom = new HTMLDOM(window, config.host.ownerDocument, Node, Element, HTMLElement, CustomEvent);
            }
            else {
                dom = new HTMLDOM(window, document, Node, Element, HTMLElement, CustomEvent);
            }
        }
        else {
            dom = new HTMLDOM(window, document, Node, Element, HTMLElement, CustomEvent);
        }
        Registration.instance(IDOM, dom).register(this.container);
        return dom;
    }
}
BrowserDOMInitializer.inject = [IContainer];
const IDOMInitializerRegistration = BrowserDOMInitializer;
/**
 * Default HTML-specific, browser-specific implementations for the following interfaces:
 * - `IDOMInitializer`
 */
const DefaultComponents = [
    IDOMInitializerRegistration
];
/**
 * A DI configuration object containing html-specific, browser-specific registrations:
 * - `BasicConfiguration` from `@aurelia/runtime-html`
 * - `DefaultComponents`
 */
const BasicConfiguration = {
    /**
     * Apply this configuration to the provided container.
     */
    register(container) {
        return BasicConfiguration$1
            .register(container)
            .register(...DefaultComponents);
    },
    /**
     * Create a new container with this configuration applied to it.
     */
    createContainer() {
        return this.register(DI.createContainer());
    }
};

export { IDOMInitializerRegistration, DefaultComponents, BasicConfiguration };
//# sourceMappingURL=index.es6.js.map
