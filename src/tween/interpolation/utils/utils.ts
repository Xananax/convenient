import { bernstein } from './bernstein'
import { catmull_rom } from './catmull_rom'
import { factorial } from './factorial'
import { linear } from './linear'

export const interpolation_utils = { bernstein, catmull_rom, linear, factorial }

export default interpolation_utils