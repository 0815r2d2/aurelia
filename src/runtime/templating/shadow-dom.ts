import { DOM, PLATFORM } from '../pal';;
import { IView, IViewOwner } from './view';
import { IRenderSlot } from './render-slot';
import { IVisual, IVisualFactory } from './view-engine';
import { IBindScope } from '../binding/observation';
import { IScope } from '../binding/binding-context';
import { IAttach, AttachContext, DetachContext } from './lifecycle';

type ProjectionSource = IRenderSlot | IEmulatedShadowSlot;

type ShadowEmulationTracking = { 
  $slot: ProjectionSource;
  $slotName?: string;
  $isContentProjectionSource?: boolean;
  $ownerView?: IView;
  $projectionSource?: ProjectionSource;
  $slotProjectFrom?: ProjectionSource;
  $assignedSlot?: IEmulatedShadowSlot;
  $projectionChildren: SlotNode[];
};

type SlotNode = Node & ShadowEmulationTracking;

export interface IEmulatedShadowSlot extends IBindScope, IAttach {
  readonly name: string;
  readonly needsFallback: boolean;
  readonly anchor: Node;

  removeView(view: IView, projectionSource: ProjectionSource);
  removeAll(projectionSource: ProjectionSource);
  projectFrom(view: IView, projectionSource: ProjectionSource);
  addNode(view: IView, node: SlotNode, projectionSource: ProjectionSource, index: number, destination?: string);
  renderFallback(view: IView, nodes: SlotNode[], projectionSource: ProjectionSource, index: number);
  projectTo?(slots: Record<string, IEmulatedShadowSlot>);
}

const noNodes = <SlotNode[]>PLATFORM.emptyArray;

function shadowSlotAddFallbackVisual(visual: IVisual, owner: ShadowSlot) {
  owner.fallbackVisual.$view.insertBefore(owner.anchor);
}

function passThroughSlotAddFallbackVisual(visual: IVisual, owner: PassThroughSlot, index: number) {
  let projectionSource = owner.currentProjectionSource;
  let slots = <Record<string, IEmulatedShadowSlot>>Object.create(null);

  owner.currentProjectionSource = null;
  slots[owner.destinationSlot.name] = owner.destinationSlot;
  
  ShadowDOMEmulation.distributeView(
    owner.fallbackVisual.$view, 
    slots, 
    projectionSource, 
    index, 
    owner.destinationSlot.name
  );
}

abstract class ShadowSlotBase {
  fallbackVisual: IVisual = null;
  $isAttached = false;
  $isBound = false;
  projections = 0;

  constructor(public owner: IViewOwner, public anchor: SlotNode, public name: string, public fallbackFactory?: IVisualFactory) {
    this.anchor.$slot = <any>this;
  }

  get needsFallback() {
    return this.fallbackFactory !== null && this.projections === 0;
  }

  removeFallbackVisual(context?: DetachContext) {
    if (this.fallbackVisual !== null) {
      this.fallbackVisual.detach(context);
      this.fallbackVisual.$unbind();
      this.fallbackVisual = null;
    }
  }

  $bind(scope: IScope) {
    // fallbackContentView will never be created when the slot isn't already bound
    // so no need to worry about binding it here
    this.$isBound = true;
  }

  $attach(context: AttachContext) {
    // fallbackContentView will never be created when the slot isn't already attached
    // so no need to worry about attaching it here
    this.$isAttached = true;
  }

  $detach(context: DetachContext) {
    if (this.$isAttached) {
      this.removeFallbackVisual(context);
      this.$isAttached = false;
    }
  }

  $unbind() {
    this.$isBound = false;
  }
}

class PassThroughSlot extends ShadowSlotBase implements IEmulatedShadowSlot {
  destinationSlot: IEmulatedShadowSlot = null;
  currentProjectionSource: ProjectionSource = null;

  constructor(owner: IViewOwner, anchor: SlotNode, name: string, private destinationName: string, fallbackFactory?: IVisualFactory) {
    super(owner, anchor, name, fallbackFactory);
    this.anchor.$slotName = this.destinationName;
  }

  passThroughTo(destinationSlot: IEmulatedShadowSlot) {
    this.destinationSlot = destinationSlot;
  }

  renderFallback(view: IView, nodes: SlotNode[], projectionSource: ProjectionSource, index = 0) {
    if (this.fallbackVisual === null) {
      this.fallbackVisual = this.fallbackFactory.create();
      this.fallbackVisual.$bind(this.owner.$scope);
      this.currentProjectionSource = projectionSource;
      this.fallbackVisual.attach(null, passThroughSlotAddFallbackVisual, this, index);
    }
  }

