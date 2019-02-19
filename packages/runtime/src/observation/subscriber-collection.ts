import { LifecycleFlags as LF } from '../flags';
import {
  ICollectionSubscriber,
  ICollectionSubscriberCollection,
  IndexMap,
  IProxySubscriber,
  IProxySubscriberCollection,
  ISubscriber,
  ISubscriberCollection,
  SubscriberFlags as SF
} from '../observation';

// TODO: see if we can de-duplicate these 3 decorators and their functions without killing performance or readability

function has0(flags: SF): boolean {
  return (flags & SF.Subscriber0) === SF.Subscriber0;
}
function has1(flags: SF): boolean {
  return (flags & SF.Subscriber1) === SF.Subscriber1;
}
function has2(flags: SF): boolean {
  return (flags & SF.Subscriber2) === SF.Subscriber2;
}
function hasRest(flags: SF): boolean {
  return (flags & SF.SubscribersRest) === SF.SubscribersRest;
}

function notHas0(flags: SF): boolean {
  return (flags & SF.Subscriber0) === 0;
}
function notHas1(flags: SF): boolean {
  return (flags & SF.Subscriber1) === 0;
}
function notHas2(flags: SF): boolean {
  return (flags & SF.Subscriber2) === 0;
}
function notHasRest(flags: SF): boolean {
  return (flags & SF.SubscribersRest) === 0;
}

export function subscriberCollection(): ClassDecorator {
  // tslint:disable-next-line:ban-types // ClassDecorator expects it to be derived from Function
  return function(target: Function): void {
    const proto = target.prototype as ISubscriberCollection;

    proto._subscriberFlags = SF.None;
    proto._subscriber0 = null;
    proto._subscriber1 = null;
    proto._subscriber2 = null;
    proto._subscribersRest = null;

    proto.addSubscriber = addSubscriber;
    proto.removeSubscriber = removeSubscriber;
    proto.hasSubscriber = hasSubscriber;
    proto.hasSubscribers = hasSubscribers;
    proto.callSubscribers = callSubscribers;
  };
}

export function proxySubscriberCollection(): ClassDecorator {
  // tslint:disable-next-line:ban-types // ClassDecorator expects it to be derived from Function
  return function(target: Function): void {
    const proto = target.prototype as IProxySubscriberCollection;

    proto._proxySubscriberFlags = SF.None;
    proto._proxySubscriber0 = null;
    proto._proxySubscriber1 = null;
    proto._proxySubscriber2 = null;
    proto._proxySubscribersRest = null;

    proto.addProxySubscriber = addProxySubscriber;
    proto.removeProxySubscriber = removeProxySubscriber;
    proto.hasProxySubscriber = hasProxySubscriber;
    proto.hasProxySubscribers = hasProxySubscribers;
    proto.callProxySubscribers = callProxySubscribers;
  };
}

export function collectionSubscriberCollection(): ClassDecorator {
  // tslint:disable-next-line:ban-types // ClassDecorator expects it to be derived from Function
  return function(target: Function): void {
    const proto = target.prototype as ICollectionSubscriberCollection;

    proto._collectionSubscriberFlags = SF.None;
    proto._collectionSubscriber0 = null;
    proto._collectionSubscriber1 = null;
    proto._collectionSubscriber2 = null;
    proto._collectionSubscribersRest = null;

    proto.addCollectionSubscriber = addCollectionSubscriber;
    proto.removeCollectionSubscriber = removeCollectionSubscriber;
    proto.hasCollectionSubscriber = hasCollectionSubscriber;
    proto.hasCollectionSubscribers = hasCollectionSubscribers;
    proto.callCollectionSubscribers = callCollectionSubscribers;
  };
}

function addSubscriber(this: ISubscriberCollection, subscriber: ISubscriber): boolean {
  if (this.hasSubscriber(subscriber)) {
    return false;
  }
  const subscriberFlags = this._subscriberFlags;
  if (notHas0(subscriberFlags)) {
    this._subscriber0 = subscriber;
    this._subscriberFlags |= SF.Subscriber0;
  } else if (notHas1(subscriberFlags)) {
    this._subscriber1 = subscriber;
    this._subscriberFlags |= SF.Subscriber1;
  } else if (notHas2(subscriberFlags)) {
    this._subscriber2 = subscriber;
    this._subscriberFlags |= SF.Subscriber2;
  } else if (notHasRest(subscriberFlags)) {
    this._subscribersRest = [subscriber];
    this._subscriberFlags |= SF.SubscribersRest;
  } else {
    this._subscribersRest.push(subscriber);
  }
  return true;
}

