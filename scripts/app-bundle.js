var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('app',["require", "exports", "./framework"], function (require, exports, framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $App = (function () {
        function $App() {
            this.$observers = {
                message: new framework_1.Observer('Hello World!')
            };
        }
        Object.defineProperty($App.prototype, "message", {
            get: function () { return this.$observers.message.getValue(); },
            set: function (value) { this.$observers.message.setValue(value); },
            enumerable: true,
            configurable: true
        });
        return $App;
    }());
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.$scope = {
                bindingContext: _this,
                overrideContext: null
            };
            return _this;
        }
        App.prototype.hydrate = function (element) {
            this.$host = element;
            element.innerHTML = App.$html;
            var elements = framework_1.getTargets(element);
            var $scope = this.$scope;
            this.$b1 = new framework_1.OneWay($scope, 'message', elements[0], 'textContent');
            this.$b2 = new framework_1.TwoWay($scope, 'message', elements[1], 'value', ['input', 'change']);
            this.$e1 = new NameTag().hydrate(elements[2]);
            this.$b3 = new framework_1.TwoWay($scope, 'message', this.$e1, 'name');
            return this;
        };
        App.prototype.bind = function () {
            this.$b1.bind();
            this.$b2.bind();
            this.$e1.bind();
            this.$b3.bind();
        };
        App.prototype.unbind = function () {
            this.$b1.unbind();
            this.$b2.unbind();
            this.$b3.unbind();
            this.$e1.unbind();
        };
        App.$html = "\n    <div>\n      <span class=\"au\"></span><br>\n      <input type=\"text\" class=\"au\">\n      <name-tag class=\"au\"></name-tag>\n    </div>\n  ";
        return App;
    }($App));
    exports.App = App;
    var $NameTag = (function () {
        function $NameTag() {
            this.$observers = {
                name: new framework_1.Observer('Aurelia'),
                color: new framework_1.Observer(null),
                borderColor: new framework_1.Observer('#000'),
                borderWidth: new framework_1.Observer(1),
                showHeader: new framework_1.Observer(true)
            };
        }
        Object.defineProperty($NameTag.prototype, "name", {
            get: function () { return this.$observers.name.getValue(); },
            set: function (value) { this.$observers.name.setValue(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty($NameTag.prototype, "color", {
            get: function () { return this.$observers.color.getValue(); },
            set: function (value) { this.$observers.color.setValue(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty($NameTag.prototype, "borderColor", {
            get: function () { return this.$observers.borderColor.getValue(); },
            set: function (value) { this.$observers.borderColor.setValue(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty($NameTag.prototype, "borderWidth", {
            get: function () { return this.$observers.borderWidth.getValue(); },
            set: function (value) { this.$observers.borderWidth.setValue(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty($NameTag.prototype, "showHeader", {
            get: function () { return this.$observers.showHeader.getValue(); },
            set: function (value) { this.$observers.showHeader.setValue(value); },
            enumerable: true,
            configurable: true
        });
        $NameTag.prototype.submit = function () {
            this.name = '' + Math.random();
        };
        return $NameTag;
    }());
    var NameTag = (function (_super) {
        __extends(NameTag, _super);
        function NameTag() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.$scope = {
                bindingContext: _this,
                overrideContext: null
            };
            return _this;
        }
        NameTag.prototype.hydrate = function (element) {
            this.$host = element;
            element.innerHTML = NameTag.$html;
            var elements = framework_1.getTargets(element);
            var $scope = this.$scope;
            this.$b1 = new framework_1.TwoWay($scope, 'name', elements[0], 'value', ['change', 'input']);
            this.$b2 = new framework_1.OneWay($scope, 'name', elements[1], 'textContent');
            this.$b3 = new framework_1.OneWay($scope, 'nameTagColor', elements[1].style, 'color');
            this.$b4 = new framework_1.TwoWay($scope, 'nameTagColor', elements[2], 'value', ['change']);
            this.$b5 = new framework_1.TwoWay($scope, 'nameTagBorderColor', elements[3], 'value', ['change']);
            this.$b6 = new framework_1.TwoWay($scope, 'nameTagBorderWidth', elements[4], 'value', ['change', 'input']);
            this.$b7 = new framework_1.TwoWay($scope, 'nameTagHeaderVisible', elements[5], 'checked', ['change']);
            this.$b8 = new framework_1.Listener($scope, 'click', elements[6], 'click', null);
            this.$b9 = new framework_1.OneWay($scope, 'nameTagBorder', element.style, 'border');
            this.$b10 = new framework_1.OneWay($scope, 'nameTagClasses', element, 'className');
            return this;
        };
        NameTag.prototype.bind = function () {
            this.$b1.bind();
            this.$b2.bind();
            this.$b3.bind();
            this.$b4.bind();
            this.$b5.bind();
            this.$b6.bind();
            this.$b7.bind();
            this.$b8.bind();
            this.$b9.bind();
            this.$b10.bind();
        };
        NameTag.prototype.unbind = function () {
            this.$b1.unbind();
            this.$b2.unbind();
            this.$b3.unbind();
            this.$b4.unbind();
            this.$b5.unbind();
            this.$b6.unbind();
            this.$b7.unbind();
            this.$b8.unbind();
            this.$b9.unbind();
            this.$b10.unbind();
        };
        NameTag.$html = "\n    <header>Super Duper name tag</header>\n    <div>\n      <input type=\"text\" class=\"au\"><br/>\n      <span class=\"au\" style=\"font-weight: bold; padding: 10px 0;\"></span>\n    </div>\n    <hr/>\n    <div>\n      <label>\n        Name tag color:\n        <select class=\"au\">\n          <option>red</option>\n          <option>green</option>\n          <option>blue</option>\n        </select>\n      </label>\n    </div>\n    <hr/>\n    <div>\n      <label>\n        Name tag border color:\n        <select class=\"au\">\n          <option>orange</option>\n          <option>black</option>\n          <option>rgba(0,0,0,0.5)</option>\n        </select>\n      </label>\n    </div>\n    <hr/>\n    <div>\n      <label>\n        Name tag border width:\n        <input type=\"number\" class=\"au\" min=\"1\" step=\"1\" max=\"10\" />\n      </label>\n    </div>\n    <div>\n      <label>\n        Show header:\n        <input type=\"checkbox\" class=\"au\" />\n      </label>\n    </div>\n    <button class=\"au\">Reset</button>\n  ";
        return NameTag;
    }($NameTag));
    exports.NameTag = NameTag;
});



define('core',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccessScope = (function () {
        function AccessScope(name, ancestor) {
            if (ancestor === void 0) { ancestor = 0; }
            this.name = name;
            this.ancestor = ancestor;
            this.name = name;
        }
        AccessScope.prototype.evaluate = function (scope, lookupFunctions) {
            var context = getContextFor(this.name, scope, this.ancestor);
            return context[this.name];
        };
        AccessScope.prototype.assign = function (scope, value) {
            var context = getContextFor(this.name, scope, this.ancestor);
            return context ? (context[this.name] = value) : undefined;
        };
        AccessScope.prototype.connect = function (binding, scope) {
            var context = getContextFor(this.name, scope, this.ancestor);
            binding.observeProperty(context, this.name);
        };
        return AccessScope;
    }());
    exports.AccessScope = AccessScope;
    var AccessMember = (function () {
        function AccessMember(object, name) {
            this.object = object;
            this.name = name;
            this.object = object;
            this.name = name;
            this.isAssignable = true;
        }
        AccessMember.prototype.evaluate = function (scope, lookupFunctions) {
            var instance = this.object.evaluate(scope, lookupFunctions);
            return instance === null || instance === undefined ? instance : instance[this.name];
        };
        AccessMember.prototype.assign = function (scope, value) {
            var instance = this.object.evaluate(scope, null);
            if (instance === null || instance === undefined) {
                return;
            }
            instance[this.name] = value;
            return value;
        };
        AccessMember.prototype.connect = function (binding, scope) {
            this.object.connect(binding, scope);
            var obj = this.object.evaluate(scope, null);
            if (obj) {
                binding.observeProperty(obj, this.name);
            }
        };
        return AccessMember;
    }());
    exports.AccessMember = AccessMember;
    var CallScope = (function () {
        function CallScope(name, args, ancestor) {
            this.name = name;
            this.args = args;
            this.ancestor = ancestor;
        }
        CallScope.prototype.evaluate = function (scope, lookupFunctions, mustEvaluate) {
            var args = evalList(scope, this.args, lookupFunctions);
            var context = getContextFor(this.name, scope, this.ancestor);
            var func = getFunction(context, this.name, mustEvaluate);
            if (func) {
                return func.apply(context, args);
            }
            return undefined;
        };
        CallScope.prototype.assign = function () { };
        CallScope.prototype.connect = function (binding, scope) {
            var args = this.args;
            var i = args.length;
            while (i--) {
                args[i].connect(binding, scope);
            }
        };
        return CallScope;
    }());
    exports.CallScope = CallScope;
    var LiteralString = (function () {
        function LiteralString(value) {
            this.value = value;
        }
        LiteralString.prototype.assign = function () { };
        LiteralString.prototype.evaluate = function (scope, lookupFunctions) {
            return this.value;
        };
        LiteralString.prototype.connect = function (binding, scope) { };
        return LiteralString;
    }());
    exports.LiteralString = LiteralString;
    var InterpolationString = (function () {
        function InterpolationString(parts) {
            this.parts = parts;
        }
        InterpolationString.prototype.assign = function () { };
        InterpolationString.prototype.evaluate = function (scope, lookupFunctions) {
            var result = '';
            var parts = this.parts;
            var ii = parts.length;
            for (var i = 0; ii > i; ++i) {
                var partValue = parts[i].evaluate(scope, lookupFunctions);
                if (partValue === null || partValue === undefined) {
                    continue;
                }
                result += partValue.toString();
            }
            return result;
        };
        InterpolationString.prototype.connect = function (binding, scope) {
            var parts = this.parts;
            var i = parts.length;
            while (i--) {
                parts[i].connect(binding, scope);
            }
        };
        return InterpolationString;
    }());
    exports.InterpolationString = InterpolationString;
    var Conditional = (function () {
        function Conditional(condition, yes, no) {
            this.condition = condition;
            this.yes = yes;
            this.no = no;
        }
        Conditional.prototype.evaluate = function (scope, lookupFunctions) {
            return (!!this.condition.evaluate(scope, lookupFunctions))
                ? this.yes.evaluate(scope, lookupFunctions)
                : this.no.evaluate(scope, lookupFunctions);
        };
        Conditional.prototype.assign = function () { };
        Conditional.prototype.connect = function (binding, scope) {
            this.condition.connect(binding, scope);
            if (this.condition.evaluate(scope, null)) {
                this.yes.connect(binding, scope);
            }
            else {
                this.no.connect(binding, scope);
            }
        };
        return Conditional;
    }());
    exports.Conditional = Conditional;
    var Binary = (function () {
        function Binary(operation, left, right) {
            this.operation = operation;
            this.left = left;
            this.right = right;
        }
        Binary.prototype.evaluate = function (scope, lookupFunctions) {
            var left = this.left.evaluate(scope, lookupFunctions);
            switch (this.operation) {
                case '&&': return left && this.right.evaluate(scope, lookupFunctions);
                case '||': return left || this.right.evaluate(scope, lookupFunctions);
            }
            var right = this.right.evaluate(scope, lookupFunctions);
            switch (this.operation) {
                case '==': return left == right;
                case '===': return left === right;
                case '!=': return left != right;
                case '!==': return left !== right;
            }
            if (left === null || right === null || left === undefined || right === undefined) {
                switch (this.operation) {
                    case '+':
                        if (left !== null && left !== undefined)
                            return left;
                        if (right !== null && right !== undefined)
                            return right;
                        return 0;
                    case '-':
                        if (left !== null && left !== undefined)
                            return left;
                        if (right !== null && right !== undefined)
                            return 0 - right;
                        return 0;
                }
                return null;
            }
            switch (this.operation) {
                case '+': return autoConvertAdd(left, right);
                case '-': return left - right;
                case '*': return left * right;
                case '/': return left / right;
                case '%': return left % right;
                case '<': return left < right;
                case '>': return left > right;
                case '<=': return left <= right;
                case '>=': return left >= right;
                case '^': return left ^ right;
            }
            throw new Error("Internal error [" + this.operation + "] not handled");
        };
        Binary.prototype.assign = function () { };
        Binary.prototype.connect = function (binding, scope) {
            this.left.connect(binding, scope);
            var left = this.left.evaluate(scope, null, false);
            if (this.operation === '&&' && !left || this.operation === '||' && left) {
                return;
            }
            this.right.connect(binding, scope);
        };
        return Binary;
    }());
    exports.Binary = Binary;
    function evalList(scope, list, lookupFunctions) {
        var length = list.length;
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = list[i].evaluate(scope, lookupFunctions);
        }
        return result;
    }
    function getContextFor(name, scope, ancestor) {
        var oc = scope.overrideContext;
        if (ancestor) {
            while (ancestor && oc) {
                ancestor--;
                oc = oc.parentOverrideContext;
            }
            if (ancestor || !oc) {
                return undefined;
            }
            return name in oc ? oc : oc.bindingContext;
        }
        while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
            oc = oc.parentOverrideContext;
        }
        if (oc) {
            return name in oc ? oc : oc.bindingContext;
        }
        return scope.bindingContext || scope.overrideContext;
    }
    function getFunction(obj, name, mustExist) {
        var func = obj === null || obj === undefined ? null : obj[name];
        if (typeof func === 'function') {
            return func;
        }
        if (!mustExist && (func === null || func === undefined)) {
            return null;
        }
        throw new Error(name + " is not a function");
    }
    function autoConvertAdd(a, b) {
        if (a !== null && b !== null) {
            if (typeof a === 'string' && typeof b !== 'string') {
                return a + b.toString();
            }
            if (typeof a !== 'string' && typeof b === 'string') {
                return a.toString() + b;
            }
            return a + b;
        }
        if (a !== null) {
            return a;
        }
        if (b !== null) {
            return b;
        }
        return 0;
    }
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework',["require", "exports", "./core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var emptyArray = [];
    var Observer = (function () {
        function Observer(value) {
            this.subscribers = [];
            this.currentValue = value;
        }
        Observer.prototype.getValue = function () {
            return this.currentValue;
        };
        Observer.prototype.setValue = function (value) {
            var oldValue = this.currentValue;
            if (Object.is(value, oldValue)) {
                return;
            }
            this.currentValue = value;
            this.subscribers.forEach(function (x) { return x.callable.call(x.context, value, oldValue); });
        };
        Observer.prototype.subscribe = function (callable, context) {
            this.subscribers.push({ callable: callable, context: context });
        };
        Observer.prototype.unsubscribe = function (callable, context) {
            var idx = this.subscribers.findIndex(function (x) { return x.context === context && x.callable === callable; });
            if (idx > -1) {
                this.subscribers.splice(idx, 1);
            }
        };
        return Observer;
    }());
    exports.Observer = Observer;
    function getTargets(element) {
        return element.getElementsByClassName('au');
    }
    exports.getTargets = getTargets;
    var astLookup = {
        message: new core_1.AccessScope('message'),
        textContent: new core_1.AccessScope('textContent'),
        value: new core_1.AccessScope('value'),
        nameTagBorderWidth: new core_1.AccessScope('borderWidth'),
        nameTagBorderColor: new core_1.AccessScope('borderColor'),
        nameTagBorder: new core_1.InterpolationString([
            new core_1.AccessScope('borderWidth'),
            new core_1.LiteralString('px solid '),
            new core_1.AccessScope('borderColor')
        ]),
        nameTagHeaderVisible: new core_1.AccessScope('showHeader'),
        nameTagClasses: new core_1.InterpolationString([
            new core_1.LiteralString('au name-tag '),
            new core_1.Conditional(new core_1.AccessScope('showHeader'), new core_1.LiteralString('header-visible'), new core_1.LiteralString(''))
        ]),
        name: new core_1.AccessScope('name'),
        click: new core_1.CallScope('submit', emptyArray, 0),
        nameTagColor: new core_1.AccessScope('color')
    };
    var OneWay = (function () {
        function OneWay(source, sourceExpression, target, targetProperty) {
            this.source = source;
            this.sourceExpression = sourceExpression;
            this.target = target;
            this.targetProperty = targetProperty;
            this.sourceAst = astLookup[sourceExpression];
        }
        OneWay.prototype.bind = function () {
            this.target[this.targetProperty] = this.sourceAst.evaluate(this.source, null);
            this.sourceAst.connect(this, this.source);
        };
        OneWay.prototype.unbind = function () {
        };
        OneWay.prototype.observeProperty = function (context, name) {
            context.$observers[name].subscribe(this, 'source');
        };
        OneWay.prototype.call = function (context, newValue, oldValue) {
            if (context == 'source') {
                this.target[this.targetProperty] = this.sourceAst.evaluate(this.source, null);
            }
        };
        return OneWay;
    }());
    exports.OneWay = OneWay;
    var TwoWay = (function (_super) {
        __extends(TwoWay, _super);
        function TwoWay(source, sourceExpression, target, targetProperty, events) {
            var _this = _super.call(this, source, sourceExpression, target, targetProperty) || this;
            _this.events = events;
            return _this;
        }
        TwoWay.prototype.bind = function () {
            _super.prototype.bind.call(this);
            var target = this.target;
            var events = this.events;
            if (events) {
                for (var i = 0, ii = events.length; ii > i; ++i) {
                    target.addEventListener(events[i], this);
                }
                return;
            }
            target = target;
            target.$observers[this.targetProperty].subscribe(this, 'target');
            target.bind();
        };
        TwoWay.prototype.unbind = function () {
            var target = this.target;
            var events = this.events;
            if (events) {
                for (var i = 0, ii = events.length; ii > i; ++i) {
                    target.removeEventListener(events[i], this);
                }
                return;
            }
            target = target;
            target.$observers[this.targetProperty].unsubscribe(this, 'target');
            target.unbind();
        };
        TwoWay.prototype.call = function (context, newValue, oldValue) {
            if (context === 'target') {
                this.updateSource();
            }
            else {
                this.updateTarget();
            }
        };
        TwoWay.prototype.handleEvent = function (e) {
            this["on" + e.type](e);
        };
        TwoWay.prototype.updateSource = function () {
            this.sourceAst.assign(this.source, this.target[this.targetProperty]);
        };
        TwoWay.prototype.updateTarget = function () {
            this.target[this.targetProperty] = this.sourceAst.evaluate(this.source, null);
        };
        TwoWay.prototype.oninput = function () {
            this.updateSource();
        };
        TwoWay.prototype.onchange = function () {
            this.updateSource();
        };
        return TwoWay;
    }(OneWay));
    exports.TwoWay = TwoWay;
    var Listener = (function () {
        function Listener(source, name, target, targetEvent, lookupFunctions, preventDefault) {
            if (preventDefault === void 0) { preventDefault = true; }
            this.source = source;
            this.name = name;
            this.target = target;
            this.targetEvent = targetEvent;
            this.lookupFunctions = lookupFunctions;
            this.preventDefault = preventDefault;
            this.sourceAst = astLookup[name];
        }
        Listener.prototype.observeProperty = function () {
            throw new Error('Listener does not observe property');
        };
        Listener.prototype.handleEvent = function (e) {
            this.callSource(e);
        };
        Listener.prototype.callSource = function (e) {
            var overrideContext = this.source.bindingContext;
            overrideContext.$event = event;
            var mustEvaluate = true;
            var result = this.sourceAst.evaluate(this.source, null, mustEvaluate);
            delete overrideContext.$event;
            if (result !== true && this.preventDefault) {
                event.preventDefault();
            }
            return result;
        };
        Listener.prototype.bind = function () {
            if (this.sourceAst.bind) {
                this.sourceAst.bind(this, this.source, this.lookupFunctions);
            }
            this.target.addEventListener(this.targetEvent, this, false);
        };
        Listener.prototype.unbind = function () {
            if (this.sourceAst.unbind) {
                this.sourceAst.unbind(this, this.source, this.lookupFunctions);
            }
            this.target.removeEventListener(this.targetEvent, this, false);
        };
        return Listener;
    }());
    exports.Listener = Listener;
});



define('main',["require", "exports", "./app"], function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app = new app_1.App();
    app.hydrate(document.body);
    app.bind();
    window['app'] = app;
});



define('framework/array-change-records',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isIndex(s) {
        return +s === s >>> 0;
    }
    function toNumber(s) {
        return +s;
    }
    function newSplice(index, removed, addedCount) {
        return {
            index: index,
            removed: removed,
            addedCount: addedCount
        };
    }
    var EDIT_LEAVE = 0;
    var EDIT_UPDATE = 1;
    var EDIT_ADD = 2;
    var EDIT_DELETE = 3;
    function ArraySplice() { }
    ArraySplice.prototype = {
        calcEditDistances: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
            var rowCount = oldEnd - oldStart + 1;
            var columnCount = currentEnd - currentStart + 1;
            var distances = new Array(rowCount);
            var north;
            var west;
            for (var i = 0; i < rowCount; ++i) {
                distances[i] = new Array(columnCount);
                distances[i][0] = i;
            }
            for (var j = 0; j < columnCount; ++j) {
                distances[0][j] = j;
            }
            for (var i = 1; i < rowCount; ++i) {
                for (var j = 1; j < columnCount; ++j) {
                    if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1])) {
                        distances[i][j] = distances[i - 1][j - 1];
                    }
                    else {
                        north = distances[i - 1][j] + 1;
                        west = distances[i][j - 1] + 1;
                        distances[i][j] = north < west ? north : west;
                    }
                }
            }
            return distances;
        },
        spliceOperationsFromEditDistances: function (distances) {
            var i = distances.length - 1;
            var j = distances[0].length - 1;
            var current = distances[i][j];
            var edits = [];
            while (i > 0 || j > 0) {
                if (i === 0) {
                    edits.push(EDIT_ADD);
                    j--;
                    continue;
                }
                if (j === 0) {
                    edits.push(EDIT_DELETE);
                    i--;
                    continue;
                }
                var northWest = distances[i - 1][j - 1];
                var west = distances[i - 1][j];
                var north = distances[i][j - 1];
                var min = void 0;
                if (west < north) {
                    min = west < northWest ? west : northWest;
                }
                else {
                    min = north < northWest ? north : northWest;
                }
                if (min === northWest) {
                    if (northWest === current) {
                        edits.push(EDIT_LEAVE);
                    }
                    else {
                        edits.push(EDIT_UPDATE);
                        current = northWest;
                    }
                    i--;
                    j--;
                }
                else if (min === west) {
                    edits.push(EDIT_DELETE);
                    i--;
                    current = west;
                }
                else {
                    edits.push(EDIT_ADD);
                    j--;
                    current = north;
                }
            }
            edits.reverse();
            return edits;
        },
        calcSplices: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
            var prefixCount = 0;
            var suffixCount = 0;
            var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
            if (currentStart === 0 && oldStart === 0) {
                prefixCount = this.sharedPrefix(current, old, minLength);
            }
            if (currentEnd === current.length && oldEnd === old.length) {
                suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
            }
            currentStart += prefixCount;
            oldStart += prefixCount;
            currentEnd -= suffixCount;
            oldEnd -= suffixCount;
            if ((currentEnd - currentStart) === 0 && (oldEnd - oldStart) === 0) {
                return [];
            }
            if (currentStart === currentEnd) {
                var splice_1 = newSplice(currentStart, [], 0);
                while (oldStart < oldEnd) {
                    splice_1.removed.push(old[oldStart++]);
                }
                return [splice_1];
            }
            else if (oldStart === oldEnd) {
                return [newSplice(currentStart, [], currentEnd - currentStart)];
            }
            var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
            var splice = undefined;
            var splices = [];
            var index = currentStart;
            var oldIndex = oldStart;
            for (var i = 0; i < ops.length; ++i) {
                switch (ops[i]) {
                    case EDIT_LEAVE:
                        if (splice) {
                            splices.push(splice);
                            splice = undefined;
                        }
                        index++;
                        oldIndex++;
                        break;
                    case EDIT_UPDATE:
                        if (!splice) {
                            splice = newSplice(index, [], 0);
                        }
                        splice.addedCount++;
                        index++;
                        splice.removed.push(old[oldIndex]);
                        oldIndex++;
                        break;
                    case EDIT_ADD:
                        if (!splice) {
                            splice = newSplice(index, [], 0);
                        }
                        splice.addedCount++;
                        index++;
                        break;
                    case EDIT_DELETE:
                        if (!splice) {
                            splice = newSplice(index, [], 0);
                        }
                        splice.removed.push(old[oldIndex]);
                        oldIndex++;
                        break;
                }
            }
            if (splice) {
                splices.push(splice);
            }
            return splices;
        },
        sharedPrefix: function (current, old, searchLength) {
            for (var i = 0; i < searchLength; ++i) {
                if (!this.equals(current[i], old[i])) {
                    return i;
                }
            }
            return searchLength;
        },
        sharedSuffix: function (current, old, searchLength) {
            var index1 = current.length;
            var index2 = old.length;
            var count = 0;
            while (count < searchLength && this.equals(current[--index1], old[--index2])) {
                count++;
            }
            return count;
        },
        calculateSplices: function (current, previous) {
            return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
        },
        equals: function (currentValue, previousValue) {
            return currentValue === previousValue;
        }
    };
    var arraySplice = new ArraySplice();
    function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
        return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
    }
    exports.calcSplices = calcSplices;
    function intersect(start1, end1, start2, end2) {
        if (end1 < start2 || end2 < start1) {
            return -1;
        }
        if (end1 === start2 || end2 === start1) {
            return 0;
        }
        if (start1 < start2) {
            if (end1 < end2) {
                return end1 - start2;
            }
            return end2 - start2;
        }
        if (end2 < end1) {
            return end2 - start1;
        }
        return end1 - start1;
    }
    function mergeSplice(splices, index, removed, addedCount) {
        var splice = newSplice(index, removed, addedCount);
        var inserted = false;
        var insertionOffset = 0;
        for (var i = 0; i < splices.length; i++) {
            var current = splices[i];
            current.index += insertionOffset;
            if (inserted) {
                continue;
            }
            var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
            if (intersectCount >= 0) {
                splices.splice(i, 1);
                i--;
                insertionOffset -= current.addedCount - current.removed.length;
                splice.addedCount += current.addedCount - intersectCount;
                var deleteCount = splice.removed.length +
                    current.removed.length - intersectCount;
                if (!splice.addedCount && !deleteCount) {
                    inserted = true;
                }
                else {
                    var currentRemoved = current.removed;
                    if (splice.index < current.index) {
                        var prepend = splice.removed.slice(0, current.index - splice.index);
                        Array.prototype.push.apply(prepend, currentRemoved);
                        currentRemoved = prepend;
                    }
                    if (splice.index + splice.removed.length > current.index + current.addedCount) {
                        var append = splice.removed.slice(current.index + current.addedCount - splice.index);
                        Array.prototype.push.apply(currentRemoved, append);
                    }
                    splice.removed = currentRemoved;
                    if (current.index < splice.index) {
                        splice.index = current.index;
                    }
                }
            }
            else if (splice.index < current.index) {
                inserted = true;
                splices.splice(i, 0, splice);
                i++;
                var offset = splice.addedCount - splice.removed.length;
                current.index += offset;
                insertionOffset += offset;
            }
        }
        if (!inserted) {
            splices.push(splice);
        }
    }
    exports.mergeSplice = mergeSplice;
    function createInitialSplices(array, changeRecords) {
        var splices = [];
        for (var i = 0; i < changeRecords.length; i++) {
            var record = changeRecords[i];
            switch (record.type) {
                case 'splice':
                    mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
                    break;
                case 'add':
                case 'update':
                case 'delete':
                    if (!isIndex(record.name)) {
                        continue;
                    }
                    var index = toNumber(record.name);
                    if (index < 0) {
                        continue;
                    }
                    mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
                    break;
                default:
                    console.error('Unexpected record type: ' + JSON.stringify(record));
                    break;
            }
        }
        return splices;
    }
    function projectArraySplices(array, changeRecords) {
        var splices = [];
        createInitialSplices(array, changeRecords).forEach(function (splice) {
            if (splice.addedCount === 1 && splice.removed.length === 1) {
                if (splice.removed[0] !== array[splice.index]) {
                    splices.push(splice);
                }
                return;
            }
            splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
        });
        return splices;
    }
    exports.projectArraySplices = projectArraySplices;
});



define('framework/ast',["require", "exports", "./scope", "./signals"], function (require, exports, scope_1, signals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Chain = (function () {
        function Chain(expressions) {
            this.expressions = expressions;
        }
        Chain.prototype.evaluate = function (scope, lookupFunctions) {
            var result;
            var expressions = this.expressions;
            var last;
            for (var i = 0, length_1 = expressions.length; i < length_1; ++i) {
                last = expressions[i].evaluate(scope, lookupFunctions);
                if (last !== null) {
                    result = last;
                }
            }
            return result;
        };
        return Chain;
    }());
    exports.Chain = Chain;
    var BindingBehavior = (function () {
        function BindingBehavior(expression, name, args) {
            this.expression = expression;
            this.name = name;
            this.args = args;
        }
        BindingBehavior.prototype.evaluate = function (scope, lookupFunctions) {
            return this.expression.evaluate(scope, lookupFunctions);
        };
        BindingBehavior.prototype.assign = function (scope, value, lookupFunctions) {
            return this.expression.assign(scope, value, lookupFunctions);
        };
        BindingBehavior.prototype.connect = function (binding, scope) {
            this.expression.connect(binding, scope);
        };
        BindingBehavior.prototype.bind = function (binding, scope, lookupFunctions) {
            if (this.expression.expression && this.expression.bind) {
                this.expression.bind(binding, scope, lookupFunctions);
            }
            var behavior = lookupFunctions.bindingBehaviors(this.name);
            if (!behavior) {
                throw new Error("No BindingBehavior named \"" + this.name + "\" was found!");
            }
            var behaviorKey = "behavior-" + this.name;
            if (binding[behaviorKey]) {
                throw new Error("A binding behavior named \"" + this.name + "\" has already been applied to \"" + this.expression + "\"");
            }
            binding[behaviorKey] = behavior;
            behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
        };
        BindingBehavior.prototype.unbind = function (binding, scope) {
            var behaviorKey = "behavior-" + this.name;
            binding[behaviorKey].unbind(binding, scope);
            binding[behaviorKey] = null;
            if (this.expression.expression && this.expression.unbind) {
                this.expression.unbind(binding, scope);
            }
        };
        return BindingBehavior;
    }());
    exports.BindingBehavior = BindingBehavior;
    var ValueConverter = (function () {
        function ValueConverter(expression, name, args, allArgs) {
            this.expression = expression;
            this.name = name;
            this.args = args;
            this.allArgs = allArgs;
        }
        ValueConverter.prototype.evaluate = function (scope, lookupFunctions) {
            var converter = lookupFunctions.valueConverters(this.name);
            if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
            }
            if ('toView' in converter) {
                return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
            }
            return this.allArgs[0].evaluate(scope, lookupFunctions);
        };
        ValueConverter.prototype.assign = function (scope, value, lookupFunctions) {
            var converter = lookupFunctions.valueConverters(this.name);
            if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
            }
            if ('fromView' in converter) {
                value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
            }
            return this.allArgs[0].assign(scope, value, lookupFunctions);
        };
        ValueConverter.prototype.connect = function (binding, scope) {
            var expressions = this.allArgs;
            var i = expressions.length;
            while (i--) {
                expressions[i].connect(binding, scope);
            }
            var converter = binding.lookupFunctions.valueConverters(this.name);
            if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
            }
            var signals = converter.signals;
            if (signals === undefined) {
                return;
            }
            i = signals.length;
            while (i--) {
                signals_1.connectBindingToSignal(binding, signals[i]);
            }
        };
        return ValueConverter;
    }());
    exports.ValueConverter = ValueConverter;
    var Assign = (function () {
        function Assign(target, value) {
            this.target = target;
            this.value = value;
        }
        Assign.prototype.evaluate = function (scope, lookupFunctions) {
            return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
        };
        Assign.prototype.connect = function (binding, scope) { };
        Assign.prototype.assign = function (scope, value) {
            this.value.assign(scope, value);
            this.target.assign(scope, value);
        };
        return Assign;
    }());
    exports.Assign = Assign;
    var Conditional = (function () {
        function Conditional(condition, yes, no) {
            this.condition = condition;
            this.yes = yes;
            this.no = no;
        }
        Conditional.prototype.evaluate = function (scope, lookupFunctions) {
            return (!!this.condition.evaluate(scope, lookupFunctions)) ? this.yes.evaluate(scope, lookupFunctions) : this.no.evaluate(scope, lookupFunctions);
        };
        Conditional.prototype.connect = function (binding, scope) {
            this.condition.connect(binding, scope);
            if (this.condition.evaluate(scope)) {
                this.yes.connect(binding, scope);
            }
            else {
                this.no.connect(binding, scope);
            }
        };
        return Conditional;
    }());
    exports.Conditional = Conditional;
    var AccessThis = (function () {
        function AccessThis(ancestor) {
            this.ancestor = ancestor;
        }
        AccessThis.prototype.evaluate = function (scope, lookupFunctions) {
            var oc = scope.overrideContext;
            var i = this.ancestor;
            while (i-- && oc) {
                oc = oc.parentOverrideContext;
            }
            return i < 1 && oc ? oc.bindingContext : undefined;
        };
        AccessThis.prototype.connect = function (binding, scope) { };
        return AccessThis;
    }());
    exports.AccessThis = AccessThis;
    var AccessScope = (function () {
        function AccessScope(name, ancestor) {
            this.name = name;
            this.ancestor = ancestor;
        }
        AccessScope.prototype.evaluate = function (scope, lookupFunctions) {
            var context = scope_1.getContextFor(this.name, scope, this.ancestor);
            return context[this.name];
        };
        AccessScope.prototype.assign = function (scope, value) {
            var context = scope_1.getContextFor(this.name, scope, this.ancestor);
            return context ? (context[this.name] = value) : undefined;
        };
        AccessScope.prototype.connect = function (binding, scope) {
            var context = scope_1.getContextFor(this.name, scope, this.ancestor);
            binding.observeProperty(context, this.name);
        };
        return AccessScope;
    }());
    exports.AccessScope = AccessScope;
    var AccessMember = (function () {
        function AccessMember(object, name) {
            this.object = object;
            this.name = name;
        }
        AccessMember.prototype.evaluate = function (scope, lookupFunctions) {
            var instance = this.object.evaluate(scope, lookupFunctions);
            return instance === null || instance === undefined ? instance : instance[this.name];
        };
        AccessMember.prototype.assign = function (scope, value) {
            var instance = this.object.evaluate(scope);
            if (instance === null || instance === undefined) {
                instance = {};
                this.object.assign(scope, instance);
            }
            instance[this.name] = value;
            return value;
        };
        AccessMember.prototype.connect = function (binding, scope) {
            this.object.connect(binding, scope);
            var obj = this.object.evaluate(scope);
            if (obj) {
                binding.observeProperty(obj, this.name);
            }
        };
        return AccessMember;
    }());
    exports.AccessMember = AccessMember;
    var AccessKeyed = (function () {
        function AccessKeyed(object, key) {
            this.object = object;
            this.key = key;
        }
        AccessKeyed.prototype.evaluate = function (scope, lookupFunctions) {
            var instance = this.object.evaluate(scope, lookupFunctions);
            var lookup = this.key.evaluate(scope, lookupFunctions);
            return getKeyed(instance, lookup);
        };
        AccessKeyed.prototype.assign = function (scope, value) {
            var instance = this.object.evaluate(scope);
            var lookup = this.key.evaluate(scope);
            return setKeyed(instance, lookup, value);
        };
        AccessKeyed.prototype.connect = function (binding, scope) {
            this.object.connect(binding, scope);
            var obj = this.object.evaluate(scope);
            if (obj instanceof Object) {
                this.key.connect(binding, scope);
                var key = this.key.evaluate(scope);
                if (key !== null && key !== undefined
                    && !(Array.isArray(obj) && typeof (key) === 'number')) {
                    binding.observeProperty(obj, key);
                }
            }
        };
        return AccessKeyed;
    }());
    exports.AccessKeyed = AccessKeyed;
    var CallScope = (function () {
        function CallScope(name, args, ancestor) {
            this.name = name;
            this.args = args;
            this.ancestor = ancestor;
        }
        CallScope.prototype.evaluate = function (scope, lookupFunctions, mustEvaluate) {
            var args = evalList(scope, this.args, lookupFunctions);
            var context = scope_1.getContextFor(this.name, scope, this.ancestor);
            var func = getFunction(context, this.name, mustEvaluate);
            if (func) {
                return func.apply(context, args);
            }
            return undefined;
        };
        CallScope.prototype.connect = function (binding, scope) {
            var args = this.args;
            var i = args.length;
            while (i--) {
                args[i].connect(binding, scope);
            }
        };
        return CallScope;
    }());
    exports.CallScope = CallScope;
    var CallMember = (function () {
        function CallMember(object, name, args) {
            this.object = object;
            this.name = name;
            this.args = args;
        }
        CallMember.prototype.evaluate = function (scope, lookupFunctions, mustEvaluate) {
            var instance = this.object.evaluate(scope, lookupFunctions);
            var args = evalList(scope, this.args, lookupFunctions);
            var func = getFunction(instance, this.name, mustEvaluate);
            if (func) {
                return func.apply(instance, args);
            }
            return undefined;
        };
        CallMember.prototype.connect = function (binding, scope) {
            this.object.connect(binding, scope);
            var obj = this.object.evaluate(scope);
            if (getFunction(obj, this.name, false)) {
                var args = this.args;
                var i = args.length;
                while (i--) {
                    args[i].connect(binding, scope);
                }
            }
        };
        return CallMember;
    }());
    exports.CallMember = CallMember;
    var CallFunction = (function () {
        function CallFunction(func, args) {
            this.func = func;
            this.args = args;
        }
        CallFunction.prototype.evaluate = function (scope, lookupFunctions, mustEvaluate) {
            var func = this.func.evaluate(scope, lookupFunctions);
            if (typeof func === 'function') {
                return func.apply(null, evalList(scope, this.args, lookupFunctions));
            }
            if (!mustEvaluate && (func === null || func === undefined)) {
                return undefined;
            }
            throw new Error(this.func + " is not a function");
        };
        CallFunction.prototype.connect = function (binding, scope) {
            this.func.connect(binding, scope);
            var func = this.func.evaluate(scope);
            if (typeof func === 'function') {
                var args = this.args;
                var i = args.length;
                while (i--) {
                    args[i].connect(binding, scope);
                }
            }
        };
        return CallFunction;
    }());
    exports.CallFunction = CallFunction;
    var Binary = (function () {
        function Binary(operation, left, right) {
            this.operation = operation;
            this.left = left;
            this.right = right;
        }
        Binary.prototype.evaluate = function (scope, lookupFunctions) {
            var left = this.left.evaluate(scope, lookupFunctions);
            switch (this.operation) {
                case '&&': return left && this.right.evaluate(scope, lookupFunctions);
                case '||': return left || this.right.evaluate(scope, lookupFunctions);
            }
            var right = this.right.evaluate(scope, lookupFunctions);
            switch (this.operation) {
                case '==': return left == right;
                case '===': return left === right;
                case '!=': return left != right;
                case '!==': return left !== right;
            }
            if (left === null || right === null || left === undefined || right === undefined) {
                switch (this.operation) {
                    case '+':
                        if (left !== null && left !== undefined)
                            return left;
                        if (right !== null && right !== undefined)
                            return right;
                        return 0;
                    case '-':
                        if (left !== null && left !== undefined)
                            return left;
                        if (right !== null && right !== undefined)
                            return 0 - right;
                        return 0;
                }
                return null;
            }
            switch (this.operation) {
                case '+': return autoConvertAdd(left, right);
                case '-': return left - right;
                case '*': return left * right;
                case '/': return left / right;
                case '%': return left % right;
                case '<': return left < right;
                case '>': return left > right;
                case '<=': return left <= right;
                case '>=': return left >= right;
                case '^': return left ^ right;
            }
            throw new Error("Internal error [" + this.operation + "] not handled");
        };
        Binary.prototype.connect = function (binding, scope) {
            this.left.connect(binding, scope);
            var left = this.left.evaluate(scope);
            if (this.operation === '&&' && !left || this.operation === '||' && left) {
                return;
            }
            this.right.connect(binding, scope);
        };
        return Binary;
    }());
    exports.Binary = Binary;
    var PrefixNot = (function () {
        function PrefixNot(operation, expression) {
            this.operation = operation;
            this.expression = expression;
        }
        PrefixNot.prototype.evaluate = function (scope, lookupFunctions) {
            return !this.expression.evaluate(scope, lookupFunctions);
        };
        PrefixNot.prototype.connect = function (binding, scope) {
            this.expression.connect(binding, scope);
        };
        return PrefixNot;
    }());
    exports.PrefixNot = PrefixNot;
    var LiteralPrimitive = (function () {
        function LiteralPrimitive(value) {
            this.value = value;
        }
        LiteralPrimitive.prototype.evaluate = function (scope, lookupFunctions) {
            return this.value;
        };
        LiteralPrimitive.prototype.connect = function (binding, scope) {
        };
        return LiteralPrimitive;
    }());
    exports.LiteralPrimitive = LiteralPrimitive;
    var LiteralString = (function () {
        function LiteralString(value) {
            this.value = value;
        }
        LiteralString.prototype.evaluate = function (scope, lookupFunctions) {
            return this.value;
        };
        LiteralString.prototype.connect = function (binding, scope) {
        };
        return LiteralString;
    }());
    exports.LiteralString = LiteralString;
    var LiteralArray = (function () {
        function LiteralArray(elements) {
            this.elements = elements;
        }
        LiteralArray.prototype.evaluate = function (scope, lookupFunctions) {
            var elements = this.elements;
            var result = [];
            for (var i = 0, length_2 = elements.length; i < length_2; ++i) {
                result[i] = elements[i].evaluate(scope, lookupFunctions);
            }
            return result;
        };
        LiteralArray.prototype.connect = function (binding, scope) {
            var length = this.elements.length;
            for (var i = 0; i < length; i++) {
                this.elements[i].connect(binding, scope);
            }
        };
        return LiteralArray;
    }());
    exports.LiteralArray = LiteralArray;
    var LiteralObject = (function () {
        function LiteralObject(keys, values) {
            this.keys = keys;
            this.values = values;
        }
        LiteralObject.prototype.evaluate = function (scope, lookupFunctions) {
            var instance = {};
            var keys = this.keys;
            var values = this.values;
            for (var i = 0, length_3 = keys.length; i < length_3; ++i) {
                instance[keys[i]] = values[i].evaluate(scope, lookupFunctions);
            }
            return instance;
        };
        LiteralObject.prototype.connect = function (binding, scope) {
            var length = this.keys.length;
            for (var i = 0; i < length; i++) {
                this.values[i].connect(binding, scope);
            }
        };
        return LiteralObject;
    }());
    exports.LiteralObject = LiteralObject;
    function evalList(scope, list, lookupFunctions) {
        var length = list.length;
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = list[i].evaluate(scope, lookupFunctions);
        }
        return result;
    }
    function autoConvertAdd(a, b) {
        if (a !== null && b !== null) {
            if (typeof a === 'string' && typeof b !== 'string') {
                return a + b.toString();
            }
            if (typeof a !== 'string' && typeof b === 'string') {
                return a.toString() + b;
            }
            return a + b;
        }
        if (a !== null) {
            return a;
        }
        if (b !== null) {
            return b;
        }
        return 0;
    }
    function getFunction(obj, name, mustExist) {
        var func = obj === null || obj === undefined ? null : obj[name];
        if (typeof func === 'function') {
            return func;
        }
        if (!mustExist && (func === null || func === undefined)) {
            return null;
        }
        throw new Error(name + " is not a function");
    }
    function getKeyed(obj, key) {
        if (Array.isArray(obj)) {
            return obj[parseInt(key, 10)];
        }
        else if (obj) {
            return obj[key];
        }
        else if (obj === null || obj === undefined) {
            return undefined;
        }
        return obj[key];
    }
    function setKeyed(obj, key, value) {
        if (Array.isArray(obj)) {
            var index = parseInt(key, 10);
            if (obj.length <= index) {
                obj.length = index + 1;
            }
            obj[index] = value;
        }
        else {
            obj[key] = value;
        }
        return value;
    }
});



