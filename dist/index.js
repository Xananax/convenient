"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var main_1 = require("./main");
var validate = function (key, value) {
    if (key === 'password') {
        if (value.length < 6) {
            return 'must be at least 6 characters long';
        }
    }
    return undefined;
};
var processForm = main_1.process_form(validate);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            errors: {}
        };
        _this.onSubmit = main_1.handle_form_submit(function (serialized) {
            return processForm(serialized)
                .then(function (validated) { return _this.setState(validated); });
        });
        return _this;
    }
    App.prototype.render = function () {
        var errors = this.state.errors;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Test"),
            React.createElement("form", { onSubmit: this.onSubmit },
                React.createElement("input", { placeholder: "username", type: "text", name: "username" }),
                React.createElement("input", { placeholder: "password", type: "text", name: "password" }),
                errors['password'] && React.createElement("div", null, errors['password']),
                React.createElement("input", { placeholder: "confirm", type: "text", name: "password_confirm" }),
                React.createElement("input", { type: "submit", value: "ok" })),
            React.createElement("pre", null, JSON.stringify(this.state, null, 2))));
    };
    return App;
}(React.Component));
react_dom_1.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map