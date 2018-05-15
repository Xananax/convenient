export interface ArrayReducer<T, U>
  { (acc: U, elem: T, index: number, arr: T[]): U
  }

export interface ObjectReducer<T, U, K extends keyof T>
  { (acc: U, elem: T[K], key: K, obj: T): U
  }

export interface ReduceArray
  { <T, U>(functor: ArrayReducer<T, U>): (list: T[], acc: U) => U
  ; <T>(functor: ArrayReducer<T, T>): (list: T[]) => T
  }

export interface ReduceObject
  { <T, U, K extends keyof T>(functor: ObjectReducer<T, U, K>): (obj: T, acc: U) => U
  ; <T, K extends keyof T>(functor: ObjectReducer<T, T, K>): (obj: T) => T
  }
  
/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce
 * method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value 
 * to start the accumulation. The first call to the callbackfn function provides this 
 * value as an argument instead of an array value.
 */
export const reduce: ReduceArray = 
  <T, U>
  ( fn: ArrayReducer<T, U|T> ) =>
  ( arr: T[], initialValue?: U|T ) =>
  { const { length } = arr
  ; let i = 0
  ; let value: U|T
  ; if ( typeof initialValue === 'undefined' )
    { value = arr[i++]
    }
    else
    { value = initialValue
    }
  ; for ( i; i < length; i++ )
    { const item = arr[i]
    ; value = fn(value, item, i, arr)
    }
  ; return value
  }

export const reduce_obj: ReduceObject =
  <T, U, K extends keyof T>
  ( fn: ObjectReducer<T, U, K>) =>
  ( obj: T, initialValue?: U|T ) =>
  { const keys = Object.keys(obj)
  ; const { length } = keys
  ; let i = 0
  ; let value
  ; if ( typeof initialValue === 'undefined' )
    { value = obj[keys[i++]]
    }
    else
    { value = initialValue
    }
  ; for ( i; i < length; i++ )
    { const key = keys[i]
    ; const item = obj[key]
    ; value = fn(value, item, key as K, obj)
    }
  ; return value
  }