export const In = ( k: number ) =>  
  ( 1 - Math.sqrt(1 - k * k) )
export const Out = ( k: number ) => 
  ( Math.sqrt(1 - (--k * k)) )
export const InOut = ( k: number ) =>
  ( (k *= 2) < 1
  ? - 0.5 * (Math.sqrt(1 - k * k) - 1)
  : 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1)
  )

export const circular = { In, Out, InOut }
export default circular