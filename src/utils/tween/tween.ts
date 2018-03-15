import { easing } from './easing'
import { interpolation } from './interpolation'
import { EasingEquation } from './easing/easing'
import { InterpolationFunction } from './interpolation/interpolation';

const normalize_elapsed = ( time: number, start_time: number, duration: number ) =>
  { const elapsed = (time - start_time) / duration
    return ( (duration === 0 || elapsed > 1)
    ? 1 
    : elapsed
    )
  }

export const tween = 
  ( start_time: number
  , duration: number
  , end_value: number | number[]
  , start_value: number = 0
  ) =>
  ( ( end_value instanceof Array )
  ? ( ease: EasingEquation
    , interpolate: InterpolationFunction
    ) =>
    ( time: number ) =>
    ( interpolate
      ( end_value
      , ease( normalize_elapsed( time, start_time, duration )) )
    )
    
  : ( ease: EasingEquation
    ) =>
    ( time: number ) =>
    ( start_value + (end_value - start_value) * ease( normalize_elapsed( time, start_time, duration )) 
    )
  )


export default tween