import { IRegistry } from '@aurelia/kernel';
import { IScope, LifecycleFlags } from '../../observation';
import { Binding } from '../binding';
import { ISignaler } from '../signaler';
export declare type SignalableBinding = Binding & {
    signal: string | string[];
};
export declare class SignalBindingBehavior {
    private signaler;
    static register: IRegistry['register'];
    constructor(signaler: ISignaler);
    bind(flags: LifecycleFlags, scope: IScope, binding: SignalableBinding, ...args: string[]): void;
    unbind(flags: LifecycleFlags, scope: IScope, binding: SignalableBinding): void;
}
//# sourceMappingURL=signals.d.ts.map