import { IRegistry } from '@aurelia/kernel';
import { IElement } from '../../dom.interfaces';
import { ILifecycle, IScope, LifecycleFlags } from '../../interfaces';
import { Binding } from '../binding';
import { bindingBehavior } from '../binding-behavior';
import { DataAttributeAccessor } from '../target-accessors';

@bindingBehavior('attr')
export class AttrBindingBehavior {
  public static register: IRegistry['register'];

  public bind(flags: LifecycleFlags, scope: IScope, binding: Binding): void {
    binding.targetObserver = new DataAttributeAccessor(binding.locator.get(ILifecycle), binding.target as IElement, binding.targetProperty);
  }

  public unbind(flags: LifecycleFlags, scope: IScope, binding: Binding): void {
    return;
  }
}
