import {startFPSMonitor, startMemMonitor, initProfiler, startProfile, endProfile} from 'perf-monitor';
import * as faker from 'faker';
import './app.scss';

import { customElement, ICustomElement, IDOM, CustomElementResource, buildTemplateDefinition, IteratorBindingInstruction, HydrateTemplateController, InterpolationInstruction, bindable } from '@aurelia/runtime';
import { Subject, createElement, TextBindingInstruction } from '@aurelia/runtime-html'

startFPSMonitor();
startMemMonitor();

import template from './app.html';
import { Tracer, ITraceInfo } from '@aurelia/kernel';

function createItem() {
  return {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    country: faker.address.country()
  };
}

export interface App extends ICustomElement<HTMLElement> {}

@customElement({ name: 'app', template })
export class App {
  public rows: any[];
  public cols: string[];
  public subject: Subject;
  @bindable public keyedMode: boolean;
  @bindable public patchMode: boolean;
  @bindable public proxyMode: boolean;

  constructor() {
    this.rows = [];
    this.cols = ['name', 'phone', 'country'];
  }


  public created(): void {
    // Tracer.enabled = true;
    // Tracer.enableLiveLogging({
    //   write(info: ITraceInfo): void {
    //     console.log(`${' '.repeat(info.depth)}${info.objName}.${info.methodName}`);
    //   }
    // });
    this.$host.textContent = '';
    this.createSubject();
  }

  public create(count: number): void {
    for (let i = 0; i < count; ++i) {
      this.rows.push(createItem());
    }
  }

  public clear(): void {
    this.rows = [];
  }

  private createSubject(): void {
    const dom = this.$context.get<IDOM<Node>>(IDOM);
    this.subject = createElement<Node>(dom, 'table', {
      class: 'table is-fullwidth',
    }, [
      createElement<Node>(dom, 'thead', {}, [
        createElement<Node>(dom, 'tr', {
          $1: new HydrateTemplateController({
              name: '',
              template: '<th><au-m class="au"></au-m> </th>',
              instructions: [[new TextBindingInstruction('${col | pascal}')]],
              useProxies: this.proxyMode,
              patchMode: this.patchMode
            },
            'repeat',
            [new IteratorBindingInstruction(this.keyedMode ? 'col of cols & keyed' : 'col of cols', 'items')]
          )
        })
      ]),
      createElement<Node>(dom, 'tbody', {
        $1: new HydrateTemplateController({
            name: '',
            template: '<tr><au-m class="au"></au-m></tr>',
            instructions: [[new HydrateTemplateController({
                name: '',
                template: '<td><au-m class="au"></au-m> </td>',
                instructions: [[new TextBindingInstruction('${row[col]}')]],
                useProxies: this.proxyMode,
                patchMode: this.patchMode
              },
              'repeat',
              [new IteratorBindingInstruction(this.keyedMode ? 'col of cols & keyed' : 'col of cols', 'items')]
            )]]
          },
          'repeat',
          [new IteratorBindingInstruction(this.keyedMode ? 'row of rows & keyed' : 'row of rows', 'items')]
        )
      })
    ]);
  }

  protected keyedModeChanged(): void {
    this.createSubject();
  }

  protected patchModeChanged(): void {
    this.createSubject();
  }

  protected proxyModeChanged(): void {
    this.createSubject();
  }
}
