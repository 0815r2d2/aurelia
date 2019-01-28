import { IIndexable, PLATFORM, Tracer } from '@aurelia/kernel';
import { LifecycleFlags } from '../flags';
import { IPropertyObserver } from '../observation';
import { patchProperties } from './patch-properties';
import { propertyObserver } from './property-observer';
import { ProxyObserver } from './proxy-observer';

const slice = Array.prototype.slice;
const noop = PLATFORM.noop;

export interface SelfObserver extends IPropertyObserver<IIndexable, string> {}

@propertyObserver()
export class SelfObserver implements SelfObserver {
  public readonly persistentFlags: LifecycleFlags;
  public obj: IIndexable;
  public propertyKey: string;
  public currentValue: unknown;

  private readonly callback: (newValue: unknown, oldValue: unknown, flags?: LifecycleFlags) => unknown;

  constructor(
    flags: LifecycleFlags,
    instance: object,
    propertyName: string,
    callbackName: string
  ) {
    if (Tracer.enabled) { Tracer.enter('SelfObserver', 'constructor', slice.call(arguments)); }
    this.persistentFlags = flags & LifecycleFlags.persistentBindingFlags;
    if (ProxyObserver.isProxy(instance)) {
      instance.$observer.subscribe(this, propertyName);
      this.obj = instance.$raw;
      this.propertyKey = propertyName;
      this.currentValue = instance.$raw[propertyName];
      this.callback = callbackName in instance.$raw
        ? instance[callbackName].bind(instance)
        : noop;
    } else {
      this.obj = instance;
      this.propertyKey = propertyName;
      this.currentValue = instance[propertyName];
      this.callback = callbackName in instance
        ? instance[callbackName].bind(instance)
        : noop;
    }
    if (flags & LifecycleFlags.patchMode) {
      this.getValue = this.getValueDirect;
    }
    if (Tracer.enabled) { Tracer.leave(); }
  }

  public handleChange(newValue: unknown, oldValue: unknown, flags: LifecycleFlags): void {
    this.setValue(newValue, flags);
  }

  public getValue(): unknown {
    return this.currentValue;
  }
  public getValueDirect(): unknown {
    return this.obj[this.propertyKey];
  }

  public setValue(newValue: unknown, flags: LifecycleFlags): void {
    const currentValue = this.currentValue;

    if (currentValue !== newValue || (flags & LifecycleFlags.patchMode)) {
      this.currentValue = newValue;

      if (!(flags & LifecycleFlags.fromBind)) {
        const coercedValue = this.callback(newValue, currentValue, flags);

        if (coercedValue !== undefined) {
          this.currentValue = newValue = coercedValue;
        }

        this.callSubscribers(newValue, currentValue, flags);
      }
    }
  }
  public $patch(flags: LifecycleFlags): void {
    this.callback(this.obj[this.propertyKey], this.currentValue, this.persistentFlags | flags);
    this.callSubscribers(this.obj[this.propertyKey], this.currentValue, this.persistentFlags | flags);
  }
}
