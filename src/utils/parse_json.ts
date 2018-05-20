/**
 * parses json data
 * @param data 
 */
export const parse_json = 
  <T>( data: T ) => 
  { if ( typeof data !== 'string' )
    { return data
    }
    try { return JSON.parse(data) } 
    catch (e) { return data }
  }

export default parse_json