"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
exports.JSDOM = jsdom_1.JSDOM;
var dom = new jsdom_1.JSDOM("<!DOCTYPE html>\n<head>\n  <title>document title</title>\n  <style>\n    .square{\n      width:100px;\n      height:200px;\n      background-color:red;\n      display:block;\n    }\n  </style>\n</head>\n<body>\n  <p>first paragraph</p>\n  <p>second paragraph</p>\n  <div class=\"square\"></div>\n  <form>\n    <input type=\"file\" id=\"file\"/>\n  </form>\n</body>\n");
var window = dom.window;
exports.window = window;
var doc = window.document;
exports.doc = doc;
describe('jsdom', function () { return it('works', function () {
    expect('jsdom').toBe('jsdom');
}); });
//# sourceMappingURL=fixtures.test.js.map