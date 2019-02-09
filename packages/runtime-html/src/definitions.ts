import {
  AttributeInstruction,
  DelegationStrategy,
  IInterpolationExpression,
  IsBindingBehavior,
  ITargetedInstruction,
  NodeInstruction
} from '@aurelia/runtime';

export const enum HTMLTargetedInstructionType {
  textBinding = 'ha',
  listenerBinding = 'hb',
  stylePropertyBinding = 'hc',
  classListBinding = 'hd',
  cssRuleBinding = 'he',
  setAttribute = 'hf'
}

export type HTMLNodeInstruction =
  NodeInstruction |
  ITextBindingInstruction;

export type HTMLAttributeInstruction =
  AttributeInstruction |
  IListenerBindingInstruction |
  IStylePropertyBindingInstruction |
  IClassListBindingInstruction |
  ICssRuleBindingInstruction |
  ISetAttributeInstruction;

export type HTMLTargetedInstruction = HTMLNodeInstruction | HTMLAttributeInstruction;
// TODO: further improve specificity and integrate with the definitions;
export type HTMLInstructionRow = [HTMLTargetedInstruction, ...HTMLAttributeInstruction[]];

export function isHTMLTargetedInstruction(value: unknown): value is HTMLTargetedInstruction {
  const type = (value as { type?: string }).type;
  return typeof type === 'string' && type.length === 2;
}

export interface ITextBindingInstruction extends ITargetedInstruction {
  type: HTMLTargetedInstructionType.textBinding;
  from: string | IInterpolationExpression;
}

export interface IListenerBindingInstruction extends ITargetedInstruction {
  type: HTMLTargetedInstructionType.listenerBinding;
  from: string | IsBindingBehavior;
  to: string;
  strategy: DelegationStrategy;
  preventDefault: boolean;
}

export interface IStylePropertyBindingInstruction extends ITargetedInstruction {
  type: HTMLTargetedInstructionType.stylePropertyBinding;
  from: string | IsBindingBehavior;
  to: string;
}

export interface IClassListBindingInstruction extends ITargetedInstruction {
  type: HTMLTargetedInstructionType.classListBinding;
  from: string | IsBindingBehavior;
  to: string;
}

export interface ICssRuleBindingInstruction extends ITargetedInstruction {
  type: HTMLTargetedInstructionType.cssRuleBinding;
  from: string | IsBindingBehavior;
  to: string;
}

export interface ISetAttributeInstruction extends ITargetedInstruction {
  type: HTMLTargetedInstructionType.setAttribute;
  value: string;
  to: string;
}
