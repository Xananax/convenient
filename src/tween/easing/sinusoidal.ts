export const In = ( k: number ) =>
  ( 1 - Math.cos(k * Math.PI / 2) )
export const Out = ( k: number ) =>
  ( Math.sin(k * Math.PI / 2) )
export const InOut = ( k: number ) =>
  ( 0.5 * (1 - Math.cos(Math.PI * k)) )

export const sinusoidal = { In, Out, InOut }
export default sinusoidal