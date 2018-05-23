"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates an element's width without padding.
 * @param el
 */
exports.dom_innerWidth = function (el, _window) {
    if (_window === void 0) { _window = window; }
    var style = _window.getComputedStyle(el);
    return (el.clientWidth
        - parseInt(style.getPropertyValue('padding-left') || '0', 10)
        - parseInt(style.getPropertyValue('padding-right') || '0', 10));
};
exports.default = exports.dom_innerWidth;
//# sourceMappingURL=dom_innerWidth.js.map