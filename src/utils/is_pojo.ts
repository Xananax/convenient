const proto = Object.prototype;
const gpo = Object.getPrototypeOf;

export const is_pojo = (obj: any): obj is object =>
  !(obj === null || typeof obj !== 'object') && gpo(obj) === proto;

export default is_pojo;
