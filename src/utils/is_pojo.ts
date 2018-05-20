const proto = Object.prototype;
const gpo = Object.getPrototypeOf;

/**
 * check if the argument passed is a plain javascript object (pojo)
 * @param obj 
 */
export const is_pojo = 
  // tslint:disable-next-line:no-any
  ( obj: any ): obj is object =>
  (! ( obj === null || typeof obj !== 'object' )
  && ( gpo(obj) === proto )
  )

export default is_pojo;
