import { catmull_rom as utils_catmull } from './utils/catmull_rom'

export const catmull_rom = 
  // tslint:disable-next-line:no-any
  ( v: any[], k: number
  , fn: ( p0: number, p1: number, p2: number, p3: number, t: number ) => number = utils_catmull
  ) =>
  { const m = v.length - 1;
  ; let f = m * k;
  ; let i = Math.floor(f);
  ; if (v[0] === v[m])
    { if (k < 0)
      { i = Math.floor(f = m * (1 + k));
      }
    ; return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i)
    } else
    { if (k < 0)
      { return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0])
      }
    ; if (k > 1)
      { return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m])
      }
    ; return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i)
    }
  }

export default catmull_rom
