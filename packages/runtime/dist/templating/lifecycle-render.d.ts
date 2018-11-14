import { Constructable, Decoratable, Decorated, IContainer, Immutable, ImmutableArray, Omit } from '@aurelia/kernel';
import { IEventManager } from '../binding/event-manager';
import { IExpressionParser } from '../binding/expression-parser';
import { IObserverLocator } from '../binding/observer-locator';
import { CustomElementConstructor, IAttributeDefinition, IHydrateElementInstruction, IRenderStrategyInstruction, ITemplateDefinition, TemplateDefinition, TemplatePartDefinitions } from '../definitions';
import { INode, INodeSequence, IRenderLocation } from '../dom';
import { IAttach, IAttachables, IBindables, IBindScope, IBindSelf, ILifecycle, ILifecycleHooks, ILifecycleUnbindAfterDetach, IMountable, IRenderable, IRenderContext, IState, IViewFactory } from '../lifecycle';
import { IAccessor, IChangeTracker, ISubscribable, ISubscriberCollection, MutationKind } from '../observation';
import { IResourceDescriptions, IResourceKind, IResourceType } from '../resource';
export interface IRenderStrategy<TTarget = any, TInstruction extends IRenderStrategyInstruction = any> {
    render(renderable: IRenderable, target: TTarget, instruction: TInstruction): void;
}
export interface IRenderStrategySource {
    name: string;
}
export declare type IRenderStrategyType = IResourceType<IRenderStrategySource, IRenderStrategy>;
declare type RenderStrategyDecorator = <T extends Constructable>(target: Decoratable<IRenderStrategy, T>) => Decorated<IRenderStrategy, T> & IRenderStrategyType;
export declare function renderStrategy(nameOrSource: string | IRenderStrategySource): RenderStrategyDecorator;
export declare const RenderStrategyResource: IResourceKind<IRenderStrategySource, IRenderStrategyType>;
export interface ITemplateCompiler {
    readonly name: string;
    compile(definition: ITemplateDefinition, resources: IResourceDescriptions, viewCompileFlags?: ViewCompileFlags): TemplateDefinition;
}
export declare const ITemplateCompiler: import("@aurelia/kernel/dist/di").InterfaceSymbol<ITemplateCompiler>;
export declare enum ViewCompileFlags {
    none = 1,
    surrogate = 2,
    shadowDOM = 4
}
export interface ICustomElementType extends IResourceType<ITemplateDefinition, ICustomElement>, CustomElementConstructor {
}
export declare type IElementHydrationOptions = Immutable<Pick<IHydrateElementInstruction, 'parts'>>;
export interface ICustomElement extends Partial<IChangeTracker>, ILifecycleHooks, ILifecycleRender, IBindSelf, ILifecycleUnbindAfterDetach, IAttach, IMountable, IState, IRenderable {
    readonly $projector: IElementProjector;
    readonly $host: ICustomElementHost;
    $hydrate(renderingEngine: IRenderingEngine, host: INode, options?: IElementHydrationOptions): void;
}
export interface ICustomElementHost extends IRenderLocation {
    $customElement?: ICustomElement;
}
export declare type ElementDefinition = Immutable<Required<ITemplateDefinition>> | null;
export interface ICustomElementResource extends IResourceKind<ITemplateDefinition, ICustomElementType> {
    behaviorFor(node: INode): ICustomElement | null;
}
export interface IElementProjector {
    readonly host: ICustomElementHost;
    readonly children: ArrayLike<ICustomElementHost>;
    provideEncapsulationSource(parentEncapsulationSource: ICustomElementHost): ICustomElementHost;
    project(nodes: INodeSequence): void;
    take(nodes: INodeSequence): void;
    subscribeToChildrenChange(callback: () => void): void;
}
export interface ICustomAttributeType extends IResourceType<IAttributeDefinition, ICustomAttribute>, Immutable<Pick<Partial<IAttributeDefinition>, 'bindables'>> {
}
declare type OptionalHooks = ILifecycleHooks & Omit<IRenderable, Exclude<keyof IRenderable, '$mount' | '$unmount'>>;
declare type RequiredLifecycleProperties = Readonly<Pick<IRenderable, '$scope'>> & IState;
export interface IElementTemplateProvider {
    getElementTemplate(renderingEngine: IRenderingEngine, customElementType: ICustomElementType): ITemplate;
}
export interface ILifecycleRender {
    /**
     * Only applies to `@customElement`. This hook is not invoked for `@customAttribute`s
     *
     * Called during `$hydrate`, after `this.$scope` and `this.$projector` are set.
     *
     * If this hook is implemented, it will be used instead of `renderingEngine.getElementTemplate`.
     * This allows you to completely override the default rendering behavior.
     *
     * It is the responsibility of the implementer to:
     * - Populate `this.$bindables` with any Bindings, child Views, custom elements and custom attributes
     * - Populate `this.$attachables` with any child Views, custom elements and custom attributes
     * - Populate `this.$nodes` with the nodes that need to be appended to the host
     * - Populate `this.$context` with the RenderContext / Container scoped to this instance
     *
     * @param host The DOM node that declares this custom element
     * @param parts Replaceable parts, if any
     *
     * @returns Either an implementation of `IElementTemplateProvider`, or void
     *
     * @description
     * This is the first "hydrate" lifecycle hook. It happens only once per instance (contrary to bind/attach
     * which can happen many times per instance), though it can happen many times per type (once for each instance)
     */
    render?(host: INode, parts: Immutable<Pick<IHydrateElementInstruction, 'parts'>>): IElementTemplateProvider | void;
}
export interface ICustomAttribute extends Partial<IChangeTracker>, IBindScope, ILifecycleUnbindAfterDetach, IAttach, OptionalHooks, RequiredLifecycleProperties {
    $hydrate(renderingEngine: IRenderingEngine): void;
}
export interface IRenderingEngine {
    getElementTemplate(definition: TemplateDefinition, componentType?: ICustomElementType): ITemplate;
    getViewFactory(source: Immutable<ITemplateDefinition>, parentContext?: IRenderContext): IViewFactory;
    applyRuntimeBehavior(Type: ICustomAttributeType, instance: ICustomAttribute): void;
    applyRuntimeBehavior(Type: ICustomElementType, instance: ICustomElement): void;
    createRenderer(context: IRenderContext): IRenderer;
}
export declare const IRenderingEngine: import("@aurelia/kernel/dist/di").InterfaceSymbol<IRenderingEngine>;
export declare class RenderingEngine implements IRenderingEngine {
    private container;
    private lifecycle;
    private observerLocator;
    private eventManager;
    private parser;
    private templateLookup;
    private factoryLookup;
    private behaviorLookup;
    private compilers;
    constructor(container: IContainer, lifecycle: ILifecycle, observerLocator: IObserverLocator, eventManager: IEventManager, parser: IExpressionParser, templateCompilers: ITemplateCompiler[]);
    getElementTemplate(definition: TemplateDefinition, componentType?: ICustomElementType): ITemplate;
    getViewFactory(definition: Immutable<ITemplateDefinition>, parentContext?: IRenderContext): IViewFactory;
    applyRuntimeBehavior(Type: ICustomAttributeType | ICustomElementType, instance: ICustomAttribute | ICustomElement): void;
    createRenderer(context: IRenderContext): IRenderer;
    private templateFromSource;
}
export interface IChildrenObserver extends IAccessor, ISubscribable<MutationKind.instance>, ISubscriberCollection<MutationKind.instance> {
}
export interface ITemplate {
    readonly renderContext: IRenderContext;
    render(renderable: IRenderable, host?: INode, parts?: TemplatePartDefinitions): void;
}
export declare function createRenderContext(renderingEngine: IRenderingEngine, parentRenderContext: IRenderContext, dependencies: ImmutableArray<any>): IRenderContext;
export declare function addBindable(renderable: IBindables, bindable: IBindScope): void;
export declare function addAttachable(renderable: IAttachables, attachable: IAttach): void;
export interface IRenderer {
    render(renderable: IRenderable, targets: ArrayLike<INode>, templateDefinition: TemplateDefinition, host?: INode, parts?: TemplatePartDefinitions): void;
    hydrateElementInstance(renderable: IRenderable, target: INode, instruction: Immutable<IHydrateElementInstruction>, component: ICustomElement): void;
}
export {};
//# sourceMappingURL=lifecycle-render.d.ts.map