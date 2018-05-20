/**
 * is true if the environment is production
 */
export const is_prod =  ( typeof process !== 'undefined' ) && process.env && process.env.NODE_ENV === 'production'
export const is_dev = !is_prod
export default is_prod