/**
 * Returns a deeply nested value in an object. Can use a wildcard to return a collection
 * Inspired by https://github.com/developit/dlv
 * 
 * @param obj an object to search into
 * @param path a path, as a dot delimited string or an array of string
 * @param defaultValue a value to return if nothing was found
 */
export const deep_get = 
  <T>
  (obj: any, path: string | string [], defaultValue?: T): T => 
  { path = typeof path === 'string' ? path.split('.') : path
  ; const { length } = path
  ; let p = 0
  ; while (obj && p < length )
    { const key = path[p++]
    ; const val = obj[key]
    ; if ( Array.isArray(val) && path[p] === '*' )
      { { const rest = path.slice(p + 1)
        ; p = length
        ; obj = val.map( item => deep_get(item, rest))
        }
      } else 
      { obj = val as T
      }
    }
  ; const notFound = ( obj === undefined || p < length)
  ; return notFound ? defaultValue : obj
  }

export default deep_get