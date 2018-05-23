/**
 * Returns a string's extension
 * @param filename 
 */
export const get_file_extension = 
  ( filename: string ) => 
  { if (!filename)
    { return ''
    }
  ; const index = filename.lastIndexOf('.')
  ; if (index <= 0)
    { return '' }
  ; return filename.substring(index + 1).toLowerCase().trim() 
  }

export default get_file_extension