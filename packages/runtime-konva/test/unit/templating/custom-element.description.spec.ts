import { IComponentLifecycleMock, defineComponentLifecycleMock } from './../mock';
import { PLATFORM, Writable } from '@aurelia/kernel';
import { customElement, ITemplateDefinition, IInternalCustomElementImplementation } from '../../../src/index';
import { expect } from 'chai';
import { eachCartesianJoin } from '../util';
import { createCustomElement } from './custom-element._builder';

describe('@customElement', () => {

  it('throws if input is undefined', () => {
    expect(() => createCustomElement(undefined)).to.throw('Code 70');
  });
  it('throws if input is null', () => {
    expect(() => createCustomElement(null)).to.throw('Code 70');
  });
  it('throws if input is empty', () => {
    expect(() => createCustomElement('')).to.throw('Code 70');
  });

  const descriptionKeys = [
    'name',
    'template',
    'cache',
    'build',
    'bindables',
    'instructions',
    'dependencies',
    'surrogates',
    'containerless',
    'shadowOptions',
    'hasSlots'
  ];

  it('creates the default template description', () => {
    const { Type } = createCustomElement({});
    expect(Type.description).to.be.a('object', 'description');
    expect(Type.description.name).to.equal('unnamed', 'name');
    expect(Type.description.template).to.equal(null, 'template');
    expect(Type.description.cache).to.equal(0, 'cache');
    expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
    expect(Type.description.bindables).to.deep.equal({}, 'bindables');
    expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
    expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
    expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
    expect(Type.description.containerless).to.equal(false, 'containerless');
    expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
    expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
    expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
  });

  const nameSpecs = [
    {
      description: 'name is undefined',
      expectation: 'uses unnamed',
      getName() { return undefined; },
      getExpectedname() { return 'unnamed'; }
    },
    {
      description: 'name is null',
      expectation: 'uses unnamed',
      getName() { return null; },
      getExpectedname() { return 'unnamed'; }
    },
    {
      description: 'name is empty',
      expectation: 'uses unnamed',
      getName() { return ''; },
      getExpectedname() { return 'unnamed'; }
    },
    {
      description: 'name is foo',
      expectation: 'uses provided name',
      getName() { return 'foo'; },
      getExpectedname() { return 'foo'; }
    }
  ];

  eachCartesianJoin([nameSpecs], (nameSpec) => {
    it(`${nameSpec.expectation} if ${nameSpec.description}`, () => {
      const { Type } = createCustomElement({ name: nameSpec.getName() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal(nameSpec.getExpectedname(), 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const templateSpecs = [
    {
      description: 'template is undefined',
      expectation: 'uses null',
      getTemplate() { return undefined; },
      getExpectedTemplate() { return null; }
    },
    {
      description: 'template is null',
      expectation: 'uses null',
      getTemplate() { return null; },
      getExpectedTemplate() { return null; }
    },
    {
      description: 'template is empty',
      expectation: 'uses null',
      getTemplate() { return ''; },
      getExpectedTemplate() { return null; }
    },
    {
      description: 'template is non-empty',
      expectation: 'uses provided template',
      getTemplate() { return 'asdf'; },
      getExpectedTemplate() { return 'asdf'; }
    }
  ];

  eachCartesianJoin([templateSpecs], (templateSpec) => {
    it(`${templateSpec.expectation} if ${templateSpec.description}`, () => {
      const { Type } = createCustomElement({ template: templateSpec.getTemplate() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(templateSpec.getExpectedTemplate(), 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const cacheSpecs = [
    {
      description: 'cache is undefined',
      expectation: 'uses 0',
      getCache() { return undefined; },
      getExpectedCache() { return 0; }
    },
    {
      description: 'cache is null',
      expectation: 'uses 0',
      getCache() { return null; },
      getExpectedCache() { return 0; }
    },
    {
      description: 'cache is empty string',
      expectation: 'uses 0',
      getCache() { return ''; },
      getExpectedCache() { return 0; }
    },
    {
      description: 'cache is 0',
      expectation: 'uses 0',
      getCache() { return 0; },
      getExpectedCache() { return 0; }
    },
    {
      description: 'cache is *',
      expectation: 'uses provided cache',
      getCache() { return '*'; },
      getExpectedCache() { return '*'; }
    },
    {
      description: 'cache is 1',
      expectation: 'uses provided cache',
      getCache() { return 1; },
      getExpectedCache() { return 1; }
    }
  ];

  eachCartesianJoin([cacheSpecs], (cacheSpec) => {
    it(`${cacheSpec.expectation} if ${cacheSpec.description}`, () => {
      const { Type } = createCustomElement({ cache: cacheSpec.getCache() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(cacheSpec.getExpectedCache(), 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const buildSpecs = [
    {
      description: 'build is undefined',
      expectation: 'uses default build required=false',
      getBuild() { return undefined; },
      getExpectedBuild() { return { required: false, compiler: 'default' }; }
    },
    {
      description: 'build is null',
      expectation: 'uses default build required=false',
      getBuild() { return null; },
      getExpectedBuild() { return { required: false, compiler: 'default' }; }
    },
    {
      description: 'build property does not exist',
      expectation: 'uses default build required=true',
      getExpectedBuild() { return { required: true, compiler: 'default' }; }
    },
    {
      description: 'build is object',
      expectation: 'uses provided build',
      getBuild() { return { required: true, compiler: 'asdf' }; },
      getExpectedBuild() { return { required: true, compiler: 'asdf' }; }
    }
  ];

  eachCartesianJoin([buildSpecs], (buildSpec) => {
    it(`${buildSpec.expectation} if ${buildSpec.description}`, () => {
      const { Type } = createCustomElement( buildSpec.getBuild ? { build: buildSpec.getBuild() } : {});
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal(buildSpec.getExpectedBuild(), 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const bindablesSpecs = [
    {
      description: 'def.bindables is null, Type.bindables is null',
      expectation: 'does NOT yield any bindables',
      getDefBindables() { return null },
      getTypeBindables() { return null },
      getExpectedBindables() { return {} }
    },
    {
      description: 'def.bindables is undefined, Type.bindables is undefined',
      expectation: 'does NOT yield any bindables',
      getDefBindables() { return undefined },
      getTypeBindables() { return undefined },
      getExpectedBindables() { return {} }
    },
    {
      description: 'def.bindables is empty obj, Type.bindables is empty obj',
      expectation: 'does NOT yield any bindables',
      getDefBindables() { return {} },
      getTypeBindables() { return {} },
      getExpectedBindables() { return {} }
    },
    {
      description: 'def.bindables has bindables, Type.bindables is empty obj',
      expectation: 'yields bindables from def',
      getDefBindables() { return { 'foo': 1 } },
      getTypeBindables() { return {} },
      getExpectedBindables() { return { 'foo': 1 } }
    },
    {
      description: 'def.bindables has bindables, Type.bindables has different bindables',
      expectation: 'yields bindables from def and Type',
      getDefBindables() { return { 'foo': 1 } },
      getTypeBindables() { return { 'bar': 2 } },
      getExpectedBindables() { return { 'foo': 1, 'bar': 2 } }
    },
    {
      description: 'def.bindables is empty obj, Type.bindables has different bindables',
      expectation: 'yields bindables from Type',
      getDefBindables() { return { } },
      getTypeBindables() { return { 'bar': 2 } },
      getExpectedBindables() { return { 'bar': 2 } }
    },
    {
      description: 'def.bindables has bindables, Type.bindables has same bindables',
      expectation: 'yields bindables from def',
      getDefBindables() { return { 'foo': 1 } },
      getTypeBindables() { return { 'foo': 2 } },
      getExpectedBindables() { return { 'foo': 1 } }
    }
  ];

  eachCartesianJoin([bindablesSpecs], (bindablesSpec) => {
    it(`${bindablesSpec.expectation} if ${bindablesSpec.description}`, () => {
      const def = {
        bindables: bindablesSpec.getDefBindables(),
      };
      class Foo {
        static bindables = bindablesSpec.getTypeBindables();
      }
      const Type = customElement(def)(Foo);
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal(bindablesSpec.getExpectedBindables(), 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const instructionsSpecs = [
    {
      description: 'instructions is undefined',
      expectation: 'uses PLATFORM.emptyArray',
      getInstructions() { return undefined; },
      canMutate: false,
      getExpectedInstructions() { return PLATFORM.emptyArray; }
    },
    {
      description: 'instructions is null',
      expectation: 'uses PLATFORM.emptyArray',
      canMutate: false,
      getInstructions() { return null; },
      getExpectedInstructions() { return PLATFORM.emptyArray; }
    },
    {
      description: 'instructions is empty array',
      expectation: 'uses provided instructions',
      canMutate: true,
      getInstructions() { return []; },
      getExpectedInstructions() { return []; }
    },
    {
      description: 'instructions has one item',
      expectation: 'uses provided instructions',
      canMutate: true,
      getInstructions() { return [{}]; },
      getExpectedInstructions() { return [{}];; }
    }
  ];

  eachCartesianJoin([instructionsSpecs], (instructionsSpec) => {
    it(`${instructionsSpec.expectation} if ${instructionsSpec.description}`, () => {
      const { Type } = createCustomElement({ instructions: instructionsSpec.getInstructions() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.deep.equal(instructionsSpec.getExpectedInstructions(), 'instructions');
      if (instructionsSpec.canMutate) {
        (<any>Type.description.instructions).push({})
      } else {
        expect(() => (<any>Type.description.instructions).push({})).to.throw;
      }
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const dependenciesSpecs = [
    {
      description: 'dependencies is undefined',
      expectation: 'uses PLATFORM.emptyArray',
      getDependencies() { return undefined; },
      canMutate: false,
      getExpectedDependencies() { return PLATFORM.emptyArray; }
    },
    {
      description: 'dependencies is null',
      expectation: 'uses PLATFORM.emptyArray',
      canMutate: false,
      getDependencies() { return null; },
      getExpectedDependencies() { return PLATFORM.emptyArray; }
    },
    {
      description: 'dependencies is empty array',
      expectation: 'uses provided dependencies',
      canMutate: true,
      getDependencies() { return []; },
      getExpectedDependencies() { return []; }
    },
    {
      description: 'dependencies has one item',
      expectation: 'uses provided dependencies',
      canMutate: true,
      getDependencies() { return [{}]; },
      getExpectedDependencies() { return [{}];; }
    }
  ];

  eachCartesianJoin([dependenciesSpecs], (dependenciesSpec) => {
    it(`${dependenciesSpec.expectation} if ${dependenciesSpec.description}`, () => {
      const { Type } = createCustomElement({ dependencies: dependenciesSpec.getDependencies() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.deep.equal(dependenciesSpec.getExpectedDependencies(), 'dependencies');
      if (dependenciesSpec.canMutate) {
        (<any>Type.description.dependencies).push({})
      } else {
        expect(() => (<any>Type.description.dependencies).push({})).to.throw;
      }
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const surrogatesSpecs = [
    {
      description: 'surrogates is undefined',
      expectation: 'uses PLATFORM.emptyArray',
      getSurrogates() { return undefined; },
      canMutate: false,
      getExpectedSurrogates() { return PLATFORM.emptyArray; }
    },
    {
      description: 'surrogates is null',
      expectation: 'uses PLATFORM.emptyArray',
      canMutate: false,
      getSurrogates() { return null; },
      getExpectedSurrogates() { return PLATFORM.emptyArray; }
    },
    {
      description: 'surrogates is empty array',
      expectation: 'uses provided surrogates',
      canMutate: true,
      getSurrogates() { return []; },
      getExpectedSurrogates() { return []; }
    },
    {
      description: 'surrogates has one item',
      expectation: 'uses provided surrogates',
      canMutate: true,
      getSurrogates() { return [{}]; },
      getExpectedSurrogates() { return [{}];; }
    }
  ];

  eachCartesianJoin([surrogatesSpecs], (surrogatesSpec) => {
    it(`${surrogatesSpec.expectation} if ${surrogatesSpec.description}`, () => {
      const { Type } = createCustomElement({ surrogates: surrogatesSpec.getSurrogates() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.deep.equal(surrogatesSpec.getExpectedSurrogates(), 'surrogates');
      if (surrogatesSpec.canMutate) {
        (<any>Type.description.surrogates).push({})
      } else {
        expect(() => (<any>Type.description.surrogates).push({})).to.throw;
      }
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const containerlessSpecs = [
    {
      description: 'def.containerless is undefined, Type.containerless is undefined',
      expectation: 'uses false',
      getDefContainerless() { return undefined; },
      getTypeContainerless() { return undefined; },
      getExpectedContainerless() { return false; }
    },
    {
      description: 'def.containerless is null, Type.containerless is null',
      expectation: 'uses false',
      getDefContainerless() { return null; },
      getTypeContainerless() { return null; },
      getExpectedContainerless() { return false; }
    },
    {
      description: 'def.containerless is false, Type.containerless is false',
      expectation: 'uses false',
      getDefContainerless() { return false; },
      getTypeContainerless() { return false; },
      getExpectedContainerless() { return false ; }
    },
    {
      description: 'def.containerless is true, Type.containerless is false',
      expectation: 'uses true',
      getDefContainerless() { return true; },
      getTypeContainerless() { return false; },
      getExpectedContainerless() { return true ; }
    },
    {
      description: 'def.containerless is true, Type.containerless is true',
      expectation: 'uses true',
      getDefContainerless() { return true; },
      getTypeContainerless() { return true; },
      getExpectedContainerless() { return true; }
    },
    {
      description: 'def.containerless is false, Type.containerless is true',
      expectation: 'uses true',
      getDefContainerless() { return false; },
      getTypeContainerless() { return true; },
      getExpectedContainerless() { return true; }
    }
  ];

  eachCartesianJoin([containerlessSpecs], (containerlessSpec) => {
    it(`${containerlessSpec.expectation} if ${containerlessSpec.description}`, () => {
      const def = {
        containerless: containerlessSpec.getDefContainerless(),
      };
      class Foo {
        static containerless = containerlessSpec.getTypeContainerless();
      }
      const Type = customElement(def)(Foo);
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(containerlessSpec.getExpectedContainerless(), 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const shadowOptionsSpecs = [
    {
      description: 'def.shadowOptions is undefined, Type.shadowOptions is undefined',
      expectation: 'uses null',
      getDefShadowOptions() { return undefined; },
      getTypeShadowOptions() { return undefined; },
      getExpectedShadowOptions() { return null; }
    },
    {
      description: 'def.shadowOptions is null, Type.shadowOptions is null',
      expectation: 'uses null',
      getDefShadowOptions() { return null; },
      getTypeShadowOptions() { return null; },
      getExpectedShadowOptions() { return null; }
    },
    {
      description: 'def.shadowOptions is object, Type.shadowOptions is null',
      expectation: 'uses object',
      getDefShadowOptions() { return { mode: 'a' }; },
      getTypeShadowOptions() { return null; },
      getExpectedShadowOptions() { return { mode: 'a' }; }
    },
    {
      description: 'def.shadowOptions is null, Type.shadowOptions is object',
      expectation: 'uses object',
      getDefShadowOptions() { return null; },
      getTypeShadowOptions() { return { mode: 'b' }; },
      getExpectedShadowOptions() { return { mode: 'b' }; }
    },
    {
      description: 'def.shadowOptions is object, Type.shadowOptions is object',
      expectation: 'uses def.object',
      getDefShadowOptions() { return { mode: 'a' }; },
      getTypeShadowOptions() { return { mode: 'b' }; },
      getExpectedShadowOptions() { return { mode: 'a' }; }
    }
  ];

  eachCartesianJoin([shadowOptionsSpecs], (shadowOptionsSpec) => {
    it(`${shadowOptionsSpec.expectation} if ${shadowOptionsSpec.description}`, () => {
      const def = {
        shadowOptions: shadowOptionsSpec.getDefShadowOptions(),
      };
      class Foo {
        static shadowOptions = shadowOptionsSpec.getTypeShadowOptions();
      }
      const Type = customElement(def)(Foo);
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.deep.equal(shadowOptionsSpec.getExpectedShadowOptions(), 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(false, 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });

  const hasSlotsSpecs = [
    {
      description: 'hasSlots is undefined',
      expectation: 'uses false',
      getHasSlots() { return undefined; },
      getExpectedHasSlots() { return false; }
    },
    {
      description: 'hasSlots is null',
      expectation: 'uses false',
      getHasSlots() { return null; },
      getExpectedHasSlots() { return false; }
    },
    {
      description: 'hasSlots is false',
      expectation: 'uses false',
      getHasSlots() { return false; },
      getExpectedHasSlots() { return false; }
    },
    {
      description: 'hasSlots is true',
      expectation: 'uses true',
      getHasSlots() { return true; },
      getExpectedHasSlots() { return true; }
    }
  ];

  eachCartesianJoin([hasSlotsSpecs], (hasSlotsSpec) => {
    it(`${hasSlotsSpec.expectation} if ${hasSlotsSpec.description}`, () => {
      const { Type } = createCustomElement({ hasSlots: hasSlotsSpec.getHasSlots() });
      expect(Type.description).to.be.a('object', 'description');
      expect(Type.description.name).to.equal('unnamed', 'name');
      expect(Type.description.template).to.equal(null, 'template');
      expect(Type.description.cache).to.equal(0, 'cache');
      expect(Type.description.build).to.deep.equal({ required: true, compiler: 'default' }, 'build');
      expect(Type.description.bindables).to.deep.equal({}, 'bindables');
      expect(Type.description.instructions).to.equal(PLATFORM.emptyArray, 'instructions');
      expect(Type.description.dependencies).to.equal(PLATFORM.emptyArray, 'dependencies');
      expect(Type.description.surrogates).to.equal(PLATFORM.emptyArray, 'surrogates');
      expect(Type.description.containerless).to.equal(false, 'containerless');
      expect(Type.description.shadowOptions).to.equal(null, 'shadowOptions');
      expect(Type.description.hasSlots).to.equal(hasSlotsSpec.getExpectedHasSlots(), 'hasSlots');
      expect(Object.keys(Type.description)).to.deep.equal(descriptionKeys);
    });
  });
});
