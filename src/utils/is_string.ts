export const is_string = 
  (obj: any): obj is string => 
  typeof obj == 'string';

export default is_string;
