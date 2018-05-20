export type ArrayEnough<T> = ArrayLike<T> | Iterable<T>
import { is_array } from './is_array'

/**
 * Checks if the passed object is iterable
 * @param obj 
 */
export const is_arrayLike = 
  // tslint:disable-next-line:no-any
  ( obj: any ): obj is ArrayEnough<any> =>
  ( ( is_array(obj) )
  ||( ( !!obj )
    &&( typeof obj === "object" )
    &&( typeof obj.length  === "number" )
    &&( obj.length === 0 
      ||( ( obj.length > 0 )
        &&( obj.length - 1 ) in obj
        )
      )
    )
  )

export default is_arrayLike