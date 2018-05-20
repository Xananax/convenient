import { get_file_input_files } from './get_file_input_files';

export interface SerializedForm
  { name: string
  ; action: string
  ; method: string
  ; values: 
    { [key: string]: string | number | File | File[]
    }
  ; enctype: string
  ; target: string
  }

  
/**
 * Extracts all the fields from an html form, gets all their values,
 * and returns the results.
 * Some magic that happens:
 *  - files inputs will return an array of files (rather than a `FileList`)
 *  - if a file input does not have the `multiple` property, it will return a single file
 *  - checkboxes will return booleans
 *  - number and range inputs will return floats (i.e., numbers)
 *  - any field with an undefined value, or without a name will be skipped and not serialized
 *  - any button will be skipped
 * @param form
 */
export const serialize_form = 
  ( form: HTMLFormElement ): SerializedForm => 
  { const 
    { elements
    , method
    , enctype
    , target
    } = form
  ; const action = form.getAttribute('action') || ''
  ; const name = form.getAttribute('name') || ''
  ; const inputs = Array.prototype.slice.call(elements)
  ; const serialized = {}
  ; inputs.forEach( 
    ( input: HTMLInputElement ) =>
    { const { nodeName, name, type, value, checked } = input
    ; if ( !name || nodeName === 'BUTTON')
      { return;
      }
    ; if ( type === 'checkbox' )
      { serialized[name] = !!checked
      ; return
      }
    ; if ( typeof value === 'undefined' || value === '' )
      { return
      }
    ; if ( type === 'radio' )
      { if (!checked)
        { return 
        }
      ; serialized[name] = value
      ; return
      }
    ; if ( type === 'number' || type === 'range' )
      { if (!value)
        { serialized[name] = 0
        ; return
        }
      ; serialized[name] = parseFloat(value)
      ; return
      }
    ; if ( type === 'file' )
      { const files = get_file_input_files(input)
      ; if ( !files )
        { return
        }
      ; serialized[name] = files
      ; return
      }
    ; serialized[name] = value
    })
  ; const ret = 
    { name
    , action
    , method
    , values: serialized
    , enctype
    , target
    }
  ; return ret
  }