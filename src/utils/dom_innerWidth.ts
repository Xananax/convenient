/**
 * Calculates width without padding.
 * @param el 
 */
export const innerWidth = 
  ( el: HTMLElement ) =>
  { const style = window.getComputedStyle(el)
  ; return (
      el.clientWidth
      - parseInt(style.getPropertyValue('padding-left'), 10)
      - parseInt(style.getPropertyValue('padding-right'), 10)
    )
  }