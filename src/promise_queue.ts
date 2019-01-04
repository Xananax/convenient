import { stop, STOP, skip, SKIP } from './symbols'

export interface PromiseQueueMapper<T, R>
  { (input: T, index: number, arr: T[], stop: STOP, skip: SKIP ): R | STOP | SKIP | Promise<R|STOP|SKIP>
  }

/**
 * Renders promises one by one, serially.
 * Each promise is passed to the map function.
 * If the map returns the special `SKIP` symbol, the current item is skipped
 * If the map returns the special `STOP` symbol, next items are skipped
 * If `skipErrors` is true (default), promises that return an error are skipped.
 * Of course, if any of the above is true, the final array will not map exactly with the entry array
 * @param things an array of anything
 * @param map a map to submit the array to
 * @param skipErrors if true, errors will be skipped, otherwise, they will not
 */
export function promise_queue
  <T, R>
  ( things: T[], map: PromiseQueueMapper<T, R>, skipErrors: false): Promise<(R|Error)[]>
export function promise_queue
  <T, R>
  ( things: T[], map: PromiseQueueMapper<T, R>, skipErrors: true ): Promise<R[]>
export function promise_queue
  <T, R>
  ( things: T[], map: PromiseQueueMapper<T, R>, skipErrors: boolean = true ): Promise<(R|Error)[]>
  { const returnArr = [] as (R | Error)[]
  ; return things.reduce
    ( ( prev, item: T, index ) => 
      { return prev.then
        ( ( isStop ) =>
          ( isStop === stop
          ? Promise.resolve(stop)
          : Promise.resolve()
            .then
            ( () => map(item, index, things, stop, skip)
            )
            .then
            ( ( data ) => 
              ( data === stop 
              ? stop
              : data === skip
              ? undefined 
              : returnArr[index] = data as R
              )
            )
            .catch
            ( ( error ) => 
              ( !skipErrors
              ? returnArr[index] = error
              : undefined
              )
            )
          )
        );
      }
    , Promise.resolve(null)
    )
    .then( () => returnArr.filter(Boolean) )
}

export default promise_queue