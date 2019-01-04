export const Out = ( k: number ) =>
  ( k < (1 / 2.75)
  ? 7.5625 * k * k
  : ( k < (2 / 2.75)
    ? 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75
    : ( k < (2.5 / 2.75)
      ? 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375
      : 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375
      )
    )
  )

export const In = ( k: number ) =>
  ( 1 - Out(1 - k) )

export const InOut = ( k: number ) =>
  ( k < 0.5
  ? In(k * 2) * 0.5
  : Out(k * 2 - 1) * 0.5 + 0.5
  )

export const bounce = { In, Out, InOut }
export default bounce