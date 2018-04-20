import { json } from './json'

export interface Fetch
  { ( input?: Request | string, init?: RequestInit ): Promise<Response>
  }

export interface FetchPatcher extends Fetch
  {
  }

export interface FetchPatcherEventLoad
  { type:'loading'|'success'|'error'
  ; request:Request
  }

export interface FetchPatcherEventSuccess extends FetchPatcherEventLoad
  { type:'success'
  ; request:Request
  ; data:any
  }

export interface FetchPatcherEventError extends FetchPatcherEventLoad
  { type:'error'
  ; request:Request
  ; data:any
  ; error:Error
  }

export type FetchPatcherEvent = 
  | FetchPatcherEventLoad
  | FetchPatcherEventError
  | FetchPatcherEventSuccess

export interface FetchPatcherListener<E extends FetchPatcherEvent>
  {(event:E): void
  }

/**
 * Creates an equivalent to the native fetch,
 * but that dispatches events
 * @param _fetch 
 */
export const fetch_dispatcher = (_fetch:Fetch = fetch) => 
  { const successListeners:FetchPatcherListener<FetchPatcherEventSuccess>[] = []
  ; const errorListeners:FetchPatcherListener<FetchPatcherEventError>[] = []
  ; const loadingListeners:FetchPatcherListener<FetchPatcherEventLoad>[] = []
  ; const anyListeners:FetchPatcherListener<FetchPatcherEvent>[] = []
  ; const cache = new Map()
  ; const dispatch = 
    <E extends FetchPatcherEvent>
    ( arr:FetchPatcherListener<E>[] ) =>
    ( evt:E ) => 
    { arr.forEach(l=>l(evt))
    ; anyListeners.forEach(l=>l(evt))
    ; return evt
    }
  ; const dispatchSuccess =
    dispatch(successListeners)
  ; const dispatchError =
    dispatch(errorListeners)
  ; const dispatchLoading =
    dispatch(loadingListeners)
  ; const addEventListener = 
    <E extends FetchPatcherEvent>
    ( arr:FetchPatcherListener<E>[] ) =>
    ( listener:FetchPatcherListener<E> ) => 
    { arr.push(listener)
    ; const removeEventListner = () => 
      { const index = arr.indexOf(listener)
      ; if( index >= 0 )
        { arr.splice( index, 1 )
        }
      }
    }
  ; const onSuccess =
    addEventListener(successListeners)
  ; const onError =
    addEventListener(errorListeners)
  ; const onLoad =
    addEventListener(loadingListeners)
  ; const NoURLError =
    new Error(`no URL provided`)
  ; const fetch_and_dispatch =
    ( request:Request, init?: RequestInit) => 
    { dispatchLoading({type:'loading',request})
    ; return _fetch(request,init)
      .then( 
        ( { text, statusText, status } ) => 
        ( text()
          .then(json)
          .then( 
            ( data ) => 
            ( status >= 400 && status <= 599
            ? dispatchError({ type:'error', request, data, error:new Error(statusText) } as FetchPatcherEventError)
            : ( data.error && data.error.message
              ? dispatchError({ type:'error', request, data, error:new Error(data.error.message) } as FetchPatcherEventError)
              : dispatchSuccess({ type:'success', request, data } as FetchPatcherEventSuccess) 
              )
            )
          )
        )
      ).then(
        ( evt ) => 
        { if(evt.type === 'error')
          { throw new Error(evt.error.message) }
        ; return evt.data
        }
      )
      .catch( 
        ( error ) => 
        ( dispatchError({ type:'error', request, error } as FetchPatcherEventError)
        )
      )
    }
  ; const fetch_and_cache = 
    ( request?: Request | string, init?: RequestInit & { invalidate?:boolean }) => 
    { if( ! request ){ return Promise.reject(NoURLError) }
    ; if( !(request instanceof Request) ){ request = new Request(request)}
    ; const { url, method } = request
    ; const key = method+':'+url
    ; if( init && init.invalidate )
      { cache.delete(key)
      }
    ; if( !cache.has(key) )
      { const promise = fetch_and_dispatch(request,init)
      ; cache.set(key,promise)
      }
    ; return cache.get(key)
    }
  ; const methods = 
    { onSuccess
    , onError
    , onLoad
    , load:fetch_and_cache
    }
  ; return Object.assign(fetch_and_cache,methods)
  }