export const factorial =
  ( a = [1] ) =>
  ( n:number ) =>
  { let s = 1
  ; if (a[n])
    { return a[n];
    }
  ; for ( let i = n; i > 1; i-- )
    { s *= i
    }
  ; a[n] = s
  ; return s
  }

export default factorial