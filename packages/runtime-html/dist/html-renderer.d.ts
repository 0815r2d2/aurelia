import { InterfaceSymbol, IRegistry } from '@aurelia/kernel';
import { IDOM, IExpressionParser, IInstructionRenderer, IObserverLocator, IRenderable, IRenderContext } from '@aurelia/runtime';
import { IListenerBindingInstruction, ISetAttributeInstruction, IStylePropertyBindingInstruction, ITextBindingInstruction } from './definitions';
import { IEventManager } from './observation/event-manager';
export declare class TextBindingRenderer implements IInstructionRenderer {
    static readonly inject: ReadonlyArray<InterfaceSymbol<unknown>>;
    static readonly register: IRegistry['register'];
    private readonly parser;
    private readonly observerLocator;
    constructor(parser: IExpressionParser, observerLocator: IObserverLocator);
    render(dom: IDOM, context: IRenderContext, renderable: IRenderable, target: ChildNode, instruction: ITextBindingInstruction): void;
}
export declare class ListenerBindingRenderer implements IInstructionRenderer {
    static readonly inject: ReadonlyArray<InterfaceSymbol<unknown>>;
    static readonly register: IRegistry['register'];
    private readonly parser;
    private readonly eventManager;
    constructor(parser: IExpressionParser, eventManager: IEventManager);
    render(dom: IDOM, context: IRenderContext, renderable: IRenderable, target: HTMLElement, instruction: IListenerBindingInstruction): void;
}
export declare class SetAttributeRenderer implements IInstructionRenderer {
    static readonly register: IRegistry['register'];
    render(dom: IDOM, context: IRenderContext, renderable: IRenderable, target: HTMLElement, instruction: ISetAttributeInstruction): void;
}
export declare class StylePropertyBindingRenderer implements IInstructionRenderer {
    static readonly inject: ReadonlyArray<InterfaceSymbol<unknown>>;
    static readonly register: IRegistry['register'];
    private readonly parser;
    private readonly observerLocator;
    constructor(parser: IExpressionParser, observerLocator: IObserverLocator);
    render(dom: IDOM, context: IRenderContext, renderable: IRenderable, target: HTMLElement, instruction: IStylePropertyBindingInstruction): void;
}
//# sourceMappingURL=html-renderer.d.ts.map