define('framework/binding-mode',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindingMode = {
        oneTime: 0,
        toView: 1,
        oneWay: 1,
        twoWay: 2,
        fromView: 3
    };
});



define('framework/call-context',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.targetContext = 'Binding:target';
    exports.sourceContext = 'Binding:source';
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/checked-observer',["require", "exports", "./subscriber-collection"], function (require, exports, subscriber_collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var checkedArrayContext = 'CheckedObserver:array';
    var checkedValueContext = 'CheckedObserver:value';
    var CheckedObserver = (function (_super) {
        __extends(CheckedObserver, _super);
        function CheckedObserver(element, handler, observerLocator) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.handler = handler;
            _this.observerLocator = observerLocator;
            return _this;
        }
        CheckedObserver.prototype.getValue = function () {
            return this.value;
        };
        CheckedObserver.prototype.setValue = function (newValue) {
            if (this.initialSync && this.value === newValue) {
                return;
            }
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribe(checkedArrayContext, this);
                this.arrayObserver = null;
            }
            if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
                this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
                this.arrayObserver.subscribe(checkedArrayContext, this);
            }
            this.oldValue = this.value;
            this.value = newValue;
            this.synchronizeElement();
            this.notify();
            if (!this.initialSync) {
                this.initialSync = true;
                this.observerLocator.taskQueue.queueMicroTask(this);
            }
        };
        CheckedObserver.prototype.call = function (context, splices) {
            this.synchronizeElement();
            if (!this.valueObserver) {
                this.valueObserver = this.element['__observers__'].model || this.element['__observers__'].value;
                if (this.valueObserver) {
                    this.valueObserver.subscribe(checkedValueContext, this);
                }
            }
        };
        CheckedObserver.prototype.synchronizeElement = function () {
            var value = this.value;
            var element = this.element;
            var elementValue = element.hasOwnProperty('model') ? element['model'] : element.value;
            var isRadio = element.type === 'radio';
            var matcher = element['matcher'] || (function (a, b) { return a === b; });
            element.checked =
                isRadio && !!matcher(value, elementValue)
                    || !isRadio && value === true
                    || !isRadio && Array.isArray(value) && value.findIndex(function (item) { return !!matcher(item, elementValue); }) !== -1;
        };
        CheckedObserver.prototype.synchronizeValue = function () {
            var value = this.value;
            var element = this.element;
            var elementValue = element.hasOwnProperty('model') ? element['model'] : element.value;
            var index;
            var matcher = element['matcher'] || (function (a, b) { return a === b; });
            if (element.type === 'checkbox') {
                if (Array.isArray(value)) {
                    index = value.findIndex(function (item) { return !!matcher(item, elementValue); });
                    if (element.checked && index === -1) {
                        value.push(elementValue);
                    }
                    else if (!element.checked && index !== -1) {
                        value.splice(index, 1);
                    }
                    return;
                }
                value = element.checked;
            }
            else if (element.checked) {
                value = elementValue;
            }
            else {
                return;
            }
            this.oldValue = this.value;
            this.value = value;
            this.notify();
        };
        CheckedObserver.prototype.notify = function () {
            var oldValue = this.oldValue;
            var newValue = this.value;
            if (newValue === oldValue) {
                return;
            }
            this.callSubscribers(newValue, oldValue);
        };
        CheckedObserver.prototype.handleEvent = function () {
            this.synchronizeValue();
        };
        CheckedObserver.prototype.subscribe = function (context, callable) {
            if (!this.hasSubscribers()) {
                this.disposeHandler = this.handler.subscribe(this.element, this);
            }
            this.addSubscriber(context, callable);
        };
        CheckedObserver.prototype.unsubscribe = function (context, callable) {
            if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
                this.disposeHandler();
                this.disposeHandler = null;
            }
        };
        CheckedObserver.prototype.unbind = function () {
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribe(checkedArrayContext, this);
                this.arrayObserver = null;
            }
            if (this.valueObserver) {
                this.valueObserver.unsubscribe(checkedValueContext, this);
            }
        };
        return CheckedObserver;
    }(subscriber_collection_1.SubscriberCollection));
    exports.CheckedObserver = CheckedObserver;
});



