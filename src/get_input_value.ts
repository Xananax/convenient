import { get_file_input_files, HTMLInputElementFile } from './get_file_input_files';

export type InputValue = 
  | string
  | number
  | boolean
  | File
  | File[] 

/**
 * Returns the value for a given field
 *  - files inputs will return an array of files (rather than a `FileList`)
 *  - if a file input does not have the `multiple` property, it will return a single file
 *  - checkboxes will return booleans
 *  - number and range inputs will return floats (i.e., numbers)
 *  - any field without a name will be skipped and not serialized
 *  - any button will be skipped
 * @param input 
 */
export const get_input_value = 
  ( input: HTMLInputElement ): InputValue | null =>
  { const { nodeName, name, type, value, checked } = input
  ; if ( !name || nodeName === 'BUTTON')
    { return null;
    }
  ; if ( type === 'checkbox' )
    { return !!checked
    }
  ; if ( typeof value === 'undefined' || value === '' )
    { return '';
    }
  ; if ( type === 'radio' )
    { if (!checked)
      { return  null
      }
    ; return value
    }
  ; if ( type === 'number' || type === 'range' )
    { if (!value)
      { return 0
      }
    ; return parseFloat(value)
    }
  ; if ( type === 'file')
    { const files = get_file_input_files(input as HTMLInputElementFile)
    ; if ( !files )
      { return null
      }
    ; return files
    }
  ; return value
  }

export default get_input_value