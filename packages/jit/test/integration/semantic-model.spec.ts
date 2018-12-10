import {
  SemanticModel,
  SymbolKind,
  SlotElementSymbol,
  SurrogateElementSymbol,
  AttributeInterpolationSymbol,
  AttributeSymbol,
  BindingCommandSymbol,
  BoundAttributeSymbol,
  CustomAttributeSymbol,
  CustomElementSymbol,
  ElementSymbol,
  LetElementSymbol,
  NodeSymbol,
  ParentElementSymbol,
  PartAttributeSymbol,
  PlainElementSymbol,
  ReplacePartAttributeSymbol,
  TemplateControllerAttributeSymbol,
  TextInterpolationSymbol,
  ITemplateFactory,
  TemplateFactory,
  CompilationTarget,
  ResourceLocator,
  IResourceLocator,
  ISymbol
} from '../../src/semantic-model-2';
import {
  stringifyTemplateDefinition,
  stringifySymbol
} from '../../src/debugging';
import {
  DefaultBindingLanguage,
  GlobalResources,
  ParserRegistration,
  IElementParser,
  BasicConfiguration,
  IAttributeParser
} from '../../../jit/src/index';
import {
  DI,
  IRegistry,
  IContainer,
  PLATFORM,
  Tracer,
  ITraceInfo
} from '../../../kernel/src/index';
import {
  Tracer as DebugTracer
} from '../../../debug/src/index';
import {
  IExpressionParser,
  RuntimeCompilationResources,
  IResourceDescriptions,
  ILifecycle,
  HtmlRenderer,
  CustomElementResource,
  Aurelia,
  DOM,
  IHTMLElement,
  INode,
  NodeType,
  IElement,
  IText,
  TargetedInstruction,
  TargetedInstructionType,
  ITemplateDefinition,
  IHTMLTemplateElement
} from '../../../runtime/src/index';
import { expect } from 'chai';
import {
  TemplateCompiler,
  SymbolPreprocessor,
  NodePreprocessor,
} from '../../src/template-compiler-2';

function setup() {
  const container = DI.createContainer();
  container.register(
    ...(<IRegistry[]>DefaultBindingLanguage),
    ...(<IRegistry[]>GlobalResources),
    <IRegistry>ParserRegistration
  );

  const attrParser = container.get<IAttributeParser>(IAttributeParser);
  const elParser = container.get<IElementParser>(IElementParser);
  const exprParser = container.get<IExpressionParser>(IExpressionParser);
  const factory = container.get<ITemplateFactory>(ITemplateFactory);
  const resources = new RuntimeCompilationResources(<any>container);
  const locator = new ResourceLocator(<any>resources);
  const model = new SemanticModel(locator, attrParser, factory, <any>exprParser);
  const symbolPreprocessor = new SymbolPreprocessor(model);
  const nodePreprocessor = new NodePreprocessor(model);
  return { model, symbolPreprocessor, nodePreprocessor, container, attrParser, elParser, exprParser, factory, locator, resources };
}

const RuntimeTracer = { ...Tracer };
function enableTracing() {
  Object.assign(Tracer, DebugTracer);
  Tracer.enabled = true;
}
function disableTracing() {
  Tracer.flushAll(null);
  Object.assign(Tracer, RuntimeTracer);
  Tracer.enabled = false;
}

const SymbolTraceWriter = {
  write(info: ITraceInfo): void {
    let output: string;
    const symbol = info.params[0] as NodeSymbol | AttributeSymbol;
    if ('attr' in symbol) {
      output = `attr: ${symbol.attr.name}=${symbol.attr.value}`;
    } else if ('text' in symbol) {
      output = `text: "${symbol.text.textContent}"`;
    } else {
      output = `element: ${symbol.element.outerHTML}`;
    }
    console.debug(`${' '.repeat(info.depth)}${info.name} ${output}`);
  }
};

describe('SemanticModel', () => {
  xit('works 1', () => {
    const { model, symbolPreprocessor, nodePreprocessor } = setup();
    const target = model.createCompilationTarget({ name: 'app', template: `<template><div></div></template>` });

    target.accept(symbolPreprocessor);

    //console.log(stringifySymbol(target));

    target.accept(nodePreprocessor);

    //console.log(stringifySymbol(target));
  });

  xit('works 2', () => {
    const { model, symbolPreprocessor, nodePreprocessor } = setup();
    const target = model.createCompilationTarget({ name: 'app', template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" });

    target.accept(symbolPreprocessor);

    //console.log(stringifySymbol(target));

    target.accept(nodePreprocessor);

    //console.log(stringifySymbol(target));
  });

  xit('works 3', () => {
    const { model, symbolPreprocessor, nodePreprocessor, exprParser, elParser, attrParser, resources } = setup();
    const compiler = new TemplateCompiler(<any>exprParser, elParser, attrParser);
    const def = { name: 'app', template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" };

    const output = compiler.compile(def, <any>resources);
  });

  it.only('works 4', () => {
    enableTracing();
    Tracer.enableLiveLogging(SymbolTraceWriter);
    const container = DI.createContainer();
    container.register(<any>BasicConfiguration);
    const def = { name: 'app', template: "<template><div repeat.for=\"i of 2\">${msg}</div></template>" };
    const App = CustomElementResource.define(def, class { msg = 'a'});
    const component = new App();
    const host = <any>DOM.createElement('div');

    const au = new Aurelia(<any>container);

    au.app({ component, host });
    try {
      au.start();

    } catch(e) {

    } finally {
    }

    disableTracing();
    expect(host.textContent).to.equal('a');
  });
});
