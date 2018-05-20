/**
 * Returns a string's extension
 * @param filename 
 */
export const get_file_extension = 
  ( filename: string ) => 
  ( filename 
  ? filename.substring(filename.lastIndexOf('.') + 1).toLowerCase().trim()
  : ''
  )

export default get_file_extension