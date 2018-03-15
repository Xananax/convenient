export const In = ( k: number ) =>
  ( k * k * k * k * k )
export const Out = ( k: number ) =>
  ( --k * k * k * k * k + 1 )
export const InOut = ( k: number ) =>
  ( (k *= 2) < 1
  ? 0.5 * k * k * k * k * k
  : 0.5 * ( (k -= 2) * k * k * k * k + 2 )
  )

export const quintic = { In, Out, InOut }
export default quintic