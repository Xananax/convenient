// tslint:disable-next-line:no-any
export const is_numeric = (n: any): n is number =>
  !isNaN(parseFloat(n)) && isFinite(n);

export default is_numeric