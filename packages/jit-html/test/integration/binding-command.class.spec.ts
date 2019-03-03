import { Constructable } from '@aurelia/kernel';
import { Aurelia, BindingMode, CustomElementResource, ILifecycle } from '@aurelia/runtime';
import { IEventManager } from '@aurelia/runtime-html';
import { expect } from 'chai';
import { BasicConfiguration } from '../../src/index';
import { TestContext } from '../util';
import { eachCartesianJoin, eachCartesianJoinAsync, tearDown } from './util';

// TemplateCompiler - Binding Commands integration
describe('template-compiler.binding-commands.class', function() {

  const falsyValues = [0, false, null, undefined, ''];
  const truthyValues = [1, '1', true, {}, [], Symbol(), function() {/**/}, Number, new Proxy({}, {})];

  const classNameTests: string[] = [
    'background',
    'color',
    'background-color',
    'font-size',
    'font-family',
    '-webkit-user-select',
    'SOME_RIDI-COU@#$%-class',
    '1',
    '__1',
    ...[
    '@',
    '#',
    '$',
    '!',
    '^',
    '~',
    '&',
    '*',
    '(',
    ')',
    '+',
    // '=', // todo: better test for this scenario
    '*',
    // '/', // todo: better test for this scenario
    '\\',
    ':',
    '[',
    ']',
    '{',
    '}',
    '|',
    '<',
    // '>', // todo: better test for this scenario
    ',',
    '%'].map(s => `${s}1`)
  ];

  const testCases: ITestCase[] = [
    {
      selector: 'button',
      title: (className: string, callIndex: number) => `${callIndex}. <button class.${className}=value>`,
      template: (className) => {
        return `
        <button ${className}.class="value"></button>
        <button class.${className}="value"></button>
        <child value.bind="value"></child>
        <child repeat.for="i of 5" value.bind="value"></child>
      `;
      },
      assert: async (au, lifecycle, host, component, testCase, className) => {
        const childEls = host.querySelectorAll('child');
        expect(childEls.length).to.equal(6);
        await eachCartesianJoinAsync(
          [falsyValues, truthyValues],
          async (falsyValue, truthyValue) => {
            for (let i = 0, ii = childEls.length; ii > i; ++i) {
              const el = childEls[i];
              expect(
                el.classList.contains(className.toLowerCase()),
                `[[truthy]]${el.className}.contains(${className}) 1`
              ).to.equal(true);
            }

            component.value = falsyValue;
            await Promise.resolve();
            for (let i = 0, ii = childEls.length; ii > i; ++i) {
              const el = childEls[i];
              expect(
                el.classList.contains(className.toLowerCase()),
                `[${String(falsyValue)}]${el.className}.contains(${className}) 2`
              ).to.equal(false);
            }

            component.value = truthyValue;
            await Promise.resolve();
            for (let i = 0, ii = childEls.length; ii > i; ++i) {
              const el = childEls[i];
              expect(
                el.classList.contains(className.toLowerCase()),
                `[${String(truthyValue)}]${el.className}.contains(${className}) 3`
              ).to.equal(true);
            }
          }
        );
      }
    }
  ];

  /**
   * For each combination of class name and test case
   * Check the following:
   * 1. The element contains the class
   * 2. Each `value` of falsy values, set bound view model value to `value` and:
   *  - wait for 1 promise tick
   *  - the element does not contain the class
   * 3. Each `value` of truthy values, set bound view model value to `value` and:
   *  - wait for 1 promise tick
   *  - the element does contain the class
   * 4. TODO: assert class binding command on root surrogate once root surrogate rendering is supported
   */
  eachCartesianJoin(
    [classNameTests, testCases],
    (className, testCase, callIndex) => {
      it(testCase.title(className, callIndex), async function() {
        const { ctx, au, lifecycle, host, component } = setup(
          testCase.template(className),
          class App {
            public value: unknown = true;
          },
          BasicConfiguration,
          CustomElementResource.define(
            {
              name: 'child',
              template: `<template ${className}.class="value"></template>`
            },
            class Child {
              public static bindables = {
                value: { property: 'value', attribute: 'value', mode: BindingMode.twoWay }
              };
              public value = true;
            }
          )
        );
        au.app({ host, component });
        au.start();
        try {
          const els = typeof testCase.selector === 'string'
            ? host.querySelectorAll(testCase.selector)
            : testCase.selector(ctx.doc) as ArrayLike<HTMLElement>;
          for (let i = 0, ii = els.length; ii > i; ++i) {
            const el = els[i];
            expect(
              el.classList.contains(className.toLowerCase()),
              `[true]${el.className}.contains(${className}) 1`
            ).to.equal(true);
          }

          await eachCartesianJoinAsync(
            [falsyValues, truthyValues],
            async (falsyValue, truthyValue) => {
              component.value = falsyValue;
              await Promise.resolve();
              for (let i = 0, ii = els.length; ii > i; ++i) {
                const el = els[i];
                expect(
                  el.classList.contains(className.toLowerCase()),
                  `[${String(falsyValue)}]${el.className}.contains(${className}) 2`
                ).to.equal(false);
              }

              component.value = truthyValue;
              await Promise.resolve();
              for (let i = 0, ii = els.length; ii > i; ++i) {
                const el = els[i];
                expect(
                  el.classList.contains(className.toLowerCase()),
                  `[${String(truthyValue)}]${el.className}.contains(${className}) 3`
                ).to.equal(true);
              }
            }
          );
          await testCase.assert(au, lifecycle, host, component, testCase, className);
        } finally {
          const em = ctx.container.get(IEventManager);
          em.dispose();
          tearDown(au, lifecycle, host);
        }
      });
    }
  );

  function noop() {/**/}

  interface IApp {
    value: any;
  }

  interface ITestCase {
    selector: string | ((document: Document) => ArrayLike<Element>);
    title(...args: unknown[]): string;
    template(...args: string[]): string;
    assert(au: Aurelia, lifecycle: ILifecycle, host: HTMLElement, component: IApp, testCase: ITestCase, className: string): void | Promise<void>;
  }

  function setup<T>(template: string | Node, $class: Constructable<T> | null, ...registrations: any[]) {
    const ctx = TestContext.createHTMLTestContext();
    const { container, lifecycle, observerLocator } = ctx;
    container.register(...registrations);
    const host = ctx.doc.body.appendChild(ctx.createElement('app'));
    const au = new Aurelia(container);
    const App = CustomElementResource.define({ name: 'app', template }, $class);
    const component = new App();

    return { container, lifecycle, ctx, host, au, component, observerLocator };
  }
});
