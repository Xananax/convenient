export const regexp_escape = 
  ( s: string ) => 
  s.replace( /[-\/\\^$*+?.()|[\]{}]/g, '\\$&' )

export default regexp_escape