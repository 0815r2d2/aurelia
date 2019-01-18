import { DelegationStrategy, IInterpolationExpression, IsBindingBehavior, ITargetedInstruction } from '@aurelia/runtime';
import { HTMLTargetedInstructionType, IListenerBindingInstruction, IStylePropertyBindingInstruction, ITextBindingInstruction } from './definitions';
export declare class TextBindingInstruction implements ITextBindingInstruction {
    type: HTMLTargetedInstructionType.textBinding;
    from: string | IInterpolationExpression;
    constructor(from: string | IInterpolationExpression);
}
export declare class TriggerBindingInstruction implements IListenerBindingInstruction {
    type: HTMLTargetedInstructionType.listenerBinding;
    from: string | IsBindingBehavior;
    preventDefault: true;
    strategy: DelegationStrategy.none;
    to: string;
    constructor(from: string | IsBindingBehavior, to: string);
}
export declare class DelegateBindingInstruction implements IListenerBindingInstruction {
    type: HTMLTargetedInstructionType.listenerBinding;
    from: string | IsBindingBehavior;
    preventDefault: false;
    strategy: DelegationStrategy.bubbling;
    to: string;
    constructor(from: string | IsBindingBehavior, to: string);
}
export declare class CaptureBindingInstruction implements IListenerBindingInstruction {
    type: HTMLTargetedInstructionType.listenerBinding;
    from: string | IsBindingBehavior;
    preventDefault: false;
    strategy: DelegationStrategy.capturing;
    to: string;
    constructor(from: string | IsBindingBehavior, to: string);
}
export declare class StylePropertyBindingInstruction implements IStylePropertyBindingInstruction {
    type: HTMLTargetedInstructionType.stylePropertyBinding;
    from: string | IsBindingBehavior;
    to: string;
    constructor(from: string | IsBindingBehavior, to: string);
}
export declare class SetAttributeInstruction implements ITargetedInstruction {
    type: HTMLTargetedInstructionType.setAttribute;
    to: string;
    value: string;
    constructor(value: string, to: string);
}
//# sourceMappingURL=instructions.d.ts.map