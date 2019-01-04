export interface EventListener<Event> 
  { (Event: Event): any
  } 

export class Emitter {

}

export const create_emitter = 
  <Event>() => 
  { 
  ; const listenersList: EventListener<Event>[] = []
  ; 
  ; /**
     * Dispatches an event to all subscribed listeners
     * @param arg any parameter that you want to dispatch to all listeners
     */
  ; const trigger = 
    ( arg: Event ) => 
    ( listenersList.forEach( listener => listener(arg))
    )
  ;
  ; const unsubscribe =
    ( listener: EventListener<Event> ) => 
    {
    ; const index = listenersList.indexOf(listener)
    ; if (index >= 0)
      { listenersList.splice(index, 1)
      ; return true
      }
    ; return false
    }
  ; 
  ; /**
     * Adds an event listener to the list of even listeners.
     * returns a function that removes the listener
     * @param listener a function to trigger when this emitter runs
     */
    const subscribe = 
    ( listener: EventListener<Event> ) =>
    { listenersList.push(listener)
    ; return () => unsubscribe(listener)
    }
  ; 
  ; const ret = 
    Object.assign
      ( {}
      , { subscribe
        , unsubscribe
        , trigger
        }
      )
  ; Object.setPrototypeOf
    ( ret
    , Emitter
    )
  ; return ret
  }

export default create_emitter