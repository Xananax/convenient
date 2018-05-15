export const In = ( k: number ) =>
  ( k * k * k * k )
export const Out = ( k: number ) =>
  ( 1 - (--k * k * k * k) )
export const InOut = ( k: number ) =>
  ( (k *= 2) < 1
  ? 0.5 * k * k * k * k
  : - 0.5 * ( (k -= 2) * k * k * k - 2 )
  )

export const quartic = { In, Out, InOut }
export default quartic