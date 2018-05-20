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
export declare const log_dev: (title?: string) => <T>(thing: T, ...things: any[]) => T;
export declare const log_prod: (title: string) => <T>(a: T) => T;
export declare const log: (title?: string) => <T>(thing: T, ...things: any[]) => T;
export default log;
