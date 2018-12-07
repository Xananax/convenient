export interface Setter<T>
  { (val: any, index: number, path: string[], obj: any): T
  }
/**
 * Sets a deeply nested prop inside an object
 * Inspired by https://github.com/kalmbach/bury
 * 
 * Returns a new object (does not mutate the original object)
 * @param obj the object to set the prop into
 * @param path the path as a dot delimited string, or an array of strings
 * @param val the value to set, or a function (val, index, path, original) => newVal
 * @param silentCreate if `true` and the path can't be found, will create missing objects on the fly 
 */
export const deep_set = 
  <T>
  ( obj: any
  , path: string | string[]
  , val: T | Setter<T>
  , silentCreate: boolean = false
  , count: number = 0
  ) => 
  { path = typeof path === 'string' ? path.split('.') : path
  ; const { length } = path
  ; const max = length - 1
  ; let p = 0
  ; let baseObj = { ...obj }
  ; let currentObj = baseObj
  ; while ( p < max )
    { const key = path[p]
    ; if (!currentObj.hasOwnProperty(key)) 
      { if (!silentCreate) 
        // tslint:disable-next-line:max-line-length
        { throw new Error(`property "${key}" from "[${path.join('.')}]" does not exist on ${JSON.stringify(currentObj).replace(/"/g, '')}`) 
        }
      ; currentObj[key] = {}
      } 
    ; const toCopy = currentObj[key]
    ; const isArray = Array.isArray(toCopy)
    ; if ( path[p + 1] === '*')
      { const rest = path.slice(p + 2)
      ; p = max
      ; currentObj[key] = toCopy.map( ( item: any, n: number ) => deep_set(item, rest, val, silentCreate, n));
      } else
      { currentObj[key] = isArray ? [ ...toCopy ] : { ...toCopy }
      }
    ; currentObj = currentObj[key]
    ; p++
    }
  ; if (typeof val === 'function'){
      currentObj[path[max]] = (val as Setter<T>)(currentObj[path[max]], count, path, obj)  
    } else
    { currentObj[path[max]] = val
    }
  ; return baseObj
  }

export default deep_set
