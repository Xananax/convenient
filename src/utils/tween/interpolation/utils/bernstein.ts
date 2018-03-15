import { factorial } from './factorial'

export const bernstein =
  ( n:number, i:number, fc: (n:number) => number = factorial() )  => 
  ( fc(n) / fc(i) / fc(n - i))

export default bernstein