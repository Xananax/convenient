import { back } from './back'
import { bounce } from './bounce'
import { circular } from './circular'
import { cubic } from './cubic'
import { elastic } from './elastic'
import { exponential } from './exponential'
import { linear } from './linear'
import { quadratic } from './quadratic'
import { quartic } from './quartic'
import { quintic } from './quintic'
import { sinusoidal } from './sinusoidal'

export interface EasingEquation
  { ( n: number ): number
  }

export interface EasingStack
  { In: EasingEquation
  , Out: EasingEquation
  , InOut: EasingEquation
  }

export interface Easing
  { back: EasingStack
  , bounce: EasingStack
  , circular: EasingStack
  , cubic: EasingStack
  , elastic: EasingStack
  , exponential: EasingStack
  , linear: EasingStack
  , quadratic: EasingStack
  , quartic: EasingStack
  , quintic: EasingStack
  , sinusoidal: EasingStack
  }

export const easing:Easing =
  { back
  , bounce
  , circular
  , cubic
  , elastic
  , exponential
  , linear
  , quadratic
  , quartic
  , quintic
  , sinusoidal
  }

export default easing