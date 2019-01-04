import { bernstein } from './utils/bernstein'

const pw = Math.pow;

export const bezier = 
  // tslint:disable-next-line:no-any
  ( v: any[], k: number, bn: ( n: number, i: number, fc?: ( n: number ) => number) => number = bernstein ) =>
  { let b = 0;
  ; const n = v.length - 1;
  ; for (let i = 0; i <= n; i++)
    { b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }
  ; return b;
  }