  addNode(view: IView, node: SlotNode, projectionSource: ProjectionSource, index: number) {
    this.removeFallbackVisual();

    if (node.$slot instanceof PassThroughSlot) {
      node.$slot.passThroughTo(this);
      return;
    }

    this.projections++;
    this.destinationSlot.addNode(view, node, projectionSource, index);
  }

  removeView(view: IView, projectionSource: ProjectionSource) {
    this.projections--;
    this.destinationSlot.removeView(view, projectionSource);

    if (this.needsFallback) {
      this.renderFallback(null, noNodes, projectionSource);
    }
  }

  removeAll(projectionSource: ProjectionSource) {
    this.projections = 0;
    this.destinationSlot.removeAll(projectionSource);

    if (this.needsFallback) {
      this.renderFallback(null, noNodes, projectionSource);
    }
  }

  projectFrom(view: IView, projectionSource: ProjectionSource) {
    this.destinationSlot.projectFrom(view, projectionSource);
  }
}

class ShadowSlot extends ShadowSlotBase implements IEmulatedShadowSlot {
  children: SlotNode[] = [];
  projectFromAnchors: SlotNode[] = null;
  destinationSlots = null;
  fallbackSlots;

  constructor(owner: IViewOwner, anchor: SlotNode, name: string, fallbackFactory?: IVisualFactory) {
    super(owner, anchor, name, fallbackFactory);
    this.anchor.$isContentProjectionSource = true;
  }

  renderFallback(view: IView, nodes: SlotNode[], projectionSource: ProjectionSource, index = 0) {
    if (this.fallbackVisual === null) {
      this.fallbackVisual = this.fallbackFactory.create();
      this.fallbackVisual.$bind(this.owner.$scope);
      this.fallbackVisual.attach(null, shadowSlotAddFallbackVisual, this);
    }

    if (this.fallbackVisual.$slots) {
      let slots = this.fallbackVisual.$slots;
      let projectFromAnchors = this.projectFromAnchors;

      if (projectFromAnchors !== null) {
        for (let slotName in slots) {
          let slot = slots[slotName];

          for (let i = 0, ii = projectFromAnchors.length; i < ii; ++i) {
            let anchor = projectFromAnchors[i];
            slot.projectFrom(anchor.$ownerView, anchor.$slotProjectFrom);
          }
        }
      }

      this.fallbackSlots = slots;
      ShadowDOMEmulation.distributeNodes(view, nodes, slots, projectionSource, index);
    }
  }
  
  addNode(view: IView, node: SlotNode, projectionSource: ProjectionSource, index: number, destination: string) {
    this.removeFallbackVisual();

    if (node.$slot instanceof PassThroughSlot) {
      node.$slot.passThroughTo(this);
      return;
    }

    if (this.destinationSlots !== null) {
      ShadowDOMEmulation.distributeNodes(view, [node], this.destinationSlots, this, index);
    } else {
      node.$ownerView = view;
      node.$projectionSource = projectionSource;
      node.$assignedSlot = this;

      let anchor = this.findAnchor(view, node, projectionSource, index);
      let parent = anchor.parentNode;

      parent.insertBefore(node, anchor);
      this.children.push(node);
      this.projections++;
    }
  }

  removeView(view: IView, projectionSource: ProjectionSource) {
    if (this.destinationSlots !== null) {
      ShadowDOMEmulation.undistributeView(view, this.destinationSlots, this);
    } else if (this.fallbackVisual && this.fallbackVisual.$slots) {
      ShadowDOMEmulation.undistributeView(view, this.fallbackVisual.$slots, projectionSource);
    } else {
      let found = this.children.find(x => x.$slotProjectFrom === projectionSource);
      if (found) {
        let children = found.$projectionChildren;

        for (let i = 0, ii = children.length; i < ii; ++i) {
          let child = children[i];

          if (child.$ownerView === view) {
            children.splice(i, 1);
            view.appendChild(child);
            i--; ii--;
            this.projections--;
          }
        }

        if (this.needsFallback) {
          this.renderFallback(view, noNodes, projectionSource);
        }
      }
    }
  }

  removeAll(projectionSource: ProjectionSource) {
    if (this.destinationSlots !== null) {
      ShadowDOMEmulation.undistributeAll(this.destinationSlots, this);
    } else if (this.fallbackVisual && this.fallbackVisual.$slots) {
      ShadowDOMEmulation.undistributeAll(this.fallbackVisual.$slots, projectionSource);
    } else {
      let found = this.children.find(x => x.$slotProjectFrom === projectionSource);

      if (found) {
        let children = found.$projectionChildren;
        for (let i = 0, ii = children.length; i < ii; ++i) {
          let child = children[i];
          child.$ownerView.appendChild(child);
          this.projections--;
        }

        found.$projectionChildren = [];

        if (this.needsFallback) {
          this.renderFallback(null, noNodes, projectionSource);
        }
      }
    }
  }

