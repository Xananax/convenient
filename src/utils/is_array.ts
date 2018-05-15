// tslint:disable-next-line:no-any
export const is_array = (obj: any): obj is any[] =>
  obj !== null && Array.isArray(obj);

export default is_array