import { is_pojo } from '../is_pojo';
import { is_array } from '../is_array';

export interface MapFunction<T, V> 
  { (value: T, key: string | number, obj: Iteratable<T>): V;
  }

export interface TakesMap<V> 
  // tslint:disable-next-line:no-any
  { (map: MapFunction<any, V>): V[];
  }

export type Iteratable<T> = T[] | { [key: string]: T };

/* tslint:disable:no-any */
export function iterate<T>(o: Iteratable<T>): TakesMap<any>;
export function iterate<T, V>(o: Iteratable<T>, map: MapFunction<T, V>): V[];
export function iterate( obj: Iteratable<any>, map?: MapFunction<any, any>): TakesMap<any> | any[] 
  { const keys = is_pojo(obj) ? Object.keys(obj) : is_array(obj) ? obj : []
  ; const iter = 
    ( fn: MapFunction<any, any> ) =>
    ( keys.map
      ( (k: string | number, i: number) => 
        ( fn(obj[k], k, obj)
        )
      )
    )
  ; return ( map ? iter(map) : iter )
  }
/* tslint:enable:no-any */

export default iterate