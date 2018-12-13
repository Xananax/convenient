import { create_emitter } from './emitter'

export interface StateListener<State> 
  { (state: State): any
  } 

export interface Transformer<Input, State>
  { ( nexState: Input, previousState?: State ): State
  }

const noOp = <State>( state: State): State => state

export class Emitter
  {
  }

export const create_store = 
  <State, Input>
  ( state: State = {} as State
  , transform: Transformer<Input, State> = (noOp as Transformer<Input, State>)
  ) => 
  { 
  ; const { subscribe, unsubscribe, trigger } = create_emitter<State>()
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
  ; 
    /**
     * creates a new store that will transform any value passed
     * to the first store  
     * @param transformer 
     */
    const map = 
    <Next>
    ( transformer: Transformer<State, Next>) => 
    ( create_store( transformer(state), transformer)
    )
  ; 
  ; function store( newState: Input ): State
  ; function store(): State
  ; function store( listener: Function ): () => boolean
  ; function store( newStateOrListener?: Input | Function ): State | (() => boolean)
    { 
    ; if ( newStateOrListener === null || typeof newStateOrListener === 'undefined' ) 
      { return get()
      }
    ; if ( typeof newStateOrListener === 'function')
      { const listener = newStateOrListener as StateListener<State>
      ; subscribe(listener)
      ; return state
      } 
    ; return set(newStateOrListener) 
    }
  ; 
  ; const store_and_methods = 
    Object.assign
      ( store
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
    ( store_and_methods
    , Emitter
    )
  ; return store_and_methods
  }

export default create_store