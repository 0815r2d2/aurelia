import {
  IRenderContext,
  IBindScope,
  IAttach,
  IScope,
  IRenderable,
  INodeSequence
} from "../../../../src/index";
import { LifecycleState } from "../../../../src/lifecycle-state";

export class RenderableFake implements IRenderable {
  $nextBindable: IBindScope = null;
  $prevBindable: IBindScope = null;
  $bindableHead?: IBindScope = null;
  $bindableTail?: IBindScope = null;
  $attachableHead?: IAttach = null;
  $attachableTail?: IAttach = null;
  $nextAttachable: IAttach = null;
  $prevAttachable: IAttach = null;

  $state: LifecycleState = LifecycleState.none;

  $isAttached: boolean;

  $context: IRenderContext;
  $nodes: INodeSequence;
  $scope: IScope;

  $bindables: IBindScope[];
  $attachables: IAttach[];

  $mount() {}
  $unmount() {}
}
