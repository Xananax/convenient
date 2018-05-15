import { tween } from './tween'
import { interpolation, Interpolation, InterpolationFunction } from './interpolation'
import { easing, Easing, EasingEquation, EasingStack } from './easing'

export { Easing, EasingEquation, EasingStack, Interpolation, InterpolationFunction }
export const Tween = { tween, interpolation, easing }

export default Tween