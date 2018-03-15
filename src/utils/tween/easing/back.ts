const s = 1.70158
const s2 = 1.70158 * 1.525

export const In = ( k: number ) =>
  ( k * k * ((s + 1) * k - s) )
export const Out = ( k: number ) =>
  ( --k * k * ((s + 1) * k + s) + 1 )
export const InOut = ( k: number ) =>
  ( (k *= 2) < 1
  ? 0.5 * ( k * k * ((s + 1) * k - s2) )
  : 0.5 * ( (k -= 2) * k * ((s2 + 1) * k + s2) + 2 )
  )

export const back = { In, Out, InOut }
export default back
