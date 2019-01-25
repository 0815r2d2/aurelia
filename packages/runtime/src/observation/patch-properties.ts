import { IIndexable } from '@aurelia/kernel';
import { LifecycleFlags } from '../flags';
import { AccessorOrObserver, IObserversLookup } from '../observation';

function hasObservers(value: unknown): value is { $observers: IObserversLookup } {
  return value !== null && typeof value === 'object' && (value as IIndexable).$observers !== undefined;
}

/**
 * Checks if the provided value is an object and whether it has any observers declared on it.
 * If so, then patch all of its properties recursively. This is essentially a dirty check.
 */
export function patchProperties(value: unknown, flags: LifecycleFlags): void {
  if (hasObservers(value)) {
    const observers = value.$observers;
    let key: string;
    let observer: AccessorOrObserver;
    for (key in observers) {
      observer = observers[key];
      if (observer.$patch !== undefined) {
        observer.$patch(flags | LifecycleFlags.patchMode | LifecycleFlags.updateTargetInstance);
      }
    }
  }
}
