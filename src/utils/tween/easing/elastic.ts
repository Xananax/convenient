export const In = ( k: number ) =>
  ( k === 0 || k === 1
  ? k
  : -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI)
  )

export const Out = ( k: number ) =>
  ( k === 0 || k === 1
  ? k
  : Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1
  )

export const InOut = ( k: number ) =>
  ( k === 0 || k === 1
  ? k
  : ( k < 1
    ? -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI)
    : 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1
    )
  )

export const elastic = { In, Out, InOut }