define('framework/class-observer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassObserver = (function () {
        function ClassObserver(element) {
            this.element = element;
            this.doNotCache = true;
            this.value = '';
            this.version = 0;
        }
        ClassObserver.prototype.getValue = function () {
            return this.value;
        };
        ClassObserver.prototype.setValue = function (newValue) {
            var nameIndex = this.nameIndex || {};
            var version = this.version;
            var names;
            var name;
            if (newValue !== null && newValue !== undefined && newValue.length) {
                names = newValue.split(/\s+/);
                for (var i = 0, length_1 = names.length; i < length_1; i++) {
                    name = names[i];
                    if (name === '') {
                        continue;
                    }
                    nameIndex[name] = version;
                    this.element.classList.add(name);
                }
            }
            this.value = newValue;
            this.nameIndex = nameIndex;
            this.version += 1;
            if (version === 0) {
                return;
            }
            version -= 1;
            for (name in nameIndex) {
                if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
                    continue;
                }
                this.element.classList.remove(name);
            }
        };
        ClassObserver.prototype.subscribe = function () {
            throw new Error("Observation of a \"" + this.element.nodeName + "\" element's \"class\" property is not supported.");
        };
        return ClassObserver;
    }());
    exports.ClassObserver = ClassObserver;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/collection-observation',["require", "exports", "./array-change-records", "./map-change-records", "./subscriber-collection"], function (require, exports, array_change_records_1, map_change_records_1, subscriber_collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModifyCollectionObserver = (function (_super) {
        __extends(ModifyCollectionObserver, _super);
        function ModifyCollectionObserver(taskQueue, collection) {
            var _this = _super.call(this) || this;
            _this.queued = false;
            _this.changeRecords = null;
            _this.oldCollection = null;
            _this.lengthObserver = null;
            _this.taskQueue = taskQueue;
            _this.collection = collection;
            _this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
            return _this;
        }
        ModifyCollectionObserver.prototype.subscribe = function (context, callable) {
            this.addSubscriber(context, callable);
        };
        ModifyCollectionObserver.prototype.unsubscribe = function (context, callable) {
            this.removeSubscriber(context, callable);
        };
        ModifyCollectionObserver.prototype.addChangeRecord = function (changeRecord) {
            if (!this.hasSubscribers() && !this.lengthObserver) {
                return;
            }
            if (changeRecord.type === 'splice') {
                var index = changeRecord.index;
                var arrayLength = changeRecord.object.length;
                if (index > arrayLength) {
                    index = arrayLength - changeRecord.addedCount;
                }
                else if (index < 0) {
                    index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
                }
                if (index < 0) {
                    index = 0;
                }
                changeRecord.index = index;
            }
            if (this.changeRecords === null) {
                this.changeRecords = [changeRecord];
            }
            else {
                this.changeRecords.push(changeRecord);
            }
            if (!this.queued) {
                this.queued = true;
                this.taskQueue.queueMicroTask(this);
            }
        };
        ModifyCollectionObserver.prototype.flushChangeRecords = function () {
            if ((this.changeRecords && this.changeRecords.length) || this.oldCollection) {
                this.call();
            }
        };
        ModifyCollectionObserver.prototype.reset = function (oldCollection) {
            this.oldCollection = oldCollection;
            if (this.hasSubscribers() && !this.queued) {
                this.queued = true;
                this.taskQueue.queueMicroTask(this);
            }
        };
        ModifyCollectionObserver.prototype.getLengthObserver = function () {
            return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
        };
        ModifyCollectionObserver.prototype.call = function () {
            var changeRecords = this.changeRecords;
            var oldCollection = this.oldCollection;
            var records;
            this.queued = false;
            this.changeRecords = [];
            this.oldCollection = null;
            if (this.hasSubscribers()) {
                if (oldCollection) {
                    if (this.collection instanceof Map || this.collection instanceof Set) {
                        records = map_change_records_1.getChangeRecords(oldCollection);
                    }
                    else {
                        records = array_change_records_1.calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
                    }
                }
                else {
                    if (this.collection instanceof Map || this.collection instanceof Set) {
                        records = changeRecords;
                    }
                    else {
                        records = array_change_records_1.projectArraySplices(this.collection, changeRecords);
                    }
                }
                this.callSubscribers(records);
            }
            if (this.lengthObserver) {
                this.lengthObserver.call(this.collection[this.lengthPropertyName]);
            }
        };
        return ModifyCollectionObserver;
    }(subscriber_collection_1.SubscriberCollection));
    exports.ModifyCollectionObserver = ModifyCollectionObserver;
    var CollectionLengthObserver = (function (_super) {
        __extends(CollectionLengthObserver, _super);
        function CollectionLengthObserver(collection) {
            var _this = _super.call(this) || this;
            _this.collection = collection;
            _this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
            _this.currentValue = collection[_this.lengthPropertyName];
            return _this;
        }
        CollectionLengthObserver.prototype.getValue = function () {
            return this.collection[this.lengthPropertyName];
        };
        CollectionLengthObserver.prototype.setValue = function (newValue) {
            this.collection[this.lengthPropertyName] = newValue;
        };
        CollectionLengthObserver.prototype.subscribe = function (context, callable) {
            this.addSubscriber(context, callable);
        };
        CollectionLengthObserver.prototype.unsubscribe = function (context, callable) {
            this.removeSubscriber(context, callable);
        };
        CollectionLengthObserver.prototype.call = function (newValue) {
            var oldValue = this.currentValue;
            this.callSubscribers(newValue, oldValue);
            this.currentValue = newValue;
        };
        return CollectionLengthObserver;
    }(subscriber_collection_1.SubscriberCollection));
    exports.CollectionLengthObserver = CollectionLengthObserver;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/dirty-checking',["require", "exports", "./subscriber-collection"], function (require, exports, subscriber_collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DirtyChecker = (function () {
        function DirtyChecker() {
            this.tracked = [];
            this.checkDelay = 120;
        }
        DirtyChecker.prototype.addProperty = function (property) {
            var tracked = this.tracked;
            tracked.push(property);
            if (tracked.length === 1) {
                this.scheduleDirtyCheck();
            }
        };
        DirtyChecker.prototype.removeProperty = function (property) {
            var tracked = this.tracked;
            tracked.splice(tracked.indexOf(property), 1);
        };
        DirtyChecker.prototype.scheduleDirtyCheck = function () {
            var _this = this;
            setTimeout(function () { return _this.check(); }, this.checkDelay);
        };
        DirtyChecker.prototype.check = function () {
            var tracked = this.tracked;
            var i = tracked.length;
            while (i--) {
                var current = tracked[i];
                if (current.isDirty()) {
                    current.call();
                }
            }
            if (tracked.length) {
                this.scheduleDirtyCheck();
            }
        };
        return DirtyChecker;
    }());
    exports.DirtyChecker = DirtyChecker;
    var DirtyCheckProperty = (function (_super) {
        __extends(DirtyCheckProperty, _super);
        function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
            var _this = _super.call(this) || this;
            _this.dirtyChecker = dirtyChecker;
            _this.obj = obj;
            _this.propertyName = propertyName;
            return _this;
        }
        DirtyCheckProperty.prototype.getValue = function () {
            return this.obj[this.propertyName];
        };
        DirtyCheckProperty.prototype.setValue = function (newValue) {
            this.obj[this.propertyName] = newValue;
        };
        DirtyCheckProperty.prototype.call = function () {
            var oldValue = this.oldValue;
            var newValue = this.getValue();
            this.callSubscribers(newValue, oldValue);
            this.oldValue = newValue;
        };
        DirtyCheckProperty.prototype.isDirty = function () {
            return this.oldValue !== this.obj[this.propertyName];
        };
        DirtyCheckProperty.prototype.subscribe = function (context, callable) {
            if (!this.hasSubscribers()) {
                this.oldValue = this.getValue();
                this.dirtyChecker.addProperty(this);
            }
            this.addSubscriber(context, callable);
        };
        DirtyCheckProperty.prototype.unsubscribe = function (context, callable) {
            if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
                this.dirtyChecker.removeProperty(this);
            }
        };
        return DirtyCheckProperty;
    }(subscriber_collection_1.SubscriberCollection));
    exports.DirtyCheckProperty = DirtyCheckProperty;
});



