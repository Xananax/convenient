/**
 * Calculates an element's width without padding.
 * @param el 
 */
export const dom_innerWidth = 
  ( el: HTMLElement ) =>
  { const style = window.getComputedStyle(el)
  ; return (
      el.clientWidth
      - parseInt(style.getPropertyValue('padding-left'), 10)
      - parseInt(style.getPropertyValue('padding-right'), 10)
    )
  }

export default dom_innerWidth