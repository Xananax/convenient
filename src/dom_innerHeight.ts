/**
 * Calculates an element's height without padding
 * @param el 
 */
export const dom_innerHeight = 
  ( el: Element, _window= window ) => 
  { const style = _window.getComputedStyle(el)
  ; return ( 
      el.clientHeight
      - parseInt(style.getPropertyValue('padding-top') || '0', 10)
      - parseInt(style.getPropertyValue('padding-bottom') || '0', 10)
    )
  }

export default dom_innerHeight