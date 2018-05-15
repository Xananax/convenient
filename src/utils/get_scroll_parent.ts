const overflowRegex = /(scroll|auto)/

/**
 * Gets the first scrolling parent of a given node
 * @param node 
 */
export const get_scroll_parent = 
  ( node: HTMLElement ) =>
  { if ( !node )
    { return document.documentElement;
    }
  ; const excludeStaticParent = node.style.position === 'absolute';
  ; let parent = node;
  ; while ( parent )
    { if ( !parent.parentNode )
      { return node.ownerDocument || document.documentElement
      }
    ; const style = window.getComputedStyle(parent)
    ; const position = style.position
    ; const overflow = style.overflow
    ; const overflowX = style['overflow-x']
    ; const overflowY = style['overflow-y']
    ; if ( position === 'static' && excludeStaticParent )
      { parent = parent.parentNode as HTMLElement
      ; continue
      }
    ; if ( 
        overflow && overflowRegex.test(overflow) && 
        overflowX && overflowRegex.test(overflowX) && 
        overflowY && overflowRegex.test(overflowY)
      )
      { return parent
      }
    ; parent = parent.parentNode as HTMLElement
    }
  ; return node.ownerDocument || node['documentElement'] || document.documentElement;
  }