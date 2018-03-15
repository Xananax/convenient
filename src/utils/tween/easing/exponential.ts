export const In = ( k: number ) =>
  ( k === 0
  ? 0 
  : Math.pow(1024, k - 1)
  )
export const Out = ( k: number ) =>
  ( k === 1
  ? 1 
  : 1 - Math.pow(2, - 10 * k)
  )
export const InOut = ( k: number ) => 
  ( k === 0 || k === 1
  ? k
  : ( (k *= 2) < 1
    ? 0.5 * Math.pow(1024, k - 1)
    : 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2)
    )
  )

export const exponential = { In, Out, InOut }