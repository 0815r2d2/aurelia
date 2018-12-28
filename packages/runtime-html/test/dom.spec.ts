import { spy } from 'sinon';
import { expect } from 'chai';
import { DOM, INode, FragmentNodeSequence, NodeSequenceFactory, NodeSequence } from '../../src/index';

function wrap(inner: string, tag: string): string {
  if (tag.length === 0) {
    return inner;
  }
  return `<${tag}>${inner}</${tag}>`;
}

function verifyThrows(call: Function): void {
  let err;
  try {
    call();
  } catch(e) {
    err = e;
  }
  expect(err instanceof Error).to.equal(true);
}

function verifyDoesNotThrow(call: Function): void {
  let err;
  try {
    call();
  } catch(e) {
    err = e;
  }
  expect(err).to.equal(undefined);
}

const dom = new DOM(<any>document);

describe('NodeSequenceFactory', () => {

  describe('createNodeSequenceFactory', () => {
    const textArr = ['', 'text', '#text'];
    const elementsArr = [[''], ['div'], ['div', 'p']];
    const wrapperArr = ['', 'div', 'template'];

    for (const text of textArr) {

      for (const elements of elementsArr) {
        let elementsMarkup = elements.map(e => wrap(text, e)).join('');

        for (const wrapper of wrapperArr) {
          const markup = wrap(elementsMarkup, wrapper);

          it(`should create a factory that returns the correct markup for "${markup}"`, () => {
            const factory = new NodeSequenceFactory(dom, markup);
            const view = factory.createNodeSequence();
            if (markup.length === 0) {
              expect(view).to.equal(NodeSequence.empty);
            } else {
              const fragment = <DocumentFragment>view['fragment'];
              let parsedMarkup = '';
              const childCount = fragment.childNodes.length;
              let i = 0;
              while (i < childCount) {
                const child = fragment.childNodes.item(i);
                if (child['outerHTML']) {
                  parsedMarkup += child['outerHTML'];
                } else {
                  parsedMarkup += child['textContent'];
                }
                i++;
              }
              expect(parsedMarkup).to.equal(markup);
            }
          });

          it(`should create a factory that always returns a view with a different fragment instance for "${markup}"`, () => {
            const factory = new NodeSequenceFactory(dom, markup);
            const fragment1 = factory.createNodeSequence()['fragment'];
            const fragment2 = factory.createNodeSequence()['fragment'];
            const fragment3 = factory.createNodeSequence()['fragment'];

            if (markup.length === 0) {
              if (!(fragment1 === undefined && fragment2 === undefined && fragment3 === undefined)) {
                throw new Error('Expected all fragments to be undefined');
              }
            } else {
              if (fragment1 === fragment2 || fragment1 === fragment3 || fragment2 === fragment3) {
                throw new Error('Expected all fragments to be different instances');
              }
            }
          });
        }
      }
    }

    const validInputArr: any[] = ['', 'asdf', 'div', 1, true, false, {}, new Error(), undefined, null, Symbol()];
    for (const validInput of validInputArr) {
      it(`should not throw for valid input type "${typeof validInput}"`, () => {
        verifyDoesNotThrow(() => new NodeSequenceFactory(dom, validInput));
      });
    }

    const invalidInputArr: any[] = [];
    for (const invalidInput of invalidInputArr) {
      it(`should throw for invalid input type "${typeof invalidInput}"`, () => {
        verifyThrows(() => new NodeSequenceFactory(dom, invalidInput));
      });
    }
  });
})

