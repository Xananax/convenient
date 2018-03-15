import { linear as _linear } from './utils/linear'

export const linear = ( v:any[], k:number, fn: (a:number, b:number, t:number) => number = _linear ) => 
  { const m = v.length - 1
  ; const f = m * k
  ; const i = Math.floor(f)
  ; if (k < 0)
    { return fn(v[0], v[1], f)
    }
  ; if (k > 1)
    { return fn(v[m], v[m - 1], m - f);
    }
  ; return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  }