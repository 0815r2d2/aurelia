import * as PIXI from 'pixi.js';
import { INode, INodeSequence, IDocumentFragment, IRenderLocation, ICustomElement } from '@aurelia/runtime';

export interface IPixiNode extends INode, PIXI.DisplayObject {

}

export interface IPixiElement extends INode, PIXI.Container {
  
}

export interface IPixiNodeSequence extends INodeSequence {

}

export interface IPixiDocumentFragment extends IDocumentFragment {
  
}

export interface IPixiRenderLocation extends IRenderLocation {

}

export interface IPixiCustomElement extends ICustomElement {

}
