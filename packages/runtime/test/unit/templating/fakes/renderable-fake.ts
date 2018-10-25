import {
  IRenderContext,
  IBindScope,
  IAttach,
  IScope,
  IRenderable,
  INodeSequence
} from "../../../../src/index";
import { LifecycleState } from "../../../../src/index";

export class RenderableFake implements IRenderable {
  $nextBind: IBindScope = null;
  $prevBind: IBindScope = null;
  $bindableHead?: IBindScope = null;
  $bindableTail?: IBindScope = null;
  $attachableHead?: IAttach = null;
  $attachableTail?: IAttach = null;
  $nextAttach: IAttach = null;
  $prevAttach: IAttach = null;

  $state: LifecycleState = LifecycleState.none;

  $context: IRenderContext;
  $nodes: INodeSequence;
  $scope: IScope;

  $bindables: IBindScope[];
  $attachables: IAttach[];

  $mount() {}
  $unmount() {}
}
