/**
 * Calculates an element's width without padding.
 * @param el 
 */
export const dom_innerWidth = 
  ( el: Element, _window= window ) =>
  { const style = _window.getComputedStyle(el)
  ; return (
      el.clientWidth
      - parseInt(style.getPropertyValue('padding-left') || '0', 10)
      - parseInt(style.getPropertyValue('padding-right') || '0', 10)
    )
  }

export default dom_innerWidth