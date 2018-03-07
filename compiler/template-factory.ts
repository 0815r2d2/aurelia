import * as ts from 'typescript';
import { Expression, TemplateLiteral } from './ast'
import * as AST from './ast';
import { bindingMode, delegationStrategy, AbstractBinding } from './binding';
import {
  ITemplateFactory,
  IAureliaModule,
  IResourceElement
} from './interfaces'
import { getElementViewName } from './util';
import { TemplateTransformer } from './template-transformer';

export class TemplateFactory implements ITemplateFactory {

  html: string = '';
  bindings: AbstractBinding[] = [];

  elementResource: IResourceElement;
  dependencies: IAureliaModule[] = [];

  _lastCustomElementIndex = 0;

  constructor(
    public owner: IAureliaModule,
    elementResource?: IResourceElement
  ) {
    this.elementResource = elementResource;
  }

  get observedProperties(): string[] {
    let props = [];
    for (let bindings = this.bindings, i = 0, ii = bindings.length; ii > i; ++i) {
      let binding = bindings[i];
      let obProps = binding.observedProperties;
      for (let j = 0, jj = obProps.length; jj > j; ++j) {
        let prop = obProps[j];
        if (props.includes(prop)) {
          continue;
        }
        props.push(prop);
      }
    }
    return props;
    // return Array.from(new Set<string>(this.bindings.reduce(
    //   (props, binding) => props.concat(binding.observedProperties),
    //   []
    // )));
  }

  get lastTargetIndex() {
    const bindings = this.bindings;
    const lastBinding = bindings[bindings.length - 1];
    return lastBinding ? lastBinding.targetIndex : -1;
  }

  get lastBehaviorIndex() {
    const bindings = this.bindings;
    let i = bindings.length;
    while (i--) {
      let binding = bindings[i];
      if (binding.behavior) {
        return binding.behaviorIndex + 1;
      }
    }
    return -1;
  }

  addDependency(dependency: IAureliaModule) {
    let deps = this.dependencies;
    let existing = deps.find(r => r.fileName === dependency.fileName);
    if (existing) {
      throw new Error('Already added this resource');
    }
    deps.push(dependency);
  }

  getCustomElement(htmlName: string) {
    let elementResource: IResourceElement;
    if (this.owner) {
      elementResource = this.owner.getCustomElement(htmlName);
    }
    if (elementResource) {
      return elementResource;
    }
    for (let dependency of this.dependencies) {
      if (elementResource = dependency.getCustomElement(htmlName)) {
        return elementResource;
      }
    }
    return null;
  }

  getCode(emitImports?: boolean) {
    let templateCode = new TemplateTransformer(this, emitImports).code;
    return {
      imports: templateCode.imports,
      view: templateCode.view
    };
  }

  transform(emitImport?: boolean): ts.SourceFile {
    let file = ts.createSourceFile(this.owner.fileName, '', ts.ScriptTarget.Latest /*, false, ts.ScriptKind.TS */);
    let templateCode = new TemplateTransformer(this, emitImport).code;
    // let mainFile = new TemplateTransformer(this, emitImport).toSourceFile();
    return ts.updateSourceFileNode(file, [
      ...templateCode.imports,
      ...this.dependencies.reduce((statements, dep) => {
        return statements.concat(dep.toSourceFile().statements);
      }, []),
      templateCode.view
    ]);
  }
}
