import { is_dev } from './is_dev'
import { identity } from './identity'

/* tslint:disable:no-any no-console */
export const log_dev =
  ( msg: string ) => 
  <T>
  ( thing?: T, ...things: any[] ) => 
  ( console.log
    ( msg
    , thing
    , ...things
    )
  , thing
  )
/* tslint:enable:no-any no-console */

export const log_prod = ( msg: string ) => identity

export const log = is_dev ? log_dev : log_prod

export default log
