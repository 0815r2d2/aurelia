import {
  RenderingEngine,
  CompiledTemplate,
  View,
  ViewFactory,
  IRenderContext,
  ExposedContext,
  CustomElementResource,
  CustomAttributeResource,
  BindingBehaviorResource,
  ValueConverterResource
} from '../../../src/index';
import { expect } from 'chai';
import { Container, RuntimeCompilationResources } from '../../../../kernel/src';
import { BindingCommandResource } from '../../../../jit/src';


describe('RenderingEngine', () => {

});

describe('CompiledTemplate', () => {

});

describe('RuntimeCompilationResources', () => {

  it('does not register while finding resource', () => {
    const container = new Container();
    const resources = new RuntimeCompilationResources(container as any);

    [
      CustomElementResource,
      CustomAttributeResource,
      BindingBehaviorResource,
      ValueConverterResource,
      BindingCommandResource
    ].forEach(r => {
      resources.find(r, 'a');
      expect(container.getResolver(r.keyFrom('a'), false)).to.be.null;
    });
  });
});

describe('View', () => {

});

describe('ViewFactory', () => {

});