define('framework/dom',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DOM = {
        Element: Element,
        SVGElement: SVGElement,
        boundary: 'aurelia-dom-boundary',
        addEventListener: function (eventName, callback, capture) {
            document.addEventListener(eventName, callback, capture);
        },
        removeEventListener: function (eventName, callback, capture) {
            document.removeEventListener(eventName, callback, capture);
        },
        adoptNode: function (node) {
            return document.adoptNode(node);
        },
        createAttribute: function (name) {
            return document.createAttribute(name);
        },
        createElement: function (tagName) {
            return document.createElement(tagName);
        },
        createTextNode: function (text) {
            return document.createTextNode(text);
        },
        createComment: function (text) {
            return document.createComment(text);
        },
        createDocumentFragment: function () {
            return document.createDocumentFragment();
        },
        createTemplateElement: function () {
            return document.createElement('template');
        },
        createMutationObserver: function (callback) {
            return new MutationObserver(callback);
        },
        createCustomEvent: function (eventType, options) {
            return new CustomEvent(eventType, options);
        },
        dispatchEvent: function (evt) {
            document.dispatchEvent(evt);
        },
        getComputedStyle: function (element) {
            return window.getComputedStyle(element);
        },
        getElementById: function (id) {
            return document.getElementById(id);
        },
        querySelectorAll: function (query) {
            return document.querySelectorAll(query);
        },
        nextElementSibling: function (element) {
            if ('nextElementSibling' in element) {
                return element['nextElementSibling'];
            }
            do {
                element = element.nextSibling;
            } while (element && element.nodeType !== 1);
            return element;
        },
        createTemplateFromMarkup: function (markup) {
            var parser = document.createElement('div');
            parser.innerHTML = markup;
            var temp = parser.firstElementChild;
            if (!temp || temp.nodeName !== 'TEMPLATE') {
                throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
            }
            return temp;
        },
        appendNode: function (newNode, parentNode) {
            (parentNode || document.body).appendChild(newNode);
        },
        replaceNode: function (newNode, node, parentNode) {
            if (node.parentNode) {
                node.parentNode.replaceChild(newNode, node);
            }
            else {
                parentNode.replaceChild(newNode, node);
            }
        },
        removeNode: function (node, parentNode) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            else if (parentNode) {
                parentNode.removeChild(node);
            }
        },
        injectStyles: function (styles, destination, prepend, id) {
            if (id) {
                var oldStyle = document.getElementById(id);
                if (oldStyle) {
                    var isStyleTag = oldStyle.tagName.toLowerCase() === 'style';
                    if (isStyleTag) {
                        oldStyle.innerHTML = styles;
                        return;
                    }
                    throw new Error('The provided id does not indicate a style tag.');
                }
            }
            var node = document.createElement('style');
            node.innerHTML = styles;
            node.type = 'text/css';
            if (id) {
                node.id = id;
            }
            destination = destination || document.head;
            if (prepend && destination.childNodes.length > 0) {
                destination.insertBefore(node, destination.childNodes[0]);
            }
            else {
                destination.appendChild(node);
            }
            return node;
        }
    };
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/element-observation',["require", "exports", "./subscriber-collection"], function (require, exports, subscriber_collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var XLinkAttributeObserver = (function () {
        function XLinkAttributeObserver(element, propertyName, attributeName) {
            this.element = element;
            this.propertyName = propertyName;
            this.attributeName = attributeName;
        }
        XLinkAttributeObserver.prototype.getValue = function () {
            return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
        };
        XLinkAttributeObserver.prototype.setValue = function (newValue) {
            return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
        };
        XLinkAttributeObserver.prototype.subscribe = function () {
            throw new Error("Observation of a \"" + this.element.nodeName + "\" element's \"" + this.propertyName + "\" property is not supported.");
        };
        return XLinkAttributeObserver;
    }());
    exports.XLinkAttributeObserver = XLinkAttributeObserver;
    exports.dataAttributeAccessor = {
        getValue: function (obj, propertyName) { return obj.getAttribute(propertyName); },
        setValue: function (value, obj, propertyName) {
            if (value === null || value === undefined) {
                obj.removeAttribute(propertyName);
            }
            else {
                obj.setAttribute(propertyName, value);
            }
        }
    };
    var DataAttributeObserver = (function () {
        function DataAttributeObserver(element, propertyName) {
            this.element = element;
            this.propertyName = propertyName;
        }
        DataAttributeObserver.prototype.getValue = function () {
            return this.element.getAttribute(this.propertyName);
        };
        DataAttributeObserver.prototype.setValue = function (newValue) {
            if (newValue === null || newValue === undefined) {
                return this.element.removeAttribute(this.propertyName);
            }
            return this.element.setAttribute(this.propertyName, newValue);
        };
        DataAttributeObserver.prototype.subscribe = function () {
            throw new Error("Observation of a \"" + this.element.nodeName + "\" element's \"" + this.propertyName + "\" property is not supported.");
        };
        return DataAttributeObserver;
    }());
    exports.DataAttributeObserver = DataAttributeObserver;
    var StyleObserver = (function () {
        function StyleObserver(element, propertyName) {
            this.element = element;
            this.propertyName = propertyName;
            this.styles = null;
            this.version = 0;
        }
        StyleObserver.prototype.getValue = function () {
            return this.element.style.cssText;
        };
        StyleObserver.prototype._setProperty = function (style, value) {
            var priority = '';
            if (value !== null && value !== undefined && typeof value.indexOf === 'function' && value.indexOf('!important') !== -1) {
                priority = 'important';
                value = value.replace('!important', '');
            }
            this.element.style.setProperty(style, value, priority);
        };
        StyleObserver.prototype.setValue = function (newValue) {
            var styles = this.styles || {};
            var style;
            var version = this.version;
            if (newValue !== null && newValue !== undefined) {
                if (newValue instanceof Object) {
                    var value = void 0;
                    for (style in newValue) {
                        if (newValue.hasOwnProperty(style)) {
                            value = newValue[style];
                            style = style.replace(/([A-Z])/g, function (m) { return '-' + m.toLowerCase(); });
                            styles[style] = version;
                            this._setProperty(style, value);
                        }
                    }
                }
                else if (newValue.length) {
                    var rx = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g;
                    var pair = void 0;
                    while ((pair = rx.exec(newValue)) !== null) {
                        style = pair[1];
                        if (!style) {
                            continue;
                        }
                        styles[style] = version;
                        this._setProperty(style, pair[2]);
                    }
                }
            }
            this.styles = styles;
            this.version += 1;
            if (version === 0) {
                return;
            }
            version -= 1;
            for (style in styles) {
                if (!styles.hasOwnProperty(style) || styles[style] !== version) {
                    continue;
                }
                this.element.style.removeProperty(style);
            }
        };
        StyleObserver.prototype.subscribe = function () {
            throw new Error("Observation of a \"" + this.element.nodeName + "\" element's \"" + this.propertyName + "\" property is not supported.");
        };
        return StyleObserver;
    }());
    exports.StyleObserver = StyleObserver;
    var ValueAttributeObserver = (function (_super) {
        __extends(ValueAttributeObserver, _super);
        function ValueAttributeObserver(element, propertyName, handler) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.propertyName = propertyName;
            _this.handler = handler;
            if (propertyName === 'files') {
                _this.setValue = function () { };
            }
            return _this;
        }
        ValueAttributeObserver.prototype.getValue = function () {
            return this.element[this.propertyName];
        };
        ValueAttributeObserver.prototype.setValue = function (newValue) {
            newValue = newValue === undefined || newValue === null ? '' : newValue;
            if (this.element[this.propertyName] !== newValue) {
                this.element[this.propertyName] = newValue;
                this.notify();
            }
        };
        ValueAttributeObserver.prototype.notify = function () {
            var oldValue = this.oldValue;
            var newValue = this.getValue();
            this.callSubscribers(newValue, oldValue);
            this.oldValue = newValue;
        };
        ValueAttributeObserver.prototype.handleEvent = function () {
            this.notify();
        };
        ValueAttributeObserver.prototype.subscribe = function (context, callable) {
            if (!this.hasSubscribers()) {
                this.oldValue = this.getValue();
                this.disposeHandler = this.handler.subscribe(this.element, this);
            }
            this.addSubscriber(context, callable);
        };
        ValueAttributeObserver.prototype.unsubscribe = function (context, callable) {
            if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
                this.disposeHandler();
                this.disposeHandler = null;
            }
        };
        return ValueAttributeObserver;
    }(subscriber_collection_1.SubscriberCollection));
    exports.ValueAttributeObserver = ValueAttributeObserver;
});



