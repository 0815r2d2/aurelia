import { DI } from '../../../../../kernel';
import { BasicConfiguration } from '../../../../../jit';
import { Aurelia, CustomElementResource } from '../../../../../runtime';
import { App } from './app';
import { ViewportCustomElement } from '../../../../../router';
import { NavCustomElement } from '../../../../../router';

import { Game } from './components/game';
import { Lobby } from './components/lobby';
import { About } from './components/about';
import { Contacts } from './components/contacts';
import { Board } from './components/board';
import { Inventory } from './components/inventory';

const container = DI.createContainer();
container.register(BasicConfiguration,
  <any>ViewportCustomElement,
  <any>NavCustomElement,
  <any>App,

  <any>Game,
  <any>Lobby,
  <any>About,
  <any>Contacts,
  <any>Board,
  <any>Inventory,
);
const component = container.get(CustomElementResource.keyFrom('app'));

const au = new Aurelia(container);
window['au'] = au;
au.app({ host: document.querySelector('app'), component });
au.start();
