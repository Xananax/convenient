import { Interpolation, InterpolationFunction } from './interpolation';
import { Easing, EasingEquation, EasingStack } from './easing';
export { Easing, EasingEquation, EasingStack, Interpolation, InterpolationFunction };
export declare const Tween: {
    tween: (start_time: number, duration: number, end_value: number | number[], start_value?: number) => (ease: EasingEquation, interpolate: InterpolationFunction) => (time: number) => number;
    interpolation: Interpolation;
    easing: Easing;
};
export default Tween;
