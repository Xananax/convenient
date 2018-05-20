/**
 * Calculates an element's height without padding
 * @param el 
 */
export const dom_innerHeight = 
  ( el: HTMLElement ) => 
  { const style = window.getComputedStyle(el)
  ; return ( 
      el.clientHeight
      - parseInt(style.getPropertyValue('padding-top'), 10)
      - parseInt(style.getPropertyValue('padding-bottom'), 10)
    )
  }

export default dom_innerHeight