define('framework/event-manager',["require", "exports", "./dom"], function (require, exports, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function findOriginalEventTarget(event) {
        return (event.path && event.path[0]) || (event.deepPath && event.deepPath[0]) || event.target;
    }
    function stopPropagation() {
        this.standardStopPropagation();
        this.propagationStopped = true;
    }
    function handleCapturedEvent(event) {
        event.propagationStopped = false;
        var target = findOriginalEventTarget(event);
        var orderedCallbacks = [];
        while (target) {
            if (target.capturedCallbacks) {
                var callback = target.capturedCallbacks[event.type];
                if (callback) {
                    if (event.stopPropagation !== stopPropagation) {
                        event.standardStopPropagation = event.stopPropagation;
                        event.stopPropagation = stopPropagation;
                    }
                    orderedCallbacks.push(callback);
                }
            }
            target = target.parentNode;
        }
        for (var i = orderedCallbacks.length - 1; i >= 0 && !event.propagationStopped; i--) {
            var orderedCallback = orderedCallbacks[i];
            if ('handleEvent' in orderedCallback) {
                orderedCallback.handleEvent(event);
            }
            else {
                orderedCallback(event);
            }
        }
    }
    var CapturedHandlerEntry = (function () {
        function CapturedHandlerEntry(eventName) {
            this.eventName = eventName;
            this.count = 0;
            this.eventName = eventName;
        }
        CapturedHandlerEntry.prototype.increment = function () {
            this.count++;
            if (this.count === 1) {
                dom_1.DOM.addEventListener(this.eventName, handleCapturedEvent, true);
            }
        };
        CapturedHandlerEntry.prototype.decrement = function () {
            this.count--;
            if (this.count === 0) {
                dom_1.DOM.removeEventListener(this.eventName, handleCapturedEvent, true);
            }
        };
        return CapturedHandlerEntry;
    }());
    function handleDelegatedEvent(event) {
        event.propagationStopped = false;
        var target = findOriginalEventTarget(event);
        while (target && !event.propagationStopped) {
            if (target.delegatedCallbacks) {
                var callback = target.delegatedCallbacks[event.type];
                if (callback) {
                    if (event.stopPropagation !== stopPropagation) {
                        event.standardStopPropagation = event.stopPropagation;
                        event.stopPropagation = stopPropagation;
                    }
                    if ('handleEvent' in callback) {
                        callback.handleEvent(event);
                    }
                    else {
                        callback(event);
                    }
                }
            }
            target = target.parentNode;
        }
    }
    var DelegateHandlerEntry = (function () {
        function DelegateHandlerEntry(eventName) {
            this.eventName = eventName;
            this.count = 0;
            this.eventName = eventName;
        }
        DelegateHandlerEntry.prototype.increment = function () {
            this.count++;
            if (this.count === 1) {
                dom_1.DOM.addEventListener(this.eventName, handleDelegatedEvent, false);
            }
        };
        DelegateHandlerEntry.prototype.decrement = function () {
            this.count--;
            if (this.count === 0) {
                dom_1.DOM.removeEventListener(this.eventName, handleDelegatedEvent);
            }
        };
        return DelegateHandlerEntry;
    }());
    var DefaultEventStrategy = (function () {
        function DefaultEventStrategy() {
            this.delegatedHandlers = {};
            this.capturedHandlers = {};
        }
        DefaultEventStrategy.prototype.subscribe = function (target, targetEvent, callback, strategy) {
            var delegatedHandlers;
            var capturedHandlers;
            var handlerEntry;
            if (strategy === exports.delegationStrategy.bubbling) {
                delegatedHandlers = this.delegatedHandlers;
                handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent));
                var delegatedCallbacks_1 = target.delegatedCallbacks || (target.delegatedCallbacks = {});
                handlerEntry.increment();
                delegatedCallbacks_1[targetEvent] = callback;
                return function () {
                    handlerEntry.decrement();
                    delegatedCallbacks_1[targetEvent] = null;
                };
            }
            if (strategy === exports.delegationStrategy.capturing) {
                capturedHandlers = this.capturedHandlers;
                handlerEntry = capturedHandlers[targetEvent] || (capturedHandlers[targetEvent] = new CapturedHandlerEntry(targetEvent));
                var capturedCallbacks_1 = target.capturedCallbacks || (target.capturedCallbacks = {});
                handlerEntry.increment();
                capturedCallbacks_1[targetEvent] = callback;
                return function () {
                    handlerEntry.decrement();
                    capturedCallbacks_1[targetEvent] = null;
                };
            }
            target.addEventListener(targetEvent, callback, false);
            return function () {
                target.removeEventListener(targetEvent, callback);
            };
        };
        return DefaultEventStrategy;
    }());
    exports.delegationStrategy = {
        none: 0,
        capturing: 1,
        bubbling: 2
    };
    var EventManager = (function () {
        function EventManager() {
            this.elementHandlerLookup = {};
            this.eventStrategyLookup = {};
            this.defaultEventStrategy = new DefaultEventStrategy();
            this.registerElementConfig({
                tagName: 'input',
                properties: {
                    value: ['change', 'input'],
                    checked: ['change', 'input'],
                    files: ['change', 'input']
                }
            });
            this.registerElementConfig({
                tagName: 'textarea',
                properties: {
                    value: ['change', 'input']
                }
            });
            this.registerElementConfig({
                tagName: 'select',
                properties: {
                    value: ['change']
                }
            });
            this.registerElementConfig({
                tagName: 'content editable',
                properties: {
                    value: ['change', 'input', 'blur', 'keyup', 'paste']
                }
            });
            this.registerElementConfig({
                tagName: 'scrollable element',
                properties: {
                    scrollTop: ['scroll'],
                    scrollLeft: ['scroll']
                }
            });
        }
        EventManager.prototype.registerElementConfig = function (config) {
            var tagName = config.tagName.toLowerCase();
            var properties = config.properties;
            var propertyName;
            this.elementHandlerLookup[tagName] = {};
            for (propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                    this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
                }
            }
        };
        EventManager.prototype.registerElementPropertyConfig = function (tagName, propertyName, events) {
            this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
        };
        EventManager.prototype.createElementHandler = function (events) {
            return {
                subscribe: function (target, callbackOrListener) {
                    events.forEach(function (changeEvent) {
                        target.addEventListener(changeEvent, callbackOrListener, false);
                    });
                    return function () {
                        events.forEach(function (changeEvent) {
                            target.removeEventListener(changeEvent, callbackOrListener, false);
                        });
                    };
                }
            };
        };
        EventManager.prototype.registerElementHandler = function (tagName, handler) {
            this.elementHandlerLookup[tagName.toLowerCase()] = handler;
        };
        EventManager.prototype.registerEventStrategy = function (eventName, strategy) {
            this.eventStrategyLookup[eventName] = strategy;
        };
        EventManager.prototype.getElementHandler = function (target, propertyName) {
            var tagName;
            var lookup = this.elementHandlerLookup;
            if (target.tagName) {
                tagName = target.tagName.toLowerCase();
                if (lookup[tagName] && lookup[tagName][propertyName]) {
                    return lookup[tagName][propertyName];
                }
                if (propertyName === 'textContent' || propertyName === 'innerHTML') {
                    return lookup['content editable'].value;
                }
                if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
                    return lookup['scrollable element'][propertyName];
                }
            }
            return null;
        };
        EventManager.prototype.addEventListener = function (target, targetEvent, callbackOrListener, delegate) {
            return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy)
                .subscribe(target, targetEvent, callbackOrListener, delegate);
        };
        return EventManager;
    }());
    exports.EventManager = EventManager;
});



