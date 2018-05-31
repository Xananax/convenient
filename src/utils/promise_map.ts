import { stop, STOP } from './symbols'

export interface PromiseMapper<T>
  { <O extends {}, K extends keyof O>
    ( value: O[K], key: K, obj: O, stop: STOP ):  T | undefined | STOP | Promise<T | undefined | STOP>
  }

/**
 * Async property mapper which runs every property of an object
 * through a mapper function, and returns a new object with
 * mapped properties.
 * The mapper has the following signature:
 * 
 * ```js
 * ( value, key, obj, stop ) => newValue | undefined | stop
 * ```
 * 
 * if the mapper returns nothing (`undefined`) for a value, this
 * value will be skipped. If it returns the special `stop` value,
 * all subsequent values will be skipped
 * 
 * If all keys are skipped, the returned object is `null`.
 * 
 * @param observer 
 * @param obj 
 */
export const promise_map = 
  <T, O extends {}, K extends keyof O>
  ( observer: PromiseMapper<T>, obj: O ) =>
  { const newValues = {} as  {[ P in K ]?: T }
  ; let oneKeyChanged = false
  ; return Object.keys(obj)
    .map
    ( ( key: K ) => 
      ( ( previousReturnValue: any ) => 
        ( previousReturnValue === stop
        ? Promise.resolve(stop)
        : Promise.resolve()
          .then
          ( () => observer(obj[key], key, obj, stop) )
          .then
          ( ( response ) => 
            { if ( typeof response !== 'undefined' )
              { if ( response === stop )
                { return stop;
                }
              ; oneKeyChanged = true
              ; newValues[key] = response as T
              }
            ; return true
            }
          )
        )
      )
    )
    .reduce
    ( ( prev, curr ) => prev.then(curr)
    , Promise.resolve({})
    )
    .then
    ( ( ) =>
      { if (oneKeyChanged)
        { return newValues
        }
      ; return null
      }
    )
  }

export default promise_map