describe('dom', () => {
  // reset dom after each test to make sure self-optimizations do not affect test outcomes
  const DOMBackup = Object.create(null);
  // reset document after each test to clear any spies
  const DocumentBackup = Object.create(null);

  function restoreBackups(): void {
    Object.assign(dom, DOMBackup);
    Object.assign(document, DocumentBackup);
  }

  before(() => {
    Object.assign(DOMBackup, dom);
    for (const propName in document) {
      const prop = document[propName];
      if (typeof prop === 'function') {
        DocumentBackup[propName] = prop;
      }
    }
  });

  afterEach(() => {
    restoreBackups();
  });

  describe('createElement', () => {
    it('should call document.createElement', () => {
      const spyCreateElement = document.createElement = spy();
      dom.createElement('div');
      expect(spyCreateElement).to.have.been.calledWith('div');
    });

    it('should create an element', () => {
      const el = dom.createElement('div');
      expect(el['outerHTML']).to.equal('<div></div>');
    });

    const validInputArr: any[] = ['asdf', 'div', new Error(), true, false, undefined, null];
    for (const validInput of validInputArr) {
      it(`should not throw for valid input type "${typeof validInput}"`, () => {
        verifyDoesNotThrow(dom.createElement.bind(dom, validInput));
      });
    }

    const invalidInputArr: any[] = ['', 1, {}, Object.create(null), Symbol()];
    for (const invalidInput of invalidInputArr) {
      it(`should throw for invalid input type "${typeof invalidInput}"`, () => {
        verifyThrows(dom.createElement.bind(dom, invalidInput));
      });
    }
  });

  describe('createChildObserver (no slot emulation)', () => {
    it('should return a MutationObserver', () => {
      const cb = spy();
      const node = dom.createElement('div');
      const observer = dom.createNodeObserver(node, cb, { characterData: true });
      expect(observer instanceof MutationObserver).to.equal(true);
    });

    it('should observe changes to the childNodes', done => {
      const cb = spy();
      const node = dom.createElement('div');
      const child = dom.createElement('div');
      dom.createNodeObserver(node, cb, { childList: true });
      node.appendChild(child);
      Promise.resolve().then(() => {
        expect(cb).to.have.been.calledOnce;
        done();
      });
    });
  });

  // describe('platformSupportsShadowDOM', () => {
  //   let attachShadow;
  //   beforeEach(() => {
  //     attachShadow = HTMLElement.prototype.attachShadow;
  //   });
  //   afterEach(() => {
  //     HTMLElement.prototype.attachShadow = attachShadow;
  //   });

  //   it('should return true if ShadowDOM is available', () => {
  //     HTMLElement.prototype.attachShadow = <any>function(){};
  //     expect(dom.platformSupportsShadowDOM()).to.equal(true);
  //   });

  //   it('should return false if ShadowDOM is NOT available', () => {
  //     HTMLElement.prototype.attachShadow = undefined;
  //     expect(dom.platformSupportsShadowDOM()).to.equal(false);
  //   });
  // });

  // describe('createElementViewHost (with NO ShadowDOM)', () => {
  //   let attachShadow;
  //   beforeEach(() => {
  //     attachShadow = HTMLElement.prototype.attachShadow;
  //     HTMLElement.prototype.attachShadow = undefined;
  //   });

  //   afterEach(() => {
  //     HTMLElement.prototype.attachShadow = attachShadow;
  //   });

  //   it('should enable SlotEmulation when no options provided', () => {
  //     const node = dom.createElement('div');
  //     const actual: any = dom.createElementViewHost(node);
  //     expect(actual.$usingSlotEmulation).to.equal(true);
  //   });

  //   it('should enable SlotEmulation when options are provided', () => {
  //     const node = dom.createElement('div');
  //     const actual: any = dom.createElementViewHost(node, <any>{});
  //     expect(actual.$usingSlotEmulation).to.equal(true);
  //   });
  // });

  // describe('createElementViewHost (with ShadowDOM)', () => {
  //   let attachShadow;
  //   beforeEach(() => {
  //     attachShadow = HTMLElement.prototype.attachShadow;
  //     HTMLElement.prototype.attachShadow = spy(node => node);
  //   });

  //   afterEach(() => {
  //     HTMLElement.prototype.attachShadow = attachShadow;
  //   });

  //   it('should enable SlotEmulation when no options provided', () => {
  //     const node = dom.createElement('div');
  //     const actual: any = dom.createElementViewHost(node);
  //     expect(actual.$usingSlotEmulation).to.equal(true);
  //   });

  //   it('should NOT attachShadow when no options provided', () => {
  //     const node = dom.createElement('div');
  //     dom.createElementViewHost(node);
  //     expect(HTMLElement.prototype.attachShadow).not.to.have.been.called;
  //   });

  //   it('should NOT enable SlotEmulation when options are provided', () => {
  //     const node = dom.createElement('div');
  //     const actual: any = dom.createElementViewHost(node, <any>{});
  //     expect(actual.$usingSlotEmulation).to.equal(undefined);
  //   });

  //   it('should attachShadow when options are provided', () => {
  //     const node = dom.createElement('div');
  //     dom.createElementViewHost(node, <any>{});
  //     expect(HTMLElement.prototype.attachShadow).to.have.been.calledOnce;
  //   });
  // });

  describe('cloneNode', () => {
    const trueValueArr: any[] = [undefined, null, {}, '', true];
    for (const trueValue of trueValueArr) {
      it(`should call node.cloneNode(true) when given ${trueValue}`, () => {
        const node = dom.createElement('div');
        node.cloneNode = spy();
        dom.cloneNode(node, trueValue);
        expect(node.cloneNode).to.have.been.calledWith(true);
      });
    }

    it('should call node.cloneNode(true) by default', () => {
      const node = dom.createElement('div');
      node.cloneNode = spy();
      dom.cloneNode(node);
      expect(node.cloneNode).to.have.been.calledWith(true);
    });

    it('should call node.cloneNode(false) if given false', () => {
      const node = dom.createElement('div');
      node.cloneNode = spy();
      dom.cloneNode(node, false);
      expect(node.cloneNode).to.have.been.calledWith(false);
    });
  });

  // describe('getCustomElementForNode', () => {
  //   it(`should return node.$component if it is a non-null object`, () => {
  //     const node: any = dom.createElement('div');
  //     const expected = node.$component = {};
  //     const actual = dom.getCustomElementForNode(node);
  //     expect(actual === expected).to.equal(true);
  //   });

  //   it(`should return null if node.$component is null`, () => {
  //     const node: any = dom.createElement('div');
  //     node.$component = null;
  //     const actual = dom.getCustomElementForNode(node);
  //     expect(actual).to.equal(null);
  //   });

  //   it(`should return null if node.$component is undefined`, () => {
  //     const node: any = dom.createElement('div');
  //     node.$component = undefined;
  //     const actual = dom.getCustomElementForNode(node);
  //     expect(actual).to.equal(null);
  //   });
  // });

  // describe('isUsingSlotEmulation', () => {
  //   it('should return true if node.$usingSlotEmulation is true', () => {
  //     const node: any = dom.createElement('div');
  //     node.$usingSlotEmulation = true;
  //     const actual = dom.isUsingSlotEmulation(node);
  //     expect(actual).to.equal(true);
  //   });

  //   it('should return false if node.$usingSlotEmulation is false', () => {
  //     const node: any = dom.createElement('div');
  //     node.$usingSlotEmulation = false;
  //     const actual = dom.isUsingSlotEmulation(node);
  //     expect(actual).to.equal(false);
  //   });

  //   it('should return false if node.$usingSlotEmulation is unset', () => {
  //     const node: any = dom.createElement('div');
  //     const actual = dom.isUsingSlotEmulation(node);
  //     expect(actual).to.equal(false);
  //   });
  // });

  describe('isNodeInstance', () => {
    const nodes = [
      document.createAttribute('asdf'),
      dom.createElement('div'),
      dom.createElement('asdf'),
      document.createComment('asdf'),
      document.createTextNode('asdf'),
      document.createDocumentFragment(),
      document,
      document.doctype
    ];
    for (const node of nodes) {
      it(`should return true if the value is of type ${Object.prototype.toString.call(node)}`, () => {
        const actual = dom.isNodeInstance(node);
        expect(actual).to.equal(true);
      });
    }

    const nonNodes = [
      document.createEvent('MouseEvent'),
      {}
    ];
    for (const nonNode of nonNodes) {
      it(`should return false if the value is of type ${Object.prototype.toString.call(nonNode)}`, () => {
        const actual = dom.isNodeInstance(nonNode);
        expect(actual).to.equal(false);
      });
    }
  });

  // describe('isElementNodeType', () => {
  //   const nodes = [
  //     dom.createElement('div'),
  //     dom.createElement('asdf')
  //   ];
  //   for (const node of nodes) {
  //     it(`should return true if the value is of type ${Object.prototype.toString.call(node)}`, () => {
  //       const actual = dom.isElementNodeType(node);
  //       expect(actual).to.equal(true);
  //     });
  //   }

  //   const nonNodes = [
  //     document.createAttribute('asdf'),
  //     document.createComment('asdf'),
  //     document.createTextNode('asdf'),
  //     document.createDocumentFragment(),
  //     document,
  //     document.doctype
  //   ];
  //   for (const nonNode of nonNodes) {
  //     it(`should return false if the value is of type ${Object.prototype.toString.call(nonNode)}`, () => {
  //       const actual = dom.isElementNodeType(nonNode);
  //       expect(actual).to.equal(false);
  //     });
  //   }
  // });

  // describe('isTextNodeType', () => {
  //   const nodes = [
  //     document.createTextNode('asdf')
  //   ];
  //   for (const node of nodes) {
  //     it(`should return true if the value is of type ${Object.prototype.toString.call(node)}`, () => {
  //       const actual = dom.isTextNodeType(node);
  //       expect(actual).to.equal(true);
  //     });
  //   }

  //   const nonNodes = [
  //     document.createAttribute('asdf'),
  //     document.createComment('asdf'),
  //     dom.createElement('div'),
  //     dom.createElement('asdf'),
  //     document.createDocumentFragment(),
  //     document,
  //     document.doctype
  //   ];
  //   for (const nonNode of nonNodes) {
  //     it(`should return false if the value is of type ${Object.prototype.toString.call(nonNode)}`, () => {
  //       const actual = dom.isTextNodeType(nonNode);
  //       expect(actual).to.equal(false);
  //     });
  //   }
  // });

  describe('remove', () => {
    it('should remove the childNode from its parent (non-polyfilled)', () => {
      const node = dom.createElement('div');
      const childNode = dom.createElement('div');
      node.appendChild(childNode);
      dom.remove(childNode);
      expect(node.childNodes.length).to.equal(0);
    });

    it('should remove the childNode from its parent (polyfilled)', () => {
      const remove = Element.prototype.remove;
      Element.prototype.remove = undefined;
      const node = dom.createElement('div');
      const childNode = dom.createElement('div');
      node.appendChild(childNode);
      dom.remove(childNode);
      expect(node.childNodes.length).to.equal(0);
      Element.prototype.remove = remove;
    });
  });

  describe('replaceNode', () => {
    it('should replace the childNode with another childNode', () => {
      const node = dom.createElement('div');
      const childNodeOld = dom.createElement('div');
      const childNodeNew = dom.createElement('div');
      node.appendChild(childNodeOld);
      dom.replaceNode(childNodeNew, childNodeOld);
      expect(node.firstChild === childNodeNew).to.equal(true);
    });
  });

  describe('appendChild', () => {
    it('should append the childNode to the given parent', () => {
      const node = dom.createElement('div');
      const childNode = dom.createElement('div');
      dom.appendChild(node, childNode);
      expect(node.firstChild === childNode).to.equal(true);
    });
  });

  describe('insertBefore', () => {
    it('should insert the childNode before the referenceNode below the parent of the referenceNode', () => {
      const node = dom.createElement('div');
      const childNode = dom.createElement('div');
      const refNode1 = dom.createElement('div');
      const refNode2 = dom.createElement('div');
      node.appendChild(refNode1);
      node.appendChild(refNode2);
      dom.insertBefore(childNode, refNode2);
      expect(node.childNodes.item(0) === refNode1).to.equal(true);
      expect(node.childNodes.item(1) === childNode).to.equal(true);
      expect(node.childNodes.item(2) === refNode2).to.equal(true);
    });
  });

  describe('getAttribute', () => {
    it('should return the specified attribute', () => {
      const node = dom.createElement('div');
      node.setAttribute('foo', 'bar');
      const actual = dom.getAttribute(node, 'foo');
      expect(actual).to.equal('bar');
    });
  });

  describe('setAttribute', () => {
    it('should set the specified attribute to the specified value', () => {
      const node = dom.createElement('div');
      dom.setAttribute(node, 'foo', 'bar');
      const actual = dom.getAttribute(node, 'foo');
      expect(actual).to.equal('bar');
    });
  });

  describe('removeAttribute', () => {
    it('should remove the specified attribute', () => {
      const node = dom.createElement('div');
      node.setAttribute('foo', 'bar');
      dom.removeAttribute(node, 'foo');
      const actual = dom.getAttribute(node, 'foo');
      expect(actual).to.equal(null);
    });
  });

  describe('hasClass', () => {
    it('should return true if the node has the specified class', () => {
      const node = dom.createElement('div');
      node.classList.add('foo');
      const actual = dom.hasClass(node, 'foo');
      expect(actual).to.equal(true);
    });

    it('should return false if the node does NOT have the specified class', () => {
      const node = dom.createElement('div');
      node.classList.add('foo');
      const actual = dom.hasClass(node, 'bar');
      expect(actual).to.equal(false);
    });
  });

  describe('addClass', () => {
    it('should add the specified class', () => {
      const node = dom.createElement('div');
      dom.addClass(node, 'foo');
      const actual = node.classList.item(0);
      expect(actual).to.equal('foo');
    });
  });

  describe('removeClass', () => {
    it('should remove the specified class', () => {
      const node = dom.createElement('div');
      node.classList.add('foo');
      dom.removeClass(node, 'foo');
      const actual = node.classList.item(0);
      expect(actual).to.equal(null);
    });
  });

  describe('addEventListener', () => {
    it('should add the specified eventListener to the node if the node is specified', done => {
      const node = dom.createElement('div');
      const eventListener = spy();
      dom.addEventListener('click', eventListener, node);
      node.dispatchEvent(new CustomEvent('click', { bubbles: true }));
      setTimeout(() => {
        expect(eventListener).to.have.been.calledOnce;
        done();
      }, 0);
    });

    it('should add the specified eventListener to the document if the node is NOT specified', done => {
      const eventListener = spy();
      dom.addEventListener('click', eventListener);
      document.dispatchEvent(new CustomEvent('click', { bubbles: true }));
      setTimeout(() => {
        expect(eventListener).to.have.been.calledOnce;
        done();
      }, 0);
    });
  });

  describe('removeEventListener', () => {
    it('should remove the specified eventListener from the node if the node is specified', done => {
      const node = dom.createElement('div');
      const eventListener = spy();
      node.addEventListener('click', eventListener);
      dom.removeEventListener('click', eventListener, node);
      node.dispatchEvent(new CustomEvent('click', { bubbles: true }));
      setTimeout(() => {
        expect(eventListener).not.to.have.been.called;
        done();
      }, 0);
    });

    it('should remove the specified eventListener from the document if the node is NOT specified', done => {
      const eventListener = spy();
      document.addEventListener('click', eventListener);
      dom.removeEventListener('click', eventListener);
      document.dispatchEvent(new CustomEvent('click', { bubbles: true }));
      setTimeout(() => {
        expect(eventListener).not.to.have.been.called;
        done();
      }, 0);
    });
  });

  // describe('isAllWhitespace', () => {
  //   const whitespaceArr = ['', ' ', '\n', '\t', '\r'];
  //   for (const whitespace of whitespaceArr) {
  //     it('should return true if the textNode contains all whitespace', () => {
  //       const node = document.createTextNode(whitespace);
  //       const actual = dom.isAllWhitespace(node);
  //       expect(actual).to.equal(true);
  //     });

  //     it('should return false if the textNode contains all whitespace but is set to treatAsNonWhitespace', () => {
  //       const node = document.createTextNode(whitespace);
  //       dom.treatAsNonWhitespace(node);
  //       const actual = dom.isAllWhitespace(node);
  //       expect(actual).to.equal(false);
  //     });

  //     it('should return false if the textNode contains any non-whitespace', () => {
  //       const node = document.createTextNode(whitespace + 'foo');
  //       const actual = dom.isAllWhitespace(node);
  //       expect(actual).to.equal(false);
  //     });
  //   }
  // });

  describe('convertToRenderLocation', () => {
    function createTestNodes() {
      const node = dom.createElement('div');
      const childNode = dom.createElement('div');
      node.appendChild(childNode);
      return {node, childNode};
    }

    it('should replace the provided node with two comment nodes', () => {
      const {node, childNode} = createTestNodes();
      const location = dom.convertToRenderLocation(childNode);
      expect(location instanceof Comment).to.equal(true);
      expect(location.$start instanceof Comment).to.equal(true);
      expect(childNode === location).to.equal(false);
      expect(node.childNodes.length).to.equal(2);
      expect(node.firstChild === location).to.equal(false);
      expect(node.firstChild === location.$start).to.equal(true);
      expect(node.lastChild === location).to.equal(true);
    });
  });

  describe('registerElementResolver', () => {
    const keys = [INode, Element, HTMLElement, SVGElement];
    for (const key of keys) {
      it(`should register the resolver for type ${Object.prototype.toString.call(key)}`, () => {
        const mockContainer: any = { registerResolver: spy() };
        const resolver: any = {};
        dom.registerElementResolver(mockContainer, resolver);
        expect(mockContainer.registerResolver).to.have.been.calledWith(key, resolver);
      });
    }
  });
});