define('framework/logging',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logLevel = {
        none: 0,
        error: 10,
        warn: 20,
        info: 30,
        debug: 40
    };
    var loggers = {};
    var appenders = [];
    var globalDefaultLevel = exports.logLevel.none;
    var slice = Array.prototype.slice;
    var standardLevels = ['none', 'error', 'warn', 'info', 'debug'];
    function isStandardLevel(level) {
        return standardLevels.filter(function (l) { return l === level; }).length > 0;
    }
    function appendArgs() {
        return [this].concat(slice.call(arguments));
    }
    function logFactory(level) {
        var threshold = exports.logLevel[level];
        return function () {
            if (this.level < threshold) {
                return;
            }
            var args = appendArgs.apply(this, arguments);
            var i = appenders.length;
            while (i--) {
                (_a = appenders[i])[level].apply(_a, args);
            }
            var _a;
        };
    }
    function logFactoryCustom(level) {
        var threshold = exports.logLevel[level];
        return function () {
            if (this.level < threshold) {
                return;
            }
            var args = appendArgs.apply(this, arguments);
            var i = appenders.length;
            while (i--) {
                var appender = appenders[i];
                if (appender[level] !== undefined) {
                    appender[level].apply(appender, args);
                }
            }
        };
    }
    function connectLoggers() {
        var proto = Logger.prototype;
        for (var level in exports.logLevel) {
            if (isStandardLevel(level)) {
                if (level !== 'none') {
                    proto[level] = logFactory(level);
                }
            }
            else {
                proto[level] = logFactoryCustom(level);
            }
        }
    }
    function disconnectLoggers() {
        var proto = Logger.prototype;
        for (var level in exports.logLevel) {
            if (level !== 'none') {
                proto[level] = function () { };
            }
        }
    }
    function getLogger(id) {
        return loggers[id] || new Logger(id);
    }
    exports.getLogger = getLogger;
    function addAppender(appender) {
        if (appenders.push(appender) === 1) {
            connectLoggers();
        }
    }
    exports.addAppender = addAppender;
    function removeAppender(appender) {
        appenders = appenders.filter(function (a) { return a !== appender; });
    }
    exports.removeAppender = removeAppender;
    function getAppenders() {
        return appenders.slice();
    }
    exports.getAppenders = getAppenders;
    function clearAppenders() {
        appenders = [];
        disconnectLoggers();
    }
    exports.clearAppenders = clearAppenders;
    function addCustomLevel(name, value) {
        if (exports.logLevel[name] !== undefined) {
            throw Error("Log level \"" + name + "\" already exists.");
        }
        if (isNaN(value)) {
            throw Error('Value must be a number.');
        }
        exports.logLevel[name] = value;
        if (appenders.length > 0) {
            connectLoggers();
        }
        else {
            Logger.prototype[name] = function () { };
        }
    }
    exports.addCustomLevel = addCustomLevel;
    function removeCustomLevel(name) {
        if (exports.logLevel[name] === undefined) {
            return;
        }
        if (isStandardLevel(name)) {
            throw Error("Built-in log level \"" + name + "\" cannot be removed.");
        }
        delete exports.logLevel[name];
        delete Logger.prototype[name];
    }
    exports.removeCustomLevel = removeCustomLevel;
    function setLevel(level) {
        globalDefaultLevel = level;
        for (var key in loggers) {
            loggers[key].setLevel(level);
        }
    }
    exports.setLevel = setLevel;
    function getLevel() {
        return globalDefaultLevel;
    }
    exports.getLevel = getLevel;
    var Logger = (function () {
        function Logger(id) {
            var cached = loggers[id];
            if (cached) {
                return cached;
            }
            loggers[id] = this;
            this.id = id;
            this.level = globalDefaultLevel;
        }
        Logger.prototype.debug = function (message) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
        };
        Logger.prototype.info = function (message) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
        };
        Logger.prototype.warn = function (message) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
        };
        Logger.prototype.error = function (message) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
        };
        Logger.prototype.setLevel = function (level) {
            this.level = level;
        };
        return Logger;
    }());
    exports.Logger = Logger;
});