  private findAnchor(view: IView, node: SlotNode, projectionSource: ProjectionSource, index: number) {
    if (projectionSource) {
      //find the anchor associated with the projected view slot
      let found = this.children.find(x => x.$slotProjectFrom === projectionSource);
      if (found) {
        if (index !== undefined) {
          let children = found.$projectionChildren;
          let viewIndex = -1;
          let lastView: IView;

          for (let i = 0, ii = children.length; i < ii; ++i) {
            let current = children[i];

            if (current.$ownerView !== lastView) {
              viewIndex++;
              lastView = current.$ownerView;

              if (viewIndex >= index && lastView !== view) {
                children.splice(i, 0, node);
                return current;
              }
            }
          }
        }

        found.$projectionChildren.push(node);
        return found;
      }
    }

    return this.anchor;
  }

  projectTo(slots: Record<string, IEmulatedShadowSlot>) {
    this.destinationSlots = slots;
  }

  projectFrom(view: IView, projectionSource: ProjectionSource) {
    let anchor: SlotNode = <any>DOM.createComment('anchor');
    let parent = this.anchor.parentNode;
    anchor.$slotProjectFrom = projectionSource;
    anchor.$ownerView = view;
    anchor.$projectionChildren = [];
    parent.insertBefore(anchor, this.anchor);
    this.children.push(anchor);

    if (this.projectFromAnchors === null) {
      this.projectFromAnchors = [];
    }

    this.projectFromAnchors.push(anchor);
  }
}

export const ShadowDOMEmulation = {
  defaultSlotName: 'auDefaultSlot',

  getSlotName(node: Node): string {
    let name = (<any>node).$slotName;

    if (name === undefined) {
      return this.defaultSlotName;
    }

    return name;
  },

  createSlot(target: Element, owner: IViewOwner, name?: string, destination?: string, fallbackFactory?: IVisualFactory) {
    let anchor = <any>DOM.createComment('slot');
    
    DOM.replaceNode(anchor, target);

    if (destination) {
      return new PassThroughSlot(owner, anchor, name || ShadowDOMEmulation.defaultSlotName, destination, fallbackFactory);
    } else {
      return new ShadowSlot(owner, anchor, name || ShadowDOMEmulation.defaultSlotName, fallbackFactory);
    }
  },

  distributeView(view: IView, slots: Record<string, IEmulatedShadowSlot>, projectionSource: ProjectionSource = null, index = 0, destinationOverride: string = null) {
    let nodes;

    if (view === null) {
      nodes = noNodes;
    } else {
      let childNodes = view.childNodes;
      let ii = childNodes.length;
      nodes = new Array(ii);

      for (let i = 0; i < ii; ++i) {
        nodes[i] = childNodes[i];
      }
    }

    this.distributeNodes(
      view,
      nodes,
      slots,
      projectionSource,
      index,
      destinationOverride
    );
  },

  undistributeView(view: IView, slots: Record<string, IEmulatedShadowSlot>, projectionSource: ProjectionSource) {
    for (let slotName in slots) {
      slots[slotName].removeView(view, projectionSource);
    }
  },

  undistributeAll(slots: Record<string, IEmulatedShadowSlot>, projectionSource: ProjectionSource) {
    for (let slotName in slots) {
      slots[slotName].removeAll(projectionSource);
    }
  },

  distributeNodes(view: IView, nodes: SlotNode[], slots: Record<string, IEmulatedShadowSlot>, projectionSource: ProjectionSource, index: number, destinationOverride: string = null) {
    for (let i = 0, ii = nodes.length; i < ii; ++i) {
      let currentNode = nodes[i];
      let nodeType = currentNode.nodeType;

      if (currentNode.$isContentProjectionSource) {
        currentNode.$slot.projectTo(slots);

        for (let slotName in slots) {
          slots[slotName].projectFrom(view, currentNode.$slot);
        }

        nodes.splice(i, 1);
        ii--; i--;
      } else if (nodeType === 1 || nodeType === 3 || currentNode.$slot instanceof PassThroughSlot) { //project only elements and text
        if (nodeType === 3 && DOM.isAllWhitespace(currentNode)) {
          nodes.splice(i, 1);
          ii--; i--;
        } else {
          let found = slots[destinationOverride || ShadowDOMEmulation.getSlotName(currentNode)];

          if (found) {
            found.addNode(view, currentNode, projectionSource, index);
            nodes.splice(i, 1);
            ii--; i--;
          }
        }
      } else {
        nodes.splice(i, 1);
        ii--; i--;
      }
    }

    for (let slotName in slots) {
      let slot = slots[slotName];

      if (slot.needsFallback) {
        slot.renderFallback(view, nodes, projectionSource, index);
      }
    }
  }
}
