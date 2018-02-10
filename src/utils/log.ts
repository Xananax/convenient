import { is_dev } from './is_dev'
import { identity } from './identity'

export const log_dev =
  ( msg:string ) => 
  <T>( thing?:T, ...things:any[] ) => 
  ( console.log
    ( msg
    , thing
    , ...things
    )
  , thing
  )

export const log_prod = ( msg:string ) => identity

export const log = is_dev ? log_dev : log_prod

export default log
