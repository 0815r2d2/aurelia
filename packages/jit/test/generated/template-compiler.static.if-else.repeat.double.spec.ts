import { expect } from "chai";
import { DI } from "../../../kernel/src/index";
import { CustomElementResource, DOM, Aurelia, BindingMode } from "../../../runtime/src/index";
import { BasicConfiguration } from "../../src/index";

describe("generated.template-compiler.static.if-else.repeat.double", function () {
    function setup() {
        const container = DI.createContainer();
        container.register(BasicConfiguration);
        const au = new Aurelia(container);
        const host = DOM.createElement("div");
        return { au, host };
    }
    function verify(au, host, expected) {
        au.start();
        const outerHtmlAfterStart1 = host.outerHTML;
        expect(host.textContent).to.equal(expected, "after start #1");
        au.stop();
        const outerHtmlAfterStop1 = host.outerHTML;
        expect(host.textContent).to.equal("", "after stop #1");
        au.start();
        const outerHtmlAfterStart2 = host.outerHTML;
        expect(host.textContent).to.equal(expected, "after start #2");
        au.stop();
        const outerHtmlAfterStop2 = host.outerHTML;
        expect(host.textContent).to.equal("", "after stop #2");
        expect(outerHtmlAfterStart1).to.equal(outerHtmlAfterStart2, "outerHTML after start #1 / #2");
        expect(outerHtmlAfterStop1).to.equal(outerHtmlAfterStop2, "outerHTML after stop #1 / #2");
    }
    it("tag$01 text$01 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"true\">a</div><div else if.bind=\"true\">b</div><div if.bind=\"true\"></div><div else>b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$01 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">b</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$01 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">a</div><div else if.bind=\"true\" repeat.for=\"i of 1\">b</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$01 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">a</div><div else repeat.for=\"i of 1\" if.bind=\"true\">b</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$01 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$01 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else><div repeat.for=\"i of 1\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$01 text$01 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"true\">a</div><div else if.bind=\"true\">b</div><div if.bind=\"true\"></div><div else>b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$01 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">b</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$01 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">a</div><div else if.bind=\"true\" repeat.for=\"i of 3\">b</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$01 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">a</div><div else repeat.for=\"i of 3\" if.bind=\"true\">b</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$01 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$01 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else><div repeat.for=\"i of 3\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"false\">a</div><div else if.bind=\"false\">b</div><div if.bind=\"false\"></div><div else>b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 1\">b</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 1\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">a</div><div else if.bind=\"false\" repeat.for=\"i of 1\">b</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">a</div><div else repeat.for=\"i of 1\" if.bind=\"false\">b</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 1\">b</div></div><div if.bind=\"false\" else>b</div><div else><div repeat.for=\"i of 1\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 1\">b</div></div><div if.bind=\"false\" else>b</div><div else></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else></div><div if.bind=\"false\" else>b</div><div else><div repeat.for=\"i of 1\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else repeat.for=\"i of 1\" if.bind=\"false\">b</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 1\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else if.bind=\"false\" repeat.for=\"i of 1\">b</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 1\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"false\">a</div><div else if.bind=\"false\">b</div><div if.bind=\"false\"></div><div else>b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 3\">b</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 3\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">a</div><div else if.bind=\"false\" repeat.for=\"i of 3\">b</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">a</div><div else repeat.for=\"i of 3\" if.bind=\"false\">b</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 3\">b</div></div><div if.bind=\"false\" else>b</div><div else><div repeat.for=\"i of 3\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 3\">b</div></div><div if.bind=\"false\" else>b</div><div else></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else></div><div if.bind=\"false\" else>b</div><div else><div repeat.for=\"i of 3\">b</div></div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else repeat.for=\"i of 3\" if.bind=\"false\">b</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 3\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$01 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else if.bind=\"false\" repeat.for=\"i of 3\">b</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 3\">b</div></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"true\">a</div><div else if.bind=\"true\">${not}</div><div if.bind=\"true\"></div><div else>${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$02 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$02 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">a</div><div else if.bind=\"true\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$02 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">a</div><div else repeat.for=\"i of 1\" if.bind=\"true\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$02 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$02 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div if.bind=\"true\"><div repeat.for=\"i of 1\">a</div></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$01 text$02 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"true\">a</div><div else if.bind=\"true\">${not}</div><div if.bind=\"true\"></div><div else>${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$02 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$02 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">a</div><div else if.bind=\"true\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$02 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">a</div><div else repeat.for=\"i of 3\" if.bind=\"true\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$02 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$02 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div if.bind=\"true\"><div repeat.for=\"i of 3\">a</div></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"false\">a</div><div else if.bind=\"false\">${not}</div><div if.bind=\"false\"></div><div else>${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 1\">a</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">a</div><div else if.bind=\"false\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">a</div><div else repeat.for=\"i of 1\" if.bind=\"false\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else repeat.for=\"i of 1\" if.bind=\"false\">${not}</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else if.bind=\"false\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"false\">a</div><div else if.bind=\"false\">${not}</div><div if.bind=\"false\"></div><div else>${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 3\">a</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">a</div><div else if.bind=\"false\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">a</div><div else repeat.for=\"i of 3\" if.bind=\"false\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else repeat.for=\"i of 3\" if.bind=\"false\">${not}</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$02 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">a</div><div else if.bind=\"false\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"false\">a</div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"true\">${msg}</div><div else if.bind=\"true\">${not}</div><div if.bind=\"true\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$03 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$03 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">${msg}</div><div else if.bind=\"true\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$03 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">${msg}</div><div else repeat.for=\"i of 1\" if.bind=\"true\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$03 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$03 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$01 text$03 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"true\">${msg}</div><div else if.bind=\"true\">${not}</div><div if.bind=\"true\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$03 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$03 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">${msg}</div><div else if.bind=\"true\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$03 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">${msg}</div><div else repeat.for=\"i of 3\" if.bind=\"true\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$03 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$03 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$01 text$03 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"item of ['a', 'b', 'c']\"><div if.bind=\"true\">${item}</div><div else if.bind=\"true\">${item}</div><div if.bind=\"true\"></div><div else>${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\">${item}</div><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\">${not}</div><div if.bind=\"false\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">${msg}</div><div else repeat.for=\"i of 1\" if.bind=\"false\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 1\" if.bind=\"false\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\">${not}</div><div if.bind=\"false\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">${msg}</div><div else repeat.for=\"i of 3\" if.bind=\"false\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 3\" if.bind=\"false\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"item of ['a', 'b', 'c']\"><div if.bind=\"false\">${item}</div><div else if.bind=\"false\">${item}</div><div if.bind=\"false\"></div><div else>${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"false\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</div><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"false\" else>${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"false\" else>${item}</div><div else></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else></div><div if.bind=\"false\" else>${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</div><div if.bind=\"false\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$03 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div if.bind=\"false\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"true\">${msg}</div><div else if.bind=\"true\">${not}</div><div if.bind=\"true\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$04 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$04 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">${msg}</div><div else if.bind=\"true\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$04 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 1\">${msg}</div><div else repeat.for=\"i of 1\" if.bind=\"true\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$04 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$01 text$04 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div if.bind=\"true\"><div repeat.for=\"i of 1\">${msg}</div></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$01 text$04 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"true\">${msg}</div><div else if.bind=\"true\">${not}</div><div if.bind=\"true\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$04 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$04 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">${msg}</div><div else if.bind=\"true\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$04 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"i of 3\">${msg}</div><div else repeat.for=\"i of 3\" if.bind=\"true\">${not}</div><div if.bind=\"true\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$04 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$01 text$04 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div if.bind=\"true\"><div repeat.for=\"i of 3\">${msg}</div></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$01 text$04 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"item of ['a', 'b', 'c']\"><div if.bind=\"true\">${item}</div><div else if.bind=\"true\">${item}</div><div if.bind=\"true\"></div><div else>${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\">${item}</div><div if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"true\"></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"true\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 1\"><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\">${not}</div><div if.bind=\"false\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 1\">${msg}</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 1\">${msg}</div><div else repeat.for=\"i of 1\" if.bind=\"false\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 1\"></div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 1\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 1\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 1\" if.bind=\"false\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 1\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 1\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"i of 3\"><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\">${not}</div><div if.bind=\"false\"></div><div else>${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"i of 3\">${msg}</div></div><div else if.bind=\"false\"><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"i of 3\">${msg}</div><div else repeat.for=\"i of 3\" if.bind=\"false\">${not}</div><div if.bind=\"false\" repeat.for=\"i of 3\"></div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else><div repeat.for=\"i of 3\">${not}</div></div><div if.bind=\"false\" else>${not}</div><div else></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else></div><div if.bind=\"false\" else>${not}</div><div else><div repeat.for=\"i of 3\">${not}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 3\" if.bind=\"false\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${msg}</div><div else if.bind=\"false\" repeat.for=\"i of 3\">${not}</div><div if.bind=\"false\">${msg}</div><div else repeat.for=\"i of 3\">${not}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div repeat.for=\"item of ['a', 'b', 'c']\"><div if.bind=\"false\">${item}</div><div else if.bind=\"false\">${item}</div><div if.bind=\"false\"></div><div else>${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div else if.bind=\"false\"><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"false\"></div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</div><div if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"false\" else>${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div><div if.bind=\"false\" else>${item}</div><div else></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else></div><div if.bind=\"false\" else>${item}</div><div else><div repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</div><div if.bind=\"false\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$01 text$04 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><div if.bind=\"false\">${item}</div><div else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</div><div if.bind=\"false\">${item}</div><div else repeat.for=\"item of ['a', 'b', 'c']\">${item}</div></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$01 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\">a</template><template else if.bind=\"true\">b</template><template if.bind=\"true\"></template><template else>b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$01 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">b</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$01 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">a</template><template else if.bind=\"true\" repeat.for=\"i of 1\">b</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$01 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">a</template><template else repeat.for=\"i of 1\" if.bind=\"true\">b</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$01 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$01 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else><template repeat.for=\"i of 1\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$02 text$01 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\">a</template><template else if.bind=\"true\">b</template><template if.bind=\"true\"></template><template else>b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$01 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">b</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$01 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">a</template><template else if.bind=\"true\" repeat.for=\"i of 3\">b</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$01 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">a</template><template else repeat.for=\"i of 3\" if.bind=\"true\">b</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$01 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$01 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else><template repeat.for=\"i of 3\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\">a</template><template else if.bind=\"false\">b</template><template if.bind=\"false\"></template><template else>b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\">b</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">a</template><template else if.bind=\"false\" repeat.for=\"i of 1\">b</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">a</template><template else repeat.for=\"i of 1\" if.bind=\"false\">b</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 1\">b</template></template><template if.bind=\"false\" else>b</template><template else><template repeat.for=\"i of 1\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 1\">b</template></template><template if.bind=\"false\" else>b</template><template else></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else></template><template if.bind=\"false\" else>b</template><template else><template repeat.for=\"i of 1\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 1\" if.bind=\"false\">b</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 1\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else if.bind=\"false\" repeat.for=\"i of 1\">b</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 1\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\">a</template><template else if.bind=\"false\">b</template><template if.bind=\"false\"></template><template else>b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\">b</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">a</template><template else if.bind=\"false\" repeat.for=\"i of 3\">b</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">a</template><template else repeat.for=\"i of 3\" if.bind=\"false\">b</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 3\">b</template></template><template if.bind=\"false\" else>b</template><template else><template repeat.for=\"i of 3\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 3\">b</template></template><template if.bind=\"false\" else>b</template><template else></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else></template><template if.bind=\"false\" else>b</template><template else><template repeat.for=\"i of 3\">b</template></template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 3\" if.bind=\"false\">b</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 3\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$01 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else if.bind=\"false\" repeat.for=\"i of 3\">b</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 3\">b</template></template>" }, class {
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\">a</template><template else if.bind=\"true\">${not}</template><template if.bind=\"true\"></template><template else>${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$02 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$02 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">a</template><template else if.bind=\"true\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$02 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">a</template><template else repeat.for=\"i of 1\" if.bind=\"true\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$02 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$02 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\">a</template></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$02 text$02 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\">a</template><template else if.bind=\"true\">${not}</template><template if.bind=\"true\"></template><template else>${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$02 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$02 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">a</template><template else if.bind=\"true\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$02 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">a</template><template else repeat.for=\"i of 3\" if.bind=\"true\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$02 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$02 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\">a</template></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\">a</template><template else if.bind=\"false\">${not}</template><template if.bind=\"false\"></template><template else>${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\">a</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">a</template><template else if.bind=\"false\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">a</template><template else repeat.for=\"i of 1\" if.bind=\"false\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 1\" if.bind=\"false\">${not}</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else if.bind=\"false\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\">a</template><template else if.bind=\"false\">${not}</template><template if.bind=\"false\"></template><template else>${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\">a</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">a</template><template else if.bind=\"false\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">a</template><template else repeat.for=\"i of 3\" if.bind=\"false\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 3\" if.bind=\"false\">${not}</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$02 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">a</template><template else if.bind=\"false\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"false\">a</template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\">${msg}</template><template else if.bind=\"true\">${not}</template><template if.bind=\"true\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$03 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$03 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">${msg}</template><template else if.bind=\"true\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$03 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">${msg}</template><template else repeat.for=\"i of 1\" if.bind=\"true\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$03 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$03 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$02 text$03 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\">${msg}</template><template else if.bind=\"true\">${not}</template><template if.bind=\"true\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$03 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$03 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">${msg}</template><template else if.bind=\"true\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$03 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">${msg}</template><template else repeat.for=\"i of 3\" if.bind=\"true\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$03 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$03 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$02 text$03 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\">${item}</template><template else if.bind=\"true\">${item}</template><template if.bind=\"true\"></template><template else>${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\">${item}</template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\">${not}</template><template if.bind=\"false\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">${msg}</template><template else repeat.for=\"i of 1\" if.bind=\"false\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 1\" if.bind=\"false\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\">${not}</template><template if.bind=\"false\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">${msg}</template><template else repeat.for=\"i of 3\" if.bind=\"false\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 3\" if.bind=\"false\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\">${item}</template><template else if.bind=\"false\">${item}</template><template if.bind=\"false\"></template><template else>${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"false\" else>${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"false\" else>${item}</template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else></template><template if.bind=\"false\" else>${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</template><template if.bind=\"false\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$03 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template if.bind=\"false\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\">${msg}</template><template else if.bind=\"true\">${not}</template><template if.bind=\"true\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$04 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$04 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">${msg}</template><template else if.bind=\"true\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$04 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\">${msg}</template><template else repeat.for=\"i of 1\" if.bind=\"true\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$04 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$02 text$04 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\">${msg}</template></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$02 text$04 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\">${msg}</template><template else if.bind=\"true\">${not}</template><template if.bind=\"true\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$04 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$04 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">${msg}</template><template else if.bind=\"true\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$04 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\">${msg}</template><template else repeat.for=\"i of 3\" if.bind=\"true\">${not}</template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$04 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$02 text$04 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\">${msg}</template></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$02 text$04 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\">${item}</template><template else if.bind=\"true\">${item}</template><template if.bind=\"true\"></template><template else>${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\">${item}</template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\">${not}</template><template if.bind=\"false\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\">${msg}</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\">${msg}</template><template else repeat.for=\"i of 1\" if.bind=\"false\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 1\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 1\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 1\" if.bind=\"false\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 1\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 1\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\">${not}</template><template if.bind=\"false\"></template><template else>${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\">${msg}</template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\">${msg}</template><template else repeat.for=\"i of 3\" if.bind=\"false\">${not}</template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else><template repeat.for=\"i of 3\">${not}</template></template><template if.bind=\"false\" else>${not}</template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else></template><template if.bind=\"false\" else>${not}</template><template else><template repeat.for=\"i of 3\">${not}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 3\" if.bind=\"false\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${msg}</template><template else if.bind=\"false\" repeat.for=\"i of 3\">${not}</template><template if.bind=\"false\">${msg}</template><template else repeat.for=\"i of 3\">${not}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\">${item}</template><template else if.bind=\"false\">${item}</template><template if.bind=\"false\"></template><template else>${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"false\" else>${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template><template if.bind=\"false\" else>${item}</template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else></template><template if.bind=\"false\" else>${item}</template><template else><template repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\">${item}</template><template if.bind=\"false\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$02 text$04 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\">${item}</template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\">${item}</template><template if.bind=\"false\">${item}</template><template else repeat.for=\"item of ['a', 'b', 'c']\">${item}</template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$03 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$03 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$03 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$03 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$03 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$03 text$03 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$03 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$03 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$03 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$03 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$03 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$03 text$03 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$03 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$04 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$04 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$04 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$04 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$03 text$04 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$03 text$04 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$04 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$04 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$04 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$04 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$03 text$04 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$03 text$04 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$03 text$04 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$03 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$03 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$03 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$03 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$03 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$04 text$03 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$03 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$03 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$03 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$03 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$03 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$04 text$03 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$03 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$04 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$04 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$04 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$04 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$04 text$04 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$04 text$04 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$04 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$04 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$04 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$04 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$04 text$04 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$04 text$04 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$04 text$04 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static containerless = true;
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$03 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$03 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$03 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$03 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$03 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$05 text$03 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$03 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$03 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$03 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$03 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$03 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$05 text$03 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$03 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$04 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$04 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$04 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$04 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$05 text$04 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$05 text$04 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$04 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$04 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$04 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$04 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$05 text$04 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$05 text$04 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$05 text$04 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "open" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$03 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$03 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$03 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$03 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$03 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$06 text$03 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$03 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$03 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$03 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$03 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$03 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$06 text$03 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$03 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$01 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$04 if$01 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$04 if$01 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$04 if$01 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$04 if$01 repeat$11 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "a");
    });
    it("tag$06 text$04 if$01 repeat$11 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aa");
    });
    it("tag$06 text$04 if$01 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"true\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$04 if$01 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$04 if$01 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"true\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$04 if$01 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"true\"><foo not.bind=\"not\"></foo></template><template if.bind=\"true\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$04 if$01 repeat$12 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaa");
    });
    it("tag$06 text$04 if$01 repeat$12 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "aaaaaa");
    });
    it("tag$06 text$04 if$01 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$01 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$01 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$01 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"true\"><foo item.bind=\"item\"></foo></template><template if.bind=\"true\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$01 repeat$13 variant$09$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$01 repeat$13 variant$09$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"true\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 1\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 1\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 1\"></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bb");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$11 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 1\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "b");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"i of 3\"><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"></template><template else><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"i of 3\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\" repeat.for=\"i of 3\"></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbbbbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else></template><template if.bind=\"false\" else><foo not.bind=\"not\"></foo></template><template else><template repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\" if.bind=\"false\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$12 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else if.bind=\"false\" repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template><template if.bind=\"false\"><foo msg.bind=\"msg\"></foo></template><template else repeat.for=\"i of 3\"><foo not.bind=\"not\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "bbb");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$01$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template repeat.for=\"item of ['a', 'b', 'c']\"><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"></template><template else><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$02$double _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template else if.bind=\"false\"><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\"></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$03$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$03$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$11$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abcabc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$11$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$11$double$03 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else></template><template if.bind=\"false\" else><foo item.bind=\"item\"></foo></template><template else><template repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$12$double$01 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\" if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
    it("tag$06 text$04 if$02 repeat$13 variant$12$double$02 _", function () {
        const { au, host } = setup();
        const Foo = CustomElementResource.define({ name: "foo", template: "<template>${msg}${not}${item}</template>" }, class {
            static bindables = { msg: { attribute: "msg", property: "msg" }, not: { attribute: "not", property: "not" }, item: { attribute: "item", property: "item" } };
            static shadowOptions = { mode: "closed" };
            msg = "";
            not = "";
            item = "";
        });
        au.register(Foo);
        const App = CustomElementResource.define({ name: "app", template: "<template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else if.bind=\"false\" repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template><template if.bind=\"false\"><foo item.bind=\"item\"></foo></template><template else repeat.for=\"item of ['a', 'b', 'c']\"><foo item.bind=\"item\"></foo></template></template>" }, class {
            msg = "a";
            not = "b";
        });
        const component = new App();
        au.app({ host, component });
        verify(au, host, "abc");
    });
});