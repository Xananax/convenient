import { EasingEquation } from './easing/easing';
import { InterpolationFunction } from './interpolation/interpolation';
export declare const tween: (start_time: number, duration: number, end_value: number | number[], start_value?: number) => (ease: EasingEquation, interpolate: InterpolationFunction) => (time: number) => number;
export default tween;
