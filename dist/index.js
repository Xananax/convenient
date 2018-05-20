"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var main_1 = require("./main");
var App = function () { return (React.createElement("div", null,
    React.createElement("h1", null, "Test"),
    React.createElement("form", { onSubmit: main_1.handle_form_submit(main_1.log('form submit')) },
        React.createElement("input", { type: "text", name: "name" }),
        React.createElement("input", { type: "submit", value: "ok" })))); };
react_dom_1.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map