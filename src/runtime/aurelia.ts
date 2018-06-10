import { IElementComponent } from './templating/component';
import { PLATFORM } from './platform';
import { IContainer, DI, IRegistry } from './di';
import { ITaskQueue } from './task-queue';
import { IRenderingEngine } from './templating/rendering-engine';

export interface ISinglePageApp {
  host: any,
  component: any
}

export class Aurelia { 
  private components: IElementComponent[] = [];
  private startTasks: (() => void)[] = [];
  private stopTasks: (() => void)[] = [];
  private isStarted = false;

  constructor(private container: IContainer = DI.createContainer()) {}

  register(...params: (IRegistry | Record<string, Partial<IRegistry>>)[]) {
    this.container.register(...params);
    return this;
  }

  app(config: ISinglePageApp) {
    let component: IElementComponent = config.component;
    let startTask = () => {
      if (!this.components.includes(component)) {
        this.components.push(component);
        component.$hydrate(
          this.container.get(IRenderingEngine),
          config.host
        );
      }

      component.$bind();
      component.$attach(config.host);
    };

    this.startTasks.push(startTask);

    this.stopTasks.push(() => {
      component.$detach();
      component.$unbind();
    });

    if (this.isStarted) {
      startTask();
    }
    
    return this;
  }

  start() {
    this.isStarted = true;
    this.startTasks.forEach(x => x());
    return this;
  }

  stop() {
    this.isStarted = false;
    this.stopTasks.forEach(x => x());
    return this;
  }
}

(<any>PLATFORM.global).Aurelia = Aurelia;
