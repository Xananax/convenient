/**
 * Calculates height without padding
 * @param el 
 */
export const innerHeight = 
  ( el: HTMLElement ) => 
  { const style = window.getComputedStyle(el)
  ; return ( 
      el.clientHeight
      - parseInt(style.getPropertyValue('padding-top'), 10)
      - parseInt(style.getPropertyValue('padding-bottom'), 10)
    )
  }