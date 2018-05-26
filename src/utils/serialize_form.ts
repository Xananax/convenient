import { get_input_value, InputValue } from './get_input_value'

export interface SerializedFormValues
  { [key: string]: InputValue
  }

export interface SerializedForm
  { name: string
  ; action: string
  ; method: string
  ; values: SerializedFormValues
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
  { 
  ; const action = form.getAttribute('action') || ''
  ; const formName = form.getAttribute('name') || ''
  ; const enctype = form.getAttribute('enctype') || ''
  ; const method = form.getAttribute('method') || ''
  ; const target = form.getAttribute('target') || ''
  ; const inputs = Array.prototype.slice.call(form.elements)
  ; const serialized = {}
  ; inputs.forEach( (input: HTMLInputElement ) => {
      const value = get_input_value(input)
      if (value !== null) {
        serialized[input.name] = value
      }
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