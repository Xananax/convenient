"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_scroll_parent_1 = require("./get_scroll_parent");
var defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
/**
 * Check if the node is visible in overflow container parent
 * @param node
 * @param parent
 * @param offset
 */
exports.element_in_overflow = function (node, parent, offset) {
    if (offset === void 0) { offset = 0; }
    var _a = parent && 'getBoundingClientRect' in parent && parent.getBoundingClientRect() || defaultBoundingClientRect, parentTop = _a.top, parentHeight = _a.height;
    var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
    ;
    var intersectionTop = Math.max(parentTop, 0);
    var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop;
    var _b = node && node.getBoundingClientRect && node.getBoundingClientRect() || defaultBoundingClientRect, top = _b.top, height = _b.height;
    var offsetTop = top - intersectionTop;
    var offsets = Array.isArray(offset) ? offset : [offset, offset];
    return (offsetTop - offsets[0] <= intersectionHeight) && (offsetTop + height + offsets[1] >= 0);
};
/**
 * Check if the node is visible in document
 * @param node
 * @param offset
 */
exports.element_in_window = function (node, offset) {
    if (offset === void 0) { offset = 0; }
    if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) {
        return false;
    }
    // tslint:disable-next-line:max-line-length
    ;
    var _a = node && node.getBoundingClientRect && node.getBoundingClientRect() || defaultBoundingClientRect, top = _a.top, elementHeight = _a.height;
    var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
    ;
    var offsets = Array.isArray(offset) ? offset : [offset, offset];
    return (top - offsets[0] <= windowInnerHeight) && (top + elementHeight + offsets[1] >= 0);
};
/**
 * Detect if element is visible in viewport
 * @param node
 * @param overflow
 */
exports.element_is_in_view = function (node, overflow) {
    var parent = get_scroll_parent_1.get_scroll_parent(node);
    var isOverflow = (overflow
        && parent !== node.ownerDocument
        && parent !== document
        && parent !== document.documentElement);
    var is_visible = (isOverflow
        ? exports.element_in_overflow(node, parent)
        : exports.element_in_window(node));
    return is_visible;
};
//# sourceMappingURL=element_is_in_view.js.map