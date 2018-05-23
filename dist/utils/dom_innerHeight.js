"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates an element's height without padding
 * @param el
 */
exports.dom_innerHeight = function (el, _window) {
    if (_window === void 0) { _window = window; }
    var style = _window.getComputedStyle(el);
    return (el.clientHeight
        - parseInt(style.getPropertyValue('padding-top') || '0', 10)
        - parseInt(style.getPropertyValue('padding-bottom') || '0', 10));
};
exports.default = exports.dom_innerHeight;
//# sourceMappingURL=dom_innerHeight.js.map