define('framework/map-change-records',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function newRecord(type, object, key, oldValue) {
        return {
            type: type,
            object: object,
            key: key,
            oldValue: oldValue
        };
    }
    function getChangeRecords(map) {
        var entries = new Array(map.size);
        var keys = map.keys();
        var i = 0;
        var item;
        while (item = keys.next()) {
            if (item.done) {
                break;
            }
            entries[i] = newRecord('added', map, item.value);
            i++;
        }
        return entries;
    }
    exports.getChangeRecords = getChangeRecords;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/map-observation',["require", "exports", "./collection-observation"], function (require, exports, collection_observation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var mapProto = Map.prototype;
    function getMapObserver(taskQueue, map) {
        return ModifyMapObserver.for(taskQueue, map);
    }
    exports.getMapObserver = getMapObserver;
    var ModifyMapObserver = (function (_super) {
        __extends(ModifyMapObserver, _super);
        function ModifyMapObserver(taskQueue, map) {
            return _super.call(this, taskQueue, map) || this;
        }
        ModifyMapObserver.for = function (taskQueue, map) {
            if (!('__map_observer__' in map)) {
                Reflect.defineProperty(map, '__map_observer__', {
                    value: ModifyMapObserver.create(taskQueue, map),
                    enumerable: false, configurable: false
                });
            }
            return map.__map_observer__;
        };
        ModifyMapObserver.create = function (taskQueue, map) {
            var observer = new ModifyMapObserver(taskQueue, map);
            var proto = mapProto;
            if (proto.set !== map.set || proto.delete !== map.delete || proto.clear !== map.clear) {
                proto = {
                    set: map.set,
                    delete: map.delete,
                    clear: map.clear
                };
            }
            map.set = function () {
                var hasValue = map.has(arguments[0]);
                var type = hasValue ? 'update' : 'add';
                var oldValue = map.get(arguments[0]);
                var methodCallResult = proto.set.apply(map, arguments);
                if (!hasValue || oldValue !== map.get(arguments[0])) {
                    observer.addChangeRecord({
                        type: type,
                        object: map,
                        key: arguments[0],
                        oldValue: oldValue
                    });
                }
                return methodCallResult;
            };
            map.delete = function () {
                var hasValue = map.has(arguments[0]);
                var oldValue = map.get(arguments[0]);
                var methodCallResult = proto.delete.apply(map, arguments);
                if (hasValue) {
                    observer.addChangeRecord({
                        type: 'delete',
                        object: map,
                        key: arguments[0],
                        oldValue: oldValue
                    });
                }
                return methodCallResult;
            };
            map.clear = function () {
                var methodCallResult = proto.clear.apply(map, arguments);
                observer.addChangeRecord({
                    type: 'clear',
                    object: map
                });
                return methodCallResult;
            };
            return observer;
        };
        return ModifyMapObserver;
    }(collection_observation_1.ModifyCollectionObserver));
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/property-observation',["require", "exports", "./logging", "./subscriber-collection"], function (require, exports, logging_1, subscriber_collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logger = logging_1.getLogger('property-observation');
    exports.propertyAccessor = {
        getValue: function (obj, propertyName) { return obj[propertyName]; },
        setValue: function (value, obj, propertyName) { obj[propertyName] = value; }
    };
    var PrimitiveObserver = (function () {
        function PrimitiveObserver(primitive, propertyName) {
            this.primitive = primitive;
            this.propertyName = propertyName;
            this.doNotCache = true;
            this.primitive = primitive;
            this.propertyName = propertyName;
        }
        PrimitiveObserver.prototype.getValue = function () {
            return this.primitive[this.propertyName];
        };
        PrimitiveObserver.prototype.setValue = function () {
            var type = typeof this.primitive;
            throw new Error("The " + this.propertyName + " property of a " + type + " (" + this.primitive + ") cannot be assigned.");
        };
        PrimitiveObserver.prototype.subscribe = function () {
        };
        PrimitiveObserver.prototype.unsubscribe = function () {
        };
        return PrimitiveObserver;
    }());
    exports.PrimitiveObserver = PrimitiveObserver;
    var SetterObserver = (function (_super) {
        __extends(SetterObserver, _super);
        function SetterObserver(taskQueue, obj, propertyName) {
            var _this = _super.call(this) || this;
            _this.taskQueue = taskQueue;
            _this.obj = obj;
            _this.propertyName = propertyName;
            _this.queued = false;
            _this.observing = false;
            return _this;
        }
        SetterObserver.prototype.getValue = function () {
            return this.obj[this.propertyName];
        };
        SetterObserver.prototype.setValue = function (newValue) {
            this.obj[this.propertyName] = newValue;
        };
        SetterObserver.prototype.getterValue = function () {
            return this.currentValue;
        };
        SetterObserver.prototype.setterValue = function (newValue) {
            var oldValue = this.currentValue;
            if (oldValue !== newValue) {
                if (!this.queued) {
                    this.oldValue = oldValue;
                    this.queued = true;
                    this.taskQueue.queueMicroTask(this);
                }
                this.currentValue = newValue;
            }
        };
        SetterObserver.prototype.call = function () {
            var oldValue = this.oldValue;
            var newValue = this.currentValue;
            this.queued = false;
            this.callSubscribers(newValue, oldValue);
        };
        SetterObserver.prototype.subscribe = function (context, callable) {
            if (!this.observing) {
                this.convertProperty();
            }
            this.addSubscriber(context, callable);
        };
        SetterObserver.prototype.unsubscribe = function (context, callable) {
            this.removeSubscriber(context, callable);
        };
        SetterObserver.prototype.convertProperty = function () {
            this.observing = true;
            this.currentValue = this.obj[this.propertyName];
            this.setValue = this.setterValue;
            this.getValue = this.getterValue;
            if (!Reflect.defineProperty(this.obj, this.propertyName, {
                configurable: true,
                enumerable: this.propertyName in this.obj ?
                    this.obj.propertyIsEnumerable(this.propertyName) : true,
                get: this.getValue.bind(this),
                set: this.setValue.bind(this)
            })) {
                logger.warn("Cannot observe property '" + this.propertyName + "' of object", this.obj);
            }
        };
        return SetterObserver;
    }(subscriber_collection_1.SubscriberCollection));
    exports.SetterObserver = SetterObserver;
    var Observer = (function (_super) {
        __extends(Observer, _super);
        function Observer(taskQueue, currentValue) {
            var _this = _super.call(this) || this;
            _this.taskQueue = taskQueue;
            _this.currentValue = currentValue;
            _this.queued = false;
            return _this;
        }
        Observer.prototype.getValue = function () {
            return this.currentValue;
        };
        Observer.prototype.setValue = function (newValue) {
            var oldValue = this.currentValue;
            if (oldValue !== newValue) {
                if (!this.queued) {
                    this.oldValue = oldValue;
                    this.queued = true;
                    this.taskQueue.queueMicroTask(this);
                }
                this.currentValue = newValue;
            }
        };
        Observer.prototype.call = function () {
            var oldValue = this.oldValue;
            var newValue = this.currentValue;
            this.queued = false;
            this.callSubscribers(newValue, oldValue);
        };
        Observer.prototype.subscribe = function (context, callable) {
            this.addSubscriber(context, callable);
        };
        Observer.prototype.unsubscribe = function (context, callable) {
            this.removeSubscriber(context, callable);
        };
        return Observer;
    }(subscriber_collection_1.SubscriberCollection));
    exports.Observer = Observer;
});



define('framework/scope',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createOverrideContext(bindingContext, parentOverrideContext) {
        return {
            bindingContext: bindingContext,
            parentOverrideContext: parentOverrideContext || null
        };
    }
    exports.createOverrideContext = createOverrideContext;
    function getContextFor(name, scope, ancestor) {
        var oc = scope.overrideContext;
        if (ancestor) {
            while (ancestor && oc) {
                ancestor--;
                oc = oc.parentOverrideContext;
            }
            if (ancestor || !oc) {
                return undefined;
            }
            return name in oc ? oc : oc.bindingContext;
        }
        while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
            oc = oc.parentOverrideContext;
        }
        if (oc) {
            return name in oc ? oc : oc.bindingContext;
        }
        return scope.bindingContext || scope.overrideContext;
    }
    exports.getContextFor = getContextFor;
    function createScopeForTest(bindingContext, parentBindingContext) {
        if (parentBindingContext) {
            return {
                bindingContext: bindingContext,
                overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
            };
        }
        return {
            bindingContext: bindingContext,
            overrideContext: createOverrideContext(bindingContext)
        };
    }
    exports.createScopeForTest = createScopeForTest;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('framework/select-value-observer',["require", "exports", "./subscriber-collection", "./dom"], function (require, exports, subscriber_collection_1, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var selectArrayContext = 'SelectValueObserver:array';
    var SelectValueObserver = (function (_super) {
        __extends(SelectValueObserver, _super);
        function SelectValueObserver(element, handler, observerLocator) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.handler = handler;
            _this.observerLocator = observerLocator;
            _this.initialSync = false;
            _this.element = element;
            _this.handler = handler;
            _this.observerLocator = observerLocator;
            return _this;
        }
        SelectValueObserver.prototype.getValue = function () {
            return this.value;
        };
        SelectValueObserver.prototype.setValue = function (newValue) {
            if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
                throw new Error('Only null or Array instances can be bound to a multi-select.');
            }
            if (this.value === newValue) {
                return;
            }
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribe(selectArrayContext, this);
                this.arrayObserver = null;
            }
            if (Array.isArray(newValue)) {
                this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
                this.arrayObserver.subscribe(selectArrayContext, this);
            }
            this.oldValue = this.value;
            this.value = newValue;
            this.synchronizeOptions();
            this.notify();
            if (!this.initialSync) {
                this.initialSync = true;
                this.observerLocator.taskQueue.queueMicroTask(this);
            }
        };
        SelectValueObserver.prototype.call = function (context, splices) {
            this.synchronizeOptions();
        };
        SelectValueObserver.prototype.synchronizeOptions = function () {
            var value = this.value;
            var isArray;
            if (Array.isArray(value)) {
                isArray = true;
            }
            var options = this.element.options;
            var i = options.length;
            var matcher = this.element.matcher || (function (a, b) { return a === b; });
            var _loop_1 = function () {
                var option = options.item(i);
                var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
                if (isArray) {
                    option.selected = value.findIndex(function (item) { return !!matcher(optionValue, item); }) !== -1;
                    return "continue";
                }
                option.selected = !!matcher(optionValue, value);
            };
            while (i--) {
                _loop_1();
            }
        };
        SelectValueObserver.prototype.synchronizeValue = function () {
            var options = this.element.options;
            var count = 0;
            var value = [];
            for (var i = 0, ii = options.length; i < ii; i++) {
                var option = options.item(i);
                if (!option.selected) {
                    continue;
                }
                value.push(option.hasOwnProperty('model') ? option.model : option.value);
                count++;
            }
            if (this.element.multiple) {
                if (Array.isArray(this.value)) {
                    var matcher_1 = this.element.matcher || (function (a, b) { return a === b; });
                    var i = 0;
                    var _loop_2 = function () {
                        var a = this_1.value[i];
                        if (value.findIndex(function (b) { return matcher_1(a, b); }) === -1) {
                            this_1.value.splice(i, 1);
                        }
                        else {
                            i++;
                        }
                    };
                    var this_1 = this;
                    while (i < this.value.length) {
                        _loop_2();
                    }
                    i = 0;
                    var _loop_3 = function () {
                        var a = value[i];
                        if (this_2.value.findIndex(function (b) { return matcher_1(a, b); }) === -1) {
                            this_2.value.push(a);
                        }
                        i++;
                    };
                    var this_2 = this;
                    while (i < value.length) {
                        _loop_3();
                    }
                    return;
                }
            }
            else {
                if (count === 0) {
                    value = null;
                }
                else {
                    value = value[0];
                }
            }
            if (value !== this.value) {
                this.oldValue = this.value;
                this.value = value;
                this.notify();
            }
        };
        SelectValueObserver.prototype.notify = function () {
            var oldValue = this.oldValue;
            var newValue = this.value;
            this.callSubscribers(newValue, oldValue);
        };
        SelectValueObserver.prototype.handleEvent = function () {
            this.synchronizeValue();
        };
        SelectValueObserver.prototype.subscribe = function (context, callable) {
            if (!this.hasSubscribers()) {
                this.disposeHandler = this.handler.subscribe(this.element, this);
            }
            this.addSubscriber(context, callable);
        };
        SelectValueObserver.prototype.unsubscribe = function (context, callable) {
            if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
                this.disposeHandler();
                this.disposeHandler = null;
            }
        };
        SelectValueObserver.prototype.bind = function () {
            var _this = this;
            this.domObserver = dom_1.DOM.createMutationObserver(function () {
                _this.synchronizeOptions();
                _this.synchronizeValue();
            });
            this.domObserver.observe(this.element, { childList: true, subtree: true });
        };
        SelectValueObserver.prototype.unbind = function () {
            this.domObserver.disconnect();
            this.domObserver = null;
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribe(selectArrayContext, this);
                this.arrayObserver = null;
            }
        };
        return SelectValueObserver;
    }(subscriber_collection_1.SubscriberCollection));
    exports.SelectValueObserver = SelectValueObserver;
});



