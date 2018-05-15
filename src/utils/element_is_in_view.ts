import { get_scroll_parent } from './get_scroll_parent'

const defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };

/**
 * Check if the node is visible in overflow container parent
 * @param node 
 * @param parent 
 * @param offset 
 */
export const element_in_overflow = 
  ( node: HTMLElement, parent: Element|Document, offset = 0 ) =>
  // tslint:disable-next-line:max-line-length
  { const { top: parentTop, height: parentHeight } = parent && 'getBoundingClientRect' in parent && parent.getBoundingClientRect() || defaultBoundingClientRect
  ; const windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
  ; const intersectionTop = Math.max(parentTop, 0)
  ; const intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop
  // tslint:disable-next-line:max-line-length
  ; const { top, height } = node && node.getBoundingClientRect && node.getBoundingClientRect() || defaultBoundingClientRect
  ; const offsetTop = top - intersectionTop
  ; const offsets = Array.isArray( offset) ? offset : [ offset, offset ]
  ; return ( offsetTop - offsets[0] <= intersectionHeight) && ( offsetTop + height + offsets[1] >= 0)
}

/**
 * Check if the node is visible in document
 * @param node 
 * @param offset 
 */
export const element_in_window = 
  ( node: HTMLElement, offset = 0 ) =>
  { if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length))
    { return false
    }
  // tslint:disable-next-line:max-line-length
  ; const { top, height: elementHeight } = node && node.getBoundingClientRect && node.getBoundingClientRect() || defaultBoundingClientRect
  ; const windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
  ; const offsets = Array.isArray( offset) ? offset : [ offset, offset ]
  ; return (top - offsets[0] <= windowInnerHeight) && (top + elementHeight + offsets[1] >= 0)
  }

/**
 * Detect if element is visible in viewport
 * @param node 
 * @param overflow 
 */
export const element_is_in_view = 
  ( node: HTMLElement, overflow?: boolean ) =>
  { const parent = get_scroll_parent(node)
  ; const isOverflow = 
    ( overflow
    && parent !== node.ownerDocument
    && parent !== document
    && parent !== document.documentElement
    )
  ; const is_visible = 
    ( isOverflow
    ? element_in_overflow(node, parent)
    : element_in_window(node)
    )
  ; return is_visible
  }