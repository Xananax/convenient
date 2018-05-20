"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var overflowRegex = /(scroll|auto)/;
/**
 * Gets the first scrolling parent of a given node
 * @param node
 */
exports.get_scroll_parent = function (node) {
    if (!node) {
        return document.documentElement;
    }
    ;
    var excludeStaticParent = node.style.position === 'absolute';
    ;
    var parent = node;
    ;
    while (parent) {
        if (!parent.parentNode) {
            return node.ownerDocument || document.documentElement;
        }
        ;
        var style = window.getComputedStyle(parent);
        var position = style.position;
        var overflow = style.overflow;
        var overflowX = style['overflow-x'];
        var overflowY = style['overflow-y'];
        if (position === 'static' && excludeStaticParent) {
            parent = parent.parentNode;
            continue;
        }
        ;
        if (overflow && overflowRegex.test(overflow) &&
            overflowX && overflowRegex.test(overflowX) &&
            overflowY && overflowRegex.test(overflowY)) {
            return parent;
        }
        ;
        parent = parent.parentNode;
    }
    ;
    return node.ownerDocument || node['documentElement'] || document.documentElement;
};
//# sourceMappingURL=get_scroll_parent.js.map