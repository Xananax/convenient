"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates width without padding.
 * @param el
 */
exports.innerWidth = function (el) {
    var style = window.getComputedStyle(el);
    return (el.clientWidth
        - parseInt(style.getPropertyValue('padding-left'), 10)
        - parseInt(style.getPropertyValue('padding-right'), 10));
};
//# sourceMappingURL=dom_innerWidth.js.map