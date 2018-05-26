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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var main_1 = require("./main");
var fakeRenderMarkdown = function (text) {
    return text
        .replace(/(#+)(.*?)\n/g, function (_, h, t) { return "<h" + h.length + ">" + t + "</h" + h.length + ">"; })
        .replace(/\n/g, "<br/>");
};
var processForm = main_1.process_form({
    validate: function (_a, errors) {
        var values = _a.values;
        return new Promise(function (resolve) {
            if (!values.password || typeof values.password !== 'string' || values.password.length < 6) {
                errors.password = 'password must be over 6 chars';
            }
            if (values.password_confirm !== values.password) {
                errors.password_confirm = 'passwords dont match';
            }
            if (values.username) {
                if (values.username === 'xananax') {
                    errors.username = 'username is already taken';
                }
                else if (values.username === 'admin') {
                    errors.username = 'admin is not a valid username';
                }
                setTimeout(resolve, 1000);
            }
            else {
                resolve();
            }
        });
    },
    transform: function (form) { return new Promise(function (resolve) {
        var html = fakeRenderMarkdown(form.values.bio);
        var values = __assign({}, form.values, { html: html });
        var newForm = __assign({}, form, { values: values });
        resolve(newForm);
    }); }
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            errors: {},
            values: {}
        };
        _this.onSubmit = main_1.handle_form_submit(function (serialized) {
            return processForm(serialized)
                .then(function (validated) { return _this.setState(validated); });
        });
        return _this;
    }
    App.prototype.renderError = function (name) {
        var errors = this.state.errors;
        if (errors && (name in errors) && errors[name]) {
            return React.createElement("label", null,
                React.createElement("em", null, errors[name]));
        }
        return null;
    };
    App.prototype.render = function () {
        var values = this.state.values;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Test"),
            React.createElement("form", { onSubmit: this.onSubmit },
                React.createElement("div", null,
                    React.createElement("input", { placeholder: "username", type: "text", name: "username" }),
                    this.renderError('username')),
                React.createElement("div", null,
                    React.createElement("input", { placeholder: "password", type: "text", name: "password" }),
                    this.renderError('password')),
                React.createElement("div", null,
                    React.createElement("input", { placeholder: "confirm", type: "text", name: "password_confirm" }),
                    this.renderError('password_confirm')),
                React.createElement("div", null,
                    React.createElement("textarea", { placeholder: "bio", name: "bio" }),
                    this.renderError('bio'),
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: values['html'] } })),
                React.createElement("input", { type: "submit", value: "ok" })),
            React.createElement("pre", null, JSON.stringify(this.state, null, 2))));
    };
    return App;
}(React.Component));
react_dom_1.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map