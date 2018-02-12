"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates height without padding
 * @param el
 */
exports.innerHeight = function (el) {
    var style = window.getComputedStyle(el);
    return (el.clientHeight
        - parseInt(style.getPropertyValue('padding-top'), 10)
        - parseInt(style.getPropertyValue('padding-bottom'), 10));
};
//# sourceMappingURL=dom_innerHeight.js.map