import { AccessScope, TemplateLiteral, LiteralString, Conditional, CallScope, IExpression, AccessMember } from "./runtime/binding/ast";
import { IContainer } from "./runtime/di";
import { IParser } from "./runtime/binding/parser";
import { Repeat } from "./runtime/resources/repeat/repeat";
import { If } from "./runtime/resources/if";
import { Else } from "./runtime/resources/else";
import { Compose } from "./runtime/resources/compose";

const emptyArray: any[] = [];

const expressionCache: Record<string, IExpression> = {
  message: new AccessScope('message'),
  textContent: new AccessScope('textContent'),
  value: new AccessScope('value'),
  nameTagBorderWidth: new AccessScope('borderWidth'),
  nameTagBorderColor: new AccessScope('borderColor'),
  nameTagBorder: new TemplateLiteral([
    new AccessScope('borderWidth'),
    new LiteralString('px solid '),
    new AccessScope('borderColor')
  ]),
  nameTagHeaderVisible: new AccessScope('showHeader'),
  nameTagClasses: new TemplateLiteral([
    new LiteralString('au name-tag '),
    new Conditional(
      new AccessScope('showHeader'),
      new LiteralString('header-visible'),
      new LiteralString('')
    )
  ]),
  name: new AccessScope('name'),
  submit: new CallScope('submit', emptyArray, 0),
  nameTagColor: new AccessScope('color'),
  duplicateMessage: new AccessScope('duplicateMessage'),
  checked: new AccessScope('checked'),
  nameTag: new AccessScope('nameTag'),
  todos: new AccessScope('todos'),
  addTodo: new CallScope('addTodo', emptyArray, 0),
  description: new AccessMember(new AccessScope('todo'), 'description')
};

const globalResources = [Repeat, If, Else];

export const GeneratedConfiguration = {
  register(container: IContainer) {
    container.get(IParser).cache(expressionCache);
    container.register(...globalResources);
  }
};
