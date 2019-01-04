/**
 * Checks if the passed object is an array
 * @param obj 
 */
export const is_array = 
  // tslint:disable-next-line:no-any
  (obj: any): obj is any[] =>
  ( !!obj && Array.isArray(obj) )

export default is_array