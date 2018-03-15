export const In = ( k:number ) =>
  ( k * k )
export const Out = ( k:number ) =>
  ( k * (2 - k) )
export const InOut = ( k:number ) =>
  ( (k *= 2) < 1) 
  ? 0.5 * k * k 
  : - 0.5 * (--k * (k - 2) - 1
  )

export const quadratic = { In, Out, InOut }
export default quadratic