let count = 0;

/**
 * Returns all the direct descendants of an element, filtered by a query.
 * Needed until [:scope](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope#Browser_compatibility) is more widespread
 * @param element an element to query from
 * @param selector a css string
 */
export const query_children = 
  ( element:HTMLElement, selector:string ) => 
  { const id = element.id
  ; const guid = element.id = id || 'query_children_' + count++
  ; const attr = '#' + guid + ' > '
  ; selector = attr + (selector + '').replace(/,/g, ',' + attr);
  ; const parentNode = element.parentNode
  ; if(!parentNode)
    { return null 
    }
  ; const result = parentNode.querySelectorAll(selector)
  ; if (!id) 
    { element.removeAttribute('id')
    }
  ; return result;
  }

export default query_children