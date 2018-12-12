import { TestSuite } from "../../../../scripts/test-suite";
import { IObserverLocator, DOM, Aurelia, ILifecycle } from '../../../runtime-html/src/index';;
import { DI } from "@aurelia/kernel";
import { BasicConfiguration } from "../../src";
import { TestConfiguration } from "./prepare";

const app = DOM.createElement('app') as Node;
const createApp = app.cloneNode.bind(app, false);

export const baseSuite = new TestSuite(null);

baseSuite.addDataSlot('a').addData(null).setFactory(c => {
  const container = DI.createContainer();
  container.get(IObserverLocator);
  container.register(BasicConfiguration);
  container.register(TestConfiguration);
  c.b = new Aurelia(container);
  c.c = container.get(ILifecycle);
  c.d = createApp();
  return container;
});
