
export const then = 
  <T>
  ( fn: (...args: any[]) => T ): Promise<T> => 
  Promise.resolve().then( fn )

export default then