function addProxySubscriber(this: IProxySubscriberCollection, subscriber: IProxySubscriber): boolean {
  if (this.hasProxySubscriber(subscriber)) {
    return false;
  }
  const subscriberFlags = this._proxySubscriberFlags;
  if (notHas0(subscriberFlags)) {
    this._proxySubscriber0 = subscriber;
    this._proxySubscriberFlags |= SF.Subscriber0;
  } else if (notHas1(subscriberFlags)) {
    this._proxySubscriber1 = subscriber;
    this._proxySubscriberFlags |= SF.Subscriber1;
  } else if (notHas2(subscriberFlags)) {
    this._proxySubscriber2 = subscriber;
    this._proxySubscriberFlags |= SF.Subscriber2;
  } else if (notHasRest(subscriberFlags)) {
    this._proxySubscribersRest = [subscriber];
    this._proxySubscriberFlags |= SF.SubscribersRest;
  } else {
    this._proxySubscribersRest.push(subscriber);
  }
  return true;
}

function addCollectionSubscriber(this: ICollectionSubscriberCollection, subscriber: ICollectionSubscriber): boolean {
  if (this.hasCollectionSubscriber(subscriber)) {
    return false;
  }
  const subscriberFlags = this._collectionSubscriberFlags;
  if (notHas0(subscriberFlags)) {
    this._collectionSubscriber0 = subscriber;
    this._collectionSubscriberFlags |= SF.Subscriber0;
  } else if (notHas1(subscriberFlags)) {
    this._collectionSubscriber1 = subscriber;
    this._collectionSubscriberFlags |= SF.Subscriber1;
  } else if (notHas2(subscriberFlags)) {
    this._collectionSubscriber2 = subscriber;
    this._collectionSubscriberFlags |= SF.Subscriber2;
  } else if (notHasRest(subscriberFlags)) {
    this._collectionSubscribersRest = [subscriber];
    this._collectionSubscriberFlags |= SF.SubscribersRest;
  } else {
    this._collectionSubscribersRest.push(subscriber);
  }
  return true;
}

function removeSubscriber(this: ISubscriberCollection, subscriber: ISubscriber): boolean {
  const subscriberFlags = this._subscriberFlags;
  if (has0(subscriberFlags) && this._subscriber0 === subscriber) {
    this._subscriber0 = null;
    this._subscriberFlags &= ~SF.Subscriber0;
    return true;
  } else if (has1(subscriberFlags) && this._subscriber1 === subscriber) {
    this._subscriber1 = null;
    this._subscriberFlags &= ~SF.Subscriber1;
    return true;
  } else if (has2(subscriberFlags) && this._subscriber2 === subscriber) {
    this._subscriber2 = null;
    this._subscriberFlags &= ~SF.Subscriber2;
    return true;
  } else if (hasRest(subscriberFlags)) {
    const subscribers = this._subscribersRest;
    for (let i = 0, ii = subscribers.length; i < ii; ++i) {
      if (subscribers[i] === subscriber) {
        subscribers.splice(i, 1);
        if (ii === 1) {
          this._subscriberFlags &= ~SF.SubscribersRest;
        }
        return true;
      }
    }
  }
  return false;
}

function removeProxySubscriber(this: IProxySubscriberCollection, subscriber: IProxySubscriber): boolean {
  const subscriberFlags = this._proxySubscriberFlags;
  if (has0(subscriberFlags) && this._proxySubscriber0 === subscriber) {
    this._proxySubscriber0 = null;
    this._proxySubscriberFlags &= ~SF.Subscriber0;
    return true;
  } else if (has1(subscriberFlags) && this._proxySubscriber1 === subscriber) {
    this._proxySubscriber1 = null;
    this._proxySubscriberFlags &= ~SF.Subscriber1;
    return true;
  } else if (has2(subscriberFlags) && this._proxySubscriber2 === subscriber) {
    this._proxySubscriber2 = null;
    this._proxySubscriberFlags &= ~SF.Subscriber2;
    return true;
  } else if (hasRest(subscriberFlags)) {
    const subscribers = this._proxySubscribersRest;
    for (let i = 0, ii = subscribers.length; i < ii; ++i) {
      if (subscribers[i] === subscriber) {
        subscribers.splice(i, 1);
        if (ii === 1) {
          this._proxySubscriberFlags &= ~SF.SubscribersRest;
        }
        return true;
      }
    }
  }
  return false;
}

