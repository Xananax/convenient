export const get_file_extension = 
  ( filename: string ) => 
  ( filename.substring(filename.lastIndexOf('.') + 1).toLowerCase() )