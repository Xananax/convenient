
/**
 * If true, the passed argument is a string
 * @param obj 
 */
export const is_string = 
// tslint:disable-next-line:no-any
  (obj: any): obj is string => 
  typeof obj === 'string';

export default is_string;
