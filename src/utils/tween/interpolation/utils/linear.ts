export const linear =
  ( p0:number, p1:number, t:number ) => 
  ( (p1 - p0) * t + p0 )

export default linear