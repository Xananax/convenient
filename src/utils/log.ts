import { is_dev } from './is_dev'
import { identity } from './identity'

/* tslint:disable:no-any no-console */
/**
 * returns a logger
 * The logged logs everything passed to console, then returns the first passed element.
 * It is thus suitable to be used in promises, for example:
 * ```js
 * fetch('some/url')
 *  .then(log('initial'))
 *  .then(res=>res.json())
 *  .then(log('json'))
 *  .catch(log('err'))
 * ```
 * In production, all those calls are washed away and nothing logs
 * @param title 
 */
export const log_dev =
  ( title: string = '' ) => 
  /**
   * Log something to console
   * @param thing
   * @param ...things
   */
  <T>
  ( thing: T, ...things: any[] ): T => 
  ( console.log
    ( title
    , thing
    , ...things
    )
  , thing
  )
/* tslint:enable:no-any no-console */

export const log_prod = ( title: string ) => identity

export const log = is_dev ? log_dev : log_prod

export default log