import { arrayLike_to_array } from './arrayLike_to_array'
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

export const serialize_form = 
  ( form: HTMLFormElement ): SerializedForm => 
  { const url = window.location.protocol + '//' + window.location.host
  ; const regex = new RegExp('^' + url + '/?', 'ig')
  ; const 
    { elements
    , name: formName
    , action: _action
    , method
    , enctype
    , target
    } = form
  ; const action = _action.replace(regex, '')
  ; const inputs = arrayLike_to_array(elements)
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
    { name: formName
    , action
    , method
    , values: serialized
    , enctype
    , target
    }
  ; return ret
  }