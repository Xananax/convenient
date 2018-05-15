/**
 * Ensures that the passed function gets called only once even if it runs multiple times under a specified delay
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param func 
 * @param wait 
 * @param immediate 
 */
export const debounce = 
  <F extends Function>
  ( func: F, wait: number = 300, immediate: boolean = false ): F => 
  { let timeout: NodeJS.Timer
  // tslint:disable-next-line:no-any
  ; const debounced: any = (...args: any[]) => 
    { const later = () =>
      { clearTimeout(timeout)
      ; if ( !immediate )
        { func(...args)
        }
      }
    ; const callNow = immediate && !timeout
    ; clearTimeout(timeout);
    ; timeout = setTimeout(later, wait);
    ; if ( callNow )
      { func(...args)
      }
    }
  ; return debounced
  }
