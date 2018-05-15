import { interpolation_utils } from './utils'
import { bezier } from './bezier'
import { catmull_rom } from './catmull_rom'
import { linear } from './linear'

export const utils = interpolation_utils

export interface InterpolationFunction
  // tslint:disable-next-line:no-any
  { ( v: any[], n: number ): number
  }

export interface Interpolation
  { bezier: InterpolationFunction
  , catmull_rom: InterpolationFunction
  , linear: InterpolationFunction
  }

export const interpolation: Interpolation =
  { bezier
  , catmull_rom
  , linear
  }

export default interpolation