define('framework/signals',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var signals = {};
    function connectBindingToSignal(binding, name) {
        if (!signals.hasOwnProperty(name)) {
            signals[name] = 0;
        }
        binding.observeProperty(signals, name);
    }
    exports.connectBindingToSignal = connectBindingToSignal;
    function signalBindings(name) {
        if (signals.hasOwnProperty(name)) {
            signals[name]++;
        }
    }
    exports.signalBindings = signalBindings;
});



define('framework/subscriber-collection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var arrayPool1 = [];
    var arrayPool2 = [];
    var poolUtilization = [];
    var SubscriberCollection = (function () {
        function SubscriberCollection() {
            this._context0 = null;
            this._callable0 = null;
            this._context1 = null;
            this._callable1 = null;
            this._context2 = null;
            this._callable2 = null;
            this._contextsRest = null;
            this._callablesRest = null;
        }
        SubscriberCollection.prototype.addSubscriber = function (context, callable) {
            if (this.hasSubscriber(context, callable)) {
                return false;
            }
            if (!this._context0) {
                this._context0 = context;
                this._callable0 = callable;
                return true;
            }
            if (!this._context1) {
                this._context1 = context;
                this._callable1 = callable;
                return true;
            }
            if (!this._context2) {
                this._context2 = context;
                this._callable2 = callable;
                return true;
            }
            if (!this._contextsRest) {
                this._contextsRest = [context];
                this._callablesRest = [callable];
                return true;
            }
            this._contextsRest.push(context);
            this._callablesRest.push(callable);
            return true;
        };
        SubscriberCollection.prototype.removeSubscriber = function (context, callable) {
            if (this._context0 === context && this._callable0 === callable) {
                this._context0 = null;
                this._callable0 = null;
                return true;
            }
            if (this._context1 === context && this._callable1 === callable) {
                this._context1 = null;
                this._callable1 = null;
                return true;
            }
            if (this._context2 === context && this._callable2 === callable) {
                this._context2 = null;
                this._callable2 = null;
                return true;
            }
            var callables = this._callablesRest;
            if (callables === undefined || callables.length === 0) {
                return false;
            }
            var contexts = this._contextsRest;
            var i = 0;
            while (!(callables[i] === callable && contexts[i] === context) && callables.length > i) {
                i++;
            }
            if (i >= callables.length) {
                return false;
            }
            contexts.splice(i, 1);
            callables.splice(i, 1);
            return true;
        };
        SubscriberCollection.prototype.callSubscribers = function (newValue, oldValue) {
            var context0 = this._context0;
            var callable0 = this._callable0;
            var context1 = this._context1;
            var callable1 = this._callable1;
            var context2 = this._context2;
            var callable2 = this._callable2;
            var length = this._contextsRest ? this._contextsRest.length : 0;
            var contextsRest;
            var callablesRest;
            var poolIndex;
            var i;
            if (length) {
                poolIndex = poolUtilization.length;
                while (poolIndex-- && poolUtilization[poolIndex]) {
                }
                if (poolIndex < 0) {
                    poolIndex = poolUtilization.length;
                    contextsRest = [];
                    callablesRest = [];
                    poolUtilization.push(true);
                    arrayPool1.push(contextsRest);
                    arrayPool2.push(callablesRest);
                }
                else {
                    poolUtilization[poolIndex] = true;
                    contextsRest = arrayPool1[poolIndex];
                    callablesRest = arrayPool2[poolIndex];
                }
                i = length;
                while (i--) {
                    contextsRest[i] = this._contextsRest[i];
                    callablesRest[i] = this._callablesRest[i];
                }
            }
            if (context0) {
                if (callable0) {
                    callable0.call(context0, newValue, oldValue);
                }
                else {
                    context0(newValue, oldValue);
                }
            }
            if (context1) {
                if (callable1) {
                    callable1.call(context1, newValue, oldValue);
                }
                else {
                    context1(newValue, oldValue);
                }
            }
            if (context2) {
                if (callable2) {
                    callable2.call(context2, newValue, oldValue);
                }
                else {
                    context2(newValue, oldValue);
                }
            }
            if (length) {
                for (i = 0; i < length; i++) {
                    var callable = callablesRest[i];
                    var context = contextsRest[i];
                    if (callable) {
                        callable.call(context, newValue, oldValue);
                    }
                    else {
                        context(newValue, oldValue);
                    }
                    contextsRest[i] = null;
                    callablesRest[i] = null;
                }
                poolUtilization[poolIndex] = false;
            }
        };
        SubscriberCollection.prototype.hasSubscribers = function () {
            return !!(this._context0
                || this._context1
                || this._context2
                || this._contextsRest && this._contextsRest.length);
        };
        SubscriberCollection.prototype.hasSubscriber = function (context, callable) {
            var has = this._context0 === context && this._callable0 === callable
                || this._context1 === context && this._callable1 === callable
                || this._context2 === context && this._callable2 === callable;
            if (has) {
                return true;
            }
            var index;
            var contexts = this._contextsRest;
            if (!contexts || (index = contexts.length) === 0) {
                return false;
            }
            var callables = this._callablesRest;
            while (index--) {
                if (contexts[index] === context && callables[index] === callable) {
                    return true;
                }
            }
            return false;
        };
        return SubscriberCollection;
    }());
    exports.SubscriberCollection = SubscriberCollection;
});



define('framework/task-queue',["require", "exports", "./dom"], function (require, exports, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hasSetImmediate = typeof setImmediate === 'function';
    var stackSeparator = '\nEnqueued in TaskQueue by:\n';
    var microStackSeparator = '\nEnqueued in MicroTaskQueue by:\n';
    function makeRequestFlushFromMutationObserver(flush) {
        var toggle = 1;
        var observer = dom_1.DOM.createMutationObserver(flush);
        var node = dom_1.DOM.createTextNode('');
        observer.observe(node, { characterData: true });
        return function requestFlush() {
            toggle = -toggle;
            node.data = toggle.toString();
        };
    }
    function makeRequestFlushFromTimer(flush) {
        return function requestFlush() {
            var timeoutHandle = setTimeout(handleFlushTimer, 0);
            var intervalHandle = setInterval(handleFlushTimer, 50);
            function handleFlushTimer() {
                clearTimeout(timeoutHandle);
                clearInterval(intervalHandle);
                flush();
            }
        };
    }
    function onError(error, task, longStacks) {
        if (longStacks &&
            task.stack &&
            typeof error === 'object' &&
            error !== null) {
            error.stack = filterFlushStack(error.stack) + task.stack;
        }
        if ('onError' in task) {
            task.onError(error);
        }
        else if (hasSetImmediate) {
            setImmediate(function () { throw error; });
        }
        else {
            setTimeout(function () { throw error; }, 0);
        }
    }
    var TaskQueue = (function () {
        function TaskQueue() {
            var _this = this;
            this.flushing = false;
            this.longStacks = false;
            this.microTaskQueue = [];
            this.taskQueue = [];
            this.microTaskQueueCapacity = 1024;
            this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () { return _this.flushMicroTaskQueue(); });
            this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () { return _this.flushTaskQueue(); });
        }
        TaskQueue.prototype.flushQueue = function (queue, capacity) {
            var index = 0;
            var task;
            try {
                this.flushing = true;
                while (index < queue.length) {
                    task = queue[index];
                    if (this.longStacks) {
                        this.stack = typeof task.stack === 'string' ? task.stack : undefined;
                    }
                    task.call();
                    index++;
                    if (index > capacity) {
                        for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                            queue[scan] = queue[scan + index];
                        }
                        queue.length -= index;
                        index = 0;
                    }
                }
            }
            catch (error) {
                onError(error, task, this.longStacks);
            }
            finally {
                this.flushing = false;
            }
        };
        TaskQueue.prototype.queueMicroTask = function (task) {
            if (this.microTaskQueue.length < 1) {
                this.requestFlushMicroTaskQueue();
            }
            if (this.longStacks) {
                task['stack'] = this.prepareQueueStack(microStackSeparator);
            }
            this.microTaskQueue.push(task);
        };
        TaskQueue.prototype.queueTask = function (task) {
            if (this.taskQueue.length < 1) {
                this.requestFlushTaskQueue();
            }
            if (this.longStacks) {
                task['stack'] = this.prepareQueueStack(stackSeparator);
            }
            this.taskQueue.push(task);
        };
        TaskQueue.prototype.flushTaskQueue = function () {
            var queue = this.taskQueue;
            this.taskQueue = [];
            this.flushQueue(queue, Number.MAX_VALUE);
        };
        TaskQueue.prototype.flushMicroTaskQueue = function () {
            var queue = this.microTaskQueue;
            this.flushQueue(queue, this.microTaskQueueCapacity);
            queue.length = 0;
        };
        TaskQueue.prototype.prepareQueueStack = function (separator) {
            var stack = separator + filterQueueStack(captureStack());
            if (typeof this.stack === 'string') {
                stack = filterFlushStack(stack) + this.stack;
            }
            return stack;
        };
        return TaskQueue;
    }());
    exports.TaskQueue = TaskQueue;
    function captureStack() {
        var error = new Error();
        if (error.stack) {
            return error.stack;
        }
        try {
            throw error;
        }
        catch (e) {
            return e.stack;
        }
    }
    function filterQueueStack(stack) {
        return stack.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, '');
    }
    function filterFlushStack(stack) {
        var index = stack.lastIndexOf('flushMicroTaskQueue');
        if (index < 0) {
            index = stack.lastIndexOf('flushTaskQueue');
            if (index < 0) {
                return stack;
            }
        }
        index = stack.lastIndexOf('\n', index);
        return index < 0 ? stack : stack.substr(0, index);
    }
});



//# sourceMappingURL=app-bundle.js.map