function removeCollectionSubscriber(this: ICollectionSubscriberCollection, subscriber: ICollectionSubscriber): boolean {
  const subscriberFlags = this._collectionSubscriberFlags;
  if (has0(subscriberFlags) && this._collectionSubscriber0 === subscriber) {
    this._collectionSubscriber0 = null;
    this._collectionSubscriberFlags &= ~SF.Subscriber0;
    return true;
  } else if (has1(subscriberFlags) && this._collectionSubscriber1 === subscriber) {
    this._collectionSubscriber1 = null;
    this._collectionSubscriberFlags &= ~SF.Subscriber1;
    return true;
  } else if (has2(subscriberFlags) && this._collectionSubscriber2 === subscriber) {
    this._collectionSubscriber2 = null;
    this._collectionSubscriberFlags &= ~SF.Subscriber2;
    return true;
  } else if (hasRest(subscriberFlags)) {
    const subscribers = this._collectionSubscribersRest;
    for (let i = 0, ii = subscribers.length; i < ii; ++i) {
      if (subscribers[i] === subscriber) {
        subscribers.splice(i, 1);
        if (ii === 1) {
          this._collectionSubscriberFlags &= ~SF.SubscribersRest;
        }
        return true;
      }
    }
  }
  return false;
}

function hasSubscribers(this: ISubscriberCollection): boolean {
  return this._subscriberFlags !== SF.None;
}

function hasProxySubscribers(this: IProxySubscriberCollection): boolean {
  return this._proxySubscriberFlags !== SF.None;
}

function hasCollectionSubscribers(this: ICollectionSubscriberCollection): boolean {
  return this._collectionSubscriberFlags !== SF.None;
}

function hasSubscriber(this: ISubscriberCollection, subscriber: ISubscriber): boolean {
  // Flags here is just a perf tweak
  // Compared to not using flags, it's a moderate speed-up when this collection does not have the subscriber;
  // and minor slow-down when it does, and the former is more common than the latter.
  const subscriberFlags = this._subscriberFlags;
  if (has0(subscriberFlags) && this._subscriber0 === subscriber) {
    return true;
  }
  if (has1(subscriberFlags) && this._subscriber1 === subscriber) {
    return true;
  }
  if (has2(subscriberFlags) && this._subscriber2 === subscriber) {
    return true;
  }
  if (hasRest(subscriberFlags)) {
    // no need to check length; if the flag is set, there's always at least one
    const subscribers = this._subscribersRest;
    for (let i = 0, ii = subscribers.length; i < ii; ++i) {
      if (subscribers[i] === subscriber) {
        return true;
      }
    }
  }
  return false;
}

function hasProxySubscriber(this: IProxySubscriberCollection, subscriber: IProxySubscriber): boolean {
  const subscriberFlags = this._proxySubscriberFlags;
  if (has0(subscriberFlags) && this._proxySubscriber0 === subscriber) {
    return true;
  }
  if (has1(subscriberFlags) && this._proxySubscriber1 === subscriber) {
    return true;
  }
  if (has2(subscriberFlags) && this._proxySubscriber2 === subscriber) {
    return true;
  }
  if (hasRest(subscriberFlags)) {
    const subscribers = this._proxySubscribersRest;
    for (let i = 0, ii = subscribers.length; i < ii; ++i) {
      if (subscribers[i] === subscriber) {
        return true;
      }
    }
  }
  return false;
}

function hasCollectionSubscriber(this: ICollectionSubscriberCollection, subscriber: ICollectionSubscriber): boolean {
  const subscriberFlags = this._collectionSubscriberFlags;
  if (has0(subscriberFlags) && this._collectionSubscriber0 === subscriber) {
    return true;
  }
  if (has1(subscriberFlags) && this._collectionSubscriber1 === subscriber) {
    return true;
  }
  if (has2(subscriberFlags) && this._collectionSubscriber2 === subscriber) {
    return true;
  }
  if (hasRest(subscriberFlags)) {
    const subscribers = this._collectionSubscribersRest;
    for (let i = 0, ii = subscribers.length; i < ii; ++i) {
      if (subscribers[i] === subscriber) {
        return true;
      }
    }
  }
  return false;
}