describe('FragmentNodeSequence', () => {
  let sut: FragmentNodeSequence;

  // describe('appendChild', () => {
  //   it('should add the child to the view', () => {
  //     const fragment = document.createDocumentFragment();
  //     sut = new TemplateView(fragment);
  //     const child = dom.createElement('div');
  //     sut.appendChild(child);
  //     expect(fragment.firstChild === child).to.equal(true);
  //   });
  // });

  const widthArr = [1, 2, 3];
  describe('constructor', () => {
    for (const width of widthArr) {
      it(`should correctly assign children (depth=1,width=${width})`, () => {
        const node = dom.createElement('div');
        const fragment = createFragment(node, 0, 1, width);
        sut = new FragmentNodeSequence(dom, fragment);
        expect(sut.childNodes.length).to.equal(width);
        expect(sut.childNodes[0] === sut.firstChild).to.equal(true);
        expect(sut.childNodes[width - 1] === sut.lastChild).to.equal(true);
      });
    }
  });
  const depthArr = [0, 1, 2, 3];
  describe('findTargets', () => {
    for (const width of widthArr) {
      for (const depth of depthArr) {
        // note: these findTargets tests are quite redundant, but the basic setup might come in handy later
        it(`should return empty array when there are no targets (depth=${depth},width=${width})`, () => {
          const node = dom.createElement('div');
          const fragment = createFragment(node, 0, depth, width);
          sut = new FragmentNodeSequence(dom, fragment);
          const actual = sut.findTargets();
          expect(actual.length).to.equal(0);
        });

        it(`should return all elements when all are targets targets (depth=${depth},width=${width})`, () => {
          const node = dom.createElement('div');
          node.classList.add('au');
          const fragment = createFragment(node, 0, depth, width);
          sut = new FragmentNodeSequence(dom, fragment);
          const actual = sut.findTargets();
          expect(actual.length).to.equal(fragment.querySelectorAll('div').length);
        });
      }
    }
  });

  describe('insertBefore', () => {
    for (const width of widthArr) {
      for (const depth of depthArr.filter(d => d > 0)) {
        it(`should insert the view before the refNode under the parent of the refNode (depth=${depth},width=${width})`, () => {
          const node = dom.createElement('div');
          const fragment = createFragment(node, 0, depth, width);
          sut = new FragmentNodeSequence(dom, fragment);
          const parent = dom.createElement('div');
          const ref1 = dom.createElement('div');
          const ref2 = dom.createElement('div');
          parent.appendChild(ref1);
          parent.appendChild(ref2);
          sut.insertBefore(ref2);
          expect(parent.childNodes.length).to.equal(width + 2);
          expect(fragment.childNodes.length).to.equal(0);
          expect(parent.childNodes.item(0) === ref1).to.equal(true);
          let i = 0;
          while (i < width) {
            expect(parent.childNodes.item(i + 1) === sut.childNodes[i]).to.equal(true);
            i++;
          }
          expect(parent.childNodes.item(width + 1) === ref2).to.equal(true);
          expect(fragment.childNodes.length).to.equal(0);
        });
      }
    }
  });

  describe('appendTo', () => {
    for (const width of widthArr) {
      for (const depth of depthArr.filter(d => d > 0)) {
        it(`should append the view to the parent (depth=${depth},width=${width})`, () => {
          const node = dom.createElement('div');
          const fragment = createFragment(node, 0, depth, width);
          sut = new FragmentNodeSequence(dom, fragment);
          const parent = dom.createElement('div');
          sut.appendTo(parent);
          expect(parent.childNodes.length).to.equal(width);
          expect(fragment.childNodes.length).to.equal(0);
          let i = 0;
          while (i < width) {
            expect(parent.childNodes.item(i) === sut.childNodes[i]).to.equal(true);
            i++;
          }
        });
      }
    }
  });

  describe('remove', () => {
    for (const width of widthArr) {
      for (const depth of depthArr.filter(d => d > 0)) {
        it(`should put the view back into the fragment (depth=${depth},width=${width})`, () => {
          const node = dom.createElement('div');
          const fragment = createFragment(node, 0, depth, width);
          sut = new FragmentNodeSequence(dom, fragment);
          const parent = dom.createElement('div');
          expect(parent.childNodes.length).to.equal(0);
          expect(fragment.childNodes.length).to.equal(width);
          parent.appendChild(fragment);
          expect(parent.childNodes.length).to.equal(width);
          expect(fragment.childNodes.length).to.equal(0);
          sut.remove();
          expect(parent.childNodes.length).to.equal(0);
          expect(fragment.childNodes.length).to.equal(width);
        });
      }
    }
  });
});

function createFragment(node: HTMLElement, level: number, depth: number, width: number): DocumentFragment {
  const root: any = document.createDocumentFragment();
  appendTree(root, node, level, depth, width);
  return root;
}

function appendTree(root: HTMLElement, node: HTMLElement, level: number, depth: number, width: number): void {
  if (level < depth) {
    const children = appendChildren(root, node, width);
    for (const child of children) {
      appendTree(child, node, level + 1, depth, width);
    }
  }
}

function appendChildren(parent: HTMLElement, child: HTMLElement, count: number): Array<HTMLElement> {
  const children = new Array(count);
  let i = 0;
  while (i < count) {
    const el = child.cloneNode(true);
    parent.appendChild(el);
    children[i] = el;
    i++;
  }
  return children;
}
