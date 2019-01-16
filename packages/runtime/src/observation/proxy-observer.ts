import { Tracer } from '@aurelia/kernel';
import { IPropertySubscriber, IProxySubscriber, ISubscriberCollection, LifecycleFlags, MutationKind } from '../observation';
import { subscriberCollection } from './subscriber-collection';

const slice = Array.prototype.slice;

export interface ProxySubscriberCollection extends ISubscriberCollection<MutationKind.instance> {}

@subscriberCollection(MutationKind.instance)
export class ProxySubscriberCollection implements ProxySubscriberCollection {
  constructor() {
    if (Tracer.enabled) { Tracer.enter('ProxySubscriberCollection.constructor', slice.call(arguments)); }
    if (Tracer.enabled) { Tracer.leave(); }
  }
}

export interface ProxyObserver<T extends object = object> extends ISubscriberCollection<MutationKind.proxy> {}

@subscriberCollection(MutationKind.proxy)
export class ProxyObserver<T extends object = object> implements ProxyObserver<T> {
  public readonly proxy: T;
  private readonly subscribers: Record<PropertyKey, ProxySubscriberCollection>;

  constructor(obj: T) {
    if (Tracer.enabled) { Tracer.enter('ProxyObserver.constructor', slice.call(arguments)); }
    this.proxy = new Proxy(obj, this);
    this.subscribers = {};
    if (Tracer.enabled) { Tracer.leave(); }
  }

  public static getOrCreate<T extends object>(obj: T & { $raw?: T; $observer?: ProxyObserver<T> }): ProxyObserver<T> {
    if (obj.$raw === undefined) {
      return new ProxyObserver(obj);
    }
    return obj.$observer;
  }

  public static isProxy<T extends object>(obj: T & { $raw?: T }): obj is T & { $raw: T } {
    return obj.$raw !== undefined;
  }

  public get(target: T, p: PropertyKey, receiver?: unknown): unknown {
    if (p === '$raw') {
      return target;
    }
    if (p === '$observer') {
      return this;
    }
    return Reflect.get(target, p, target);
  }

  public set(target: T, p: PropertyKey, value: unknown, receiver?: unknown): boolean {
    const oldValue = Reflect.get(target, p, target);
    if (Reflect.set(target, p, value, target)) {
      if (oldValue !== value) {
        this.callPropertySubscribers(value, oldValue, p);
        this.callSubscribers(p, value, oldValue, LifecycleFlags.useProxies | LifecycleFlags.updateTargetInstance);
      }
      return true;
    } else {
      return false;
    }
  }

  public deleteProperty(target: T, p: PropertyKey): boolean {
    const oldValue = Reflect.get(target, p, target);
    if (Reflect.deleteProperty(target, p)) {
      if (oldValue !== undefined) {
        this.callPropertySubscribers(undefined, oldValue, p);
        this.callSubscribers(p, undefined, oldValue, LifecycleFlags.useProxies | LifecycleFlags.updateTargetInstance);
      }
      return true;
    }
    return false;
  }

  public defineProperty(target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean {
    const oldValue = Reflect.get(target, p, target);
    if (Reflect.defineProperty(target, p, attributes)) {
      if (attributes.value !== oldValue) {
        this.callPropertySubscribers(attributes.value, oldValue, p);
        this.callSubscribers(p, attributes.value, oldValue, LifecycleFlags.useProxies | LifecycleFlags.updateTargetInstance);
      }
      return true;
    }
    return false;
  }

  public apply(target: T, thisArg: unknown, argArray?: unknown[]): unknown {
    return Reflect.apply(target as Function, target, argArray);
  }

  public subscribe(subscriber: IProxySubscriber): void;
  public subscribe(subscriber: IPropertySubscriber, key: PropertyKey): void;
  public subscribe(subscriber: IPropertySubscriber | IProxySubscriber, key?: PropertyKey): void {
    if (arguments.length === 1) {
      this.addSubscriber(subscriber);
    } else {
      let subscribers = this.subscribers[key as string | number];
      if (subscribers === undefined) {
        subscribers = this.subscribers[key as string | number] = new ProxySubscriberCollection();
      }
      subscribers.addSubscriber(subscriber as IPropertySubscriber);
    }
  }

  public unsubscribe(subscriber: IProxySubscriber): void;
  public unsubscribe(subscriber: IPropertySubscriber, key: PropertyKey): void;
  public unsubscribe(subscriber: IPropertySubscriber | IProxySubscriber, key?: PropertyKey): void {
    if (arguments.length === 1) {
      this.removeSubscriber(subscriber);
    } else {
      const subscribers = this.subscribers[key as string | number];
      if (subscribers !== undefined) {
        subscribers.removeSubscriber(subscriber as IPropertySubscriber);
      }
    }
  }

  private callPropertySubscribers(newValue: unknown, oldValue: unknown, key: PropertyKey): void {
    const subscribers = this.subscribers[key as string | number];
    if (subscribers !== undefined) {
      subscribers.callSubscribers(newValue, oldValue, LifecycleFlags.useProxies | LifecycleFlags.updateTargetInstance);
    }
  }
}
