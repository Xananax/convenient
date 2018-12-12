export interface EventListener<State> 
  { (state: State): any
  } 

export interface Transformer<Input, State>
  { ( nexState: Input, previousState?: State ): State
  }

const noOp = <State>( state: State): State => state

export class Emitter
  {
  }

export const create_emitter = 
  <State, Input>
  ( state: State = {} as State
  , transform: Transformer<Input, State> = (noOp as Transformer<Input, State>)
  ) => 
  { 
  ; const listenersList: EventListener<State>[] = []
  ; 
  ; /**
     * Dispatches an event to all subscribed listeners
     * @param arg any parameter that you want to dispatch to all listeners
     */
    const trigger = 
    ( arg: State ) => 
    ( listenersList.forEach( listener => listener(arg)) 
    )
  ; 
  ; /**
     * Receives a new partial or complete state.
     * this state will be put through `transform` to generate a new state.
     * If the transform returns null or undefined, nothing will happen
     * @param newState the new state to apply
     */
    const set = 
    ( newState: Input ) => 
    { const nextState = transform ? transform(newState, state) : newState as unknown as State
    ; if ( typeof nextState === 'undefined' || nextState === null )
      { return state
      }
    ; trigger(nextState)
    ; state = nextState
    ; return state
    }
  ; 
  ; /**
     * returns the current state
     */
    const get = 
    () => 
    ( state
    )
  ; 
  ; /**
     * Removes a listener from the listener pool 
     * @param listener 
     */
    const unsubscribe =
    ( listener: EventListener<State> ) => 
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
    ( listener: EventListener<State> ) =>
    { listenersList.push(listener)
    ; return () => unsubscribe(listener)
    }
  ;
  ; 
    /**
     * creates a new emitter that will transform any value passed
     * to the first emitter  
     * @param transformer 
     */
    const map = 
    <Next>
    ( transformer: Transformer<State, Next>) => 
    ( create_emitter( transformer(state), transformer)
    )
  ; 
  ; function emitter( newState: Input ): State
  ; function emitter(): State
  ; function emitter( listener: Function ): () => boolean
  ; function emitter( newStateOrListener?: Input | Function ): State | (() => boolean)
    { 
    ; if ( newStateOrListener === null || typeof newStateOrListener === 'undefined' ) 
      { return get()
      }
    ; if ( typeof newStateOrListener === 'function')
      { const listener = newStateOrListener as EventListener<State>
      ; subscribe(listener)
      ; return state
      } 
    ; return set(newStateOrListener) 
    }
  ; 
  ; const emitter_and_methods = 
    Object.assign
      ( emitter
      , { subscribe
        , unsubscribe
        , get
        , set
        , trigger
        , map
        , toString: get
        , valueOf: get
        }
      )
  ; Object.setPrototypeOf
    ( emitter_and_methods
    , Emitter
    )
  ; return emitter_and_methods
  }

export default create_emitter