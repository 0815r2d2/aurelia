import { Constructable, IIndexable } from '@aurelia/kernel';
import { TargetedInstruction, TemplateDefinition } from '../definitions';
import { INode } from '../dom';
import { IRenderContext, IView, IViewFactory } from '../lifecycle';
import { ICustomElementType, IRenderingEngine, ITemplate } from './lifecycle-render';
declare type ChildType = RenderPlan | string | INode;
export declare function createElement(tagOrType: string | Constructable, props?: IIndexable, children?: ArrayLike<ChildType>): RenderPlan;
export declare class RenderPlan {
    private readonly node;
    private readonly instructions;
    private readonly dependencies;
    private lazyDefinition;
    constructor(node: INode, instructions: TargetedInstruction[][], dependencies: ReadonlyArray<any>);
    readonly definition: TemplateDefinition;
    getElementTemplate(engine: IRenderingEngine, Type?: ICustomElementType): ITemplate;
    createView(engine: IRenderingEngine, parentContext?: IRenderContext): IView;
    getViewFactory(engine: IRenderingEngine, parentContext?: IRenderContext): IViewFactory;
}
export {};
//# sourceMappingURL=create-element.d.ts.map