function callSubscribers(this: ISubscriberCollection, newValue: unknown, previousValue: unknown, flags: LF): void {
  /**
   * Note: change handlers may have the side-effect of adding/removing subscribers to this collection during this
   * callSubscribers invocation, so we're caching them all before invoking any.
   * Subscribers added during this invocation are not invoked (and they shouldn't be).
   * Subscribers removed during this invocation will still be invoked (and they also shouldn't be,
   * however this is accounted for via $isBound and similar flags on the subscriber objects)
   */
  const subscriber0 = this._subscriber0;
  const subscriber1 = this._subscriber1;
  const subscriber2 = this._subscriber2;
  let subscribers = this._subscribersRest;
  if (subscribers !== null) {
    subscribers = subscribers.slice();
  }
  if (subscriber0 !== null) {
    callSubscriber(subscriber0, newValue, previousValue, flags, this[subscriber0.id]);
  }
  if (subscriber1 !== null) {
    callSubscriber(subscriber1, newValue, previousValue, flags, this[subscriber1.id]);
  }
  if (subscriber2 !== null) {
    callSubscriber(subscriber2, newValue, previousValue, flags, this[subscriber2.id]);
  }
  const length = subscribers && subscribers.length;
  if (length !== undefined && length > 0) {
    let subscriber = null;
    for (let i = 0; i < length; ++i) {
      subscriber = subscribers[i];
      if (subscriber !== null) {
        callSubscriber(subscriber, newValue, previousValue, flags, this[subscriber.id]);
      }
    }
  }
}

function callSubscriber(
  subscriber: ISubscriber,
  newValue: unknown,
  previousValue: unknown,
  flags: LF,
  ownFlags: LF,
): void {
  if (ownFlags === undefined) {
    // If ownFlags is undefined then the subscriber is not a connectable binding and we don't
    // have any business trying to restrict the data flow, so just call it with whatever we received.
    subscriber.handleChange(newValue, previousValue, flags);

  // Note: if the update flags for both directions are set, that means an observer's callSubscribers caused the update direction to switch
  // back to the origin of the change.
  // With this heuristic we stop this roundtrip a little earlier than vCurrent does (where the target or source is evaluated
  // and compared again) and effectively make this a "purer" one-way update flow that prevents observable side-effects from
  // flowing back the opposite direction.
  } else if (((flags | ownFlags) & LF.update) === LF.update) {

    // Observers should explicitly pass this flag if they want a roundtrip to happen anyway.
    // SelfObserver does this in order to propagate from-view changes from a child component back to the bindings
    // on its own component.
    // Some target observers (e.g. select) do this as well, but the other way around.
    if ((flags & LF.allowPublishRoundtrip) > 0) {
      // Unset the directional flag that came in from the origin and allowPublishRoundtrip since we don't
      // want these to flow into the next subscriberCollection
      subscriber.handleChange(newValue, previousValue, (flags & ~(LF.update | LF.allowPublishRoundtrip)) | ownFlags);
    }
  } else {
    // If this is not a roundtrip, simply proceed in the same direction.
    subscriber.handleChange(newValue, previousValue, flags | ownFlags);
  }
}

function callProxySubscribers(this: IProxySubscriberCollection, key: PropertyKey, newValue: unknown, previousValue: unknown, flags: LF): void {
  const subscriber0 = this._proxySubscriber0;
  const subscriber1 = this._proxySubscriber1;
  const subscriber2 = this._proxySubscriber2;
  let subscribers = this._proxySubscribersRest;
  if (subscribers !== null) {
    subscribers = subscribers.slice();
  }
  if (subscriber0 !== null) {
    subscriber0.handleProxyChange(key, newValue, previousValue, flags);
  }
  if (subscriber1 !== null) {
    subscriber1.handleProxyChange(key, newValue, previousValue, flags);
  }
  if (subscriber2 !== null) {
    subscriber2.handleProxyChange(key, newValue, previousValue, flags);
  }
  const length = subscribers && subscribers.length;
  if (length !== undefined && length > 0) {
    for (let i = 0; i < length; ++i) {
      const subscriber = subscribers[i];
      if (subscriber !== null) {
        subscriber.handleProxyChange(key, newValue, previousValue, flags);
      }
    }
  }
}

function callCollectionSubscribers(this: ICollectionSubscriberCollection, indexMap: IndexMap, flags: LF): void {
  const subscriber0 = this._collectionSubscriber0;
  const subscriber1 = this._collectionSubscriber1;
  const subscriber2 = this._collectionSubscriber2;
  let subscribers = this._collectionSubscribersRest;
  if (subscribers !== null) {
    subscribers = subscribers.slice();
  }
  if (subscriber0 !== null) {
    subscriber0.handleCollectionChange(indexMap, flags);
  }
  if (subscriber1 !== null) {
    subscriber1.handleCollectionChange(indexMap, flags);
  }
  if (subscriber2 !== null) {
    subscriber2.handleCollectionChange(indexMap, flags);
  }
  const length = subscribers && subscribers.length;
  if (length !== undefined && length > 0) {
    for (let i = 0; i < length; ++i) {
      const subscriber = subscribers[i];
      if (subscriber !== null) {
        subscriber.handleCollectionChange(indexMap, flags);
      }
    }
  }
}
