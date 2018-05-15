/**
 * restricts the frequency of calls that a function receives to a fixed time interval
 * @param fn 
 * @param threshold 
 */
export const throttle = 
  <F extends Function>
  ( fn: F, threshold: number = 300 ): F => 
  { let last = 0
  ; let deferTimer: NodeJS.Timer
  // tslint:disable-next-line:no-any
  ; const throttled: any = (...args: any[]) =>
    { const now = +new Date
    ; if ( last && now < last + threshold )
      { clearTimeout( deferTimer )
      ; deferTimer = setTimeout
        ( () =>
          { last = now
          ; fn(...args)
          }
        , threshold
        )
      } 
      else
      { last = now
      ; fn(...args)
      }
    }
  ; return throttled
  }