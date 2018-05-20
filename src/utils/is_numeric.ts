/**
 * checks if the passed argument is numeric
 * @param numeric
 */
export const is_numeric = 
  // tslint:disable-next-line:no-any
  ( numeric: any ): numeric is number =>
  (  !isNaN(parseFloat(numeric))
  && isFinite(numeric)
  )

export default is_numeric