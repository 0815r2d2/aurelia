import { expect } from "chai";
import { DI } from "../../../kernel/src/index";
import { CustomElementResource, DOM, Aurelia, BindingMode, ILifecycle } from "../../../runtime/src/index";
import { BasicConfiguration } from "../../src/index";

describe("generated.template-compiler.mutations.basic", function () {
    function setup() {
        const container = DI.createContainer();
        container.register(BasicConfiguration);
        const au = new Aurelia(container);
        const host = DOM.createElement("div");
        return { au, host };
    }
    it("works 1", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><foo></foo></template>" }, class {
        });
        const items = [];
        const Foo = CustomElementResource.define({ name: "foo", template: "<template><div repeat.for=\"item of items\">${item}</div></template>" }, class {
            items = items;
            el;
            $lifecycle;
            cycled = false;
            static inject = [Element];
            constructor(el) {
                this.el = el;
            }
            binding() {
                this.items.push(1);
            }
            bound() {
                this.items.push(2);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during bound() before mutation");
            }
            attaching() {
                this.items.push(3);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during attaching() before mutation before flushChanges()");
                this.$lifecycle.flush();
            }
            attached() {
                this.items.push(4);
                expect(this.el.textContent).to.equal(this.cycled ? "12345678123" : "123", "this.el.textContent during attached() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "123456781234" : "1234", "this.el.textContent during attached() after mutation after flushChanges()");
            }
            detaching() {
                this.items.push(5);
                expect(this.el.textContent).to.equal(this.cycled ? "123456781234" : "1234", "this.el.textContent during detaching() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "1234567812345" : "12345", "this.el.textContent during detaching() after mutation after flushChanges()");
            }
            detached() {
                this.items.push(6);
            }
            unbinding() {
                this.items.push(7);
            }
            unbound() {
                this.items.push(8);
                this.cycled = true;
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() after mutation after flushChanges()");
            }
        });
        au.register(Foo);
        const component = new App();
        au.app({ host, component });
        au.start();
        expect(host.textContent).to.equal("1234", "host.textContent after start #1");
        expect(items).to.deep.equal([1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #1");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
        au.start();
        expect(host.textContent).to.equal("123456781234", "host.textContent after start #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it("works 2", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><foo></foo></template>" }, class {
        });
        const items = [];
        const Foo = CustomElementResource.define({ name: "foo", template: "<template><div repeat.for=\"item of items\">${item}</div></template>" }, class {
            items = items;
            el;
            $lifecycle;
            cycled = false;
            static inject = [Element];
            constructor(el) {
                this.el = el;
            }
            binding() {
                this.items.push(1);
            }
            bound() {
                this.items.push(2);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during bound() before mutation");
            }
            attaching() {
                this.items.push(3);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during attaching() before mutation");
            }
            attached() {
                this.items.push(4);
                expect(this.el.textContent).to.equal(this.cycled ? "12345678123" : "123", "this.el.textContent during attached() before mutation");
            }
            detaching() {
                this.items.push(5);
                expect(this.el.textContent).to.equal(this.cycled ? "12345678123" : "123", "this.el.textContent during detaching() before mutation");
            }
            detached() {
                this.items.push(6);
            }
            unbinding() {
                this.items.push(7);
            }
            unbound() {
                this.items.push(8);
                this.cycled = true;
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() after mutation after flushChanges()");
            }
        });
        au.register(Foo);
        const component = new App();
        au.app({ host, component });
        au.start();
        expect(host.textContent).to.equal("123", "host.textContent after start #1");
        expect(items).to.deep.equal([1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #1");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
        au.start();
        expect(host.textContent).to.equal("12345678123", "host.textContent after start #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it("works 3", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><foo></foo></template>" }, class {
        });
        const items = [];
        const Foo = CustomElementResource.define({ name: "foo", template: "<template><div repeat.for=\"item of items\" if.bind=\"item % mod === 0\">${item}</div></template>" }, class {
            items = items;
            mod = 2;
            el;
            $lifecycle;
            cycled = false;
            static inject = [Element];
            constructor(el) {
                this.el = el;
            }
            binding() {
                this.items.push(1);
            }
            bound() {
                this.items.push(2);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during bound() before mutation");
            }
            attaching() {
                this.items.push(3);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during attaching() before mutation before flushChanges()");
                this.$lifecycle.flush();
            }
            attached() {
                this.items.push(4);
                expect(this.el.textContent).to.equal(this.cycled ? "363" : "2", "this.el.textContent during attached() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "363" : "24", "this.el.textContent during attached() after mutation after flushChanges()");
            }
            detaching() {
                this.items.push(5);
                expect(this.el.textContent).to.equal(this.cycled ? "363" : "24", "this.el.textContent during detaching() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "363" : "24", "this.el.textContent during detaching() after mutation after flushChanges()");
            }
            detached() {
                this.items.push(6);
            }
            unbinding() {
                this.items.push(7);
            }
            unbound() {
                this.items.push(8);
                this.cycled = true;
                this.mod = 3;
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() after mutation after flushChanges()");
            }
        });
        au.register(Foo);
        const component = new App();
        au.app({ host, component });
        au.start();
        expect(host.textContent).to.equal("24", "host.textContent after start #1");
        expect(items).to.deep.equal([1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #1");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
        au.start();
        expect(host.textContent).to.equal("363", "host.textContent after start #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it("works 4", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><foo></foo></template>" }, class {
        });
        const items = [];
        const Foo = CustomElementResource.define({ name: "foo", template: "<template><div repeat.for=\"item of items\" if.bind=\"item % mod === 0\">${item}</div></template>" }, class {
            items = items;
            mod = 2;
            el;
            $lifecycle;
            cycled = false;
            static inject = [Element];
            constructor(el) {
                this.el = el;
            }
            binding() {
                this.items.push(1);
            }
            bound() {
                this.items.push(2);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during bound() before mutation");
            }
            attaching() {
                this.items.push(3);
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during attaching() before mutation");
            }
            attached() {
                this.items.push(4);
                expect(this.el.textContent).to.equal(this.cycled ? "363" : "2", "this.el.textContent during attached() before mutation");
            }
            detaching() {
                this.items.push(5);
                expect(this.el.textContent).to.equal(this.cycled ? "363" : "2", "this.el.textContent during detaching() before mutation");
            }
            detached() {
                this.items.push(6);
            }
            unbinding() {
                this.items.push(7);
            }
            unbound() {
                this.items.push(8);
                this.cycled = true;
                this.mod = 3;
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() before mutation before flushChanges()");
                this.$lifecycle.flush();
                expect(this.el.textContent).to.equal(this.cycled ? "" : "", "this.el.textContent during unbound() after mutation after flushChanges()");
            }
        });
        au.register(Foo);
        const component = new App();
        au.app({ host, component });
        au.start();
        expect(host.textContent).to.equal("2", "host.textContent after start #1");
        expect(items).to.deep.equal([1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #1");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
        au.start();
        expect(host.textContent).to.equal("363", "host.textContent after start #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
        au.stop();
        expect(host.textContent).to.equal("", "host.textContent after stop #2");
        expect(items).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
