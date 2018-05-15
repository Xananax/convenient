export interface Resolve<T> 
  { ( value?: T | PromiseLike<T> ): void
  }

export interface Reject
  { <T>( reason?: T ): void
  }

export interface DeferredPromise<T> extends Promise<T>
  { resolve: Resolve<T>
  ; reject: Reject
  }

export const deferred_promise =
  (): DeferredPromise<void> =>
  { let receiver
  ; let promise = 
    ( new Promise
      ( ( resolve, reject) => 
        ( receiver = { resolve, reject }
        )
      ) as DeferredPromise<void>
    )
  ; Object.assign( promise, receiver )
  ; return promise;
  }

export default deferred_promise