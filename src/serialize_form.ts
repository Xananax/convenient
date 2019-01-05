import { get_input_value, InputValue } from './get_input_value'
import is_dev from './is_dev';

export interface SerializedFormValues
  { [key: string]: InputValue | SerializedFormValues | (InputValue | SerializedFormValues)[] 
  }

export interface SerializedForm
  { name: string
  ; action: string
  ; method: string
  ; values: SerializedFormValues | null | any
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
 *  - data will be nested, mirroring fieldsets in your form, *if* the fieldsets are named
 *  - fields ending with brackets (`field[]`) will be set on arrays. Indexes can be specified `field[0]`
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
  ; const values = serialize_inputs_collection(form.elements)
  ; const ret = 
    { name: formName
    , action
    , method
    , values
    , enctype
    , target
    }
  ; return ret
  }

const isArrayInput = 
  ( name:string ) => 
  { const match = name.match(/(.*?)\[(\d*)\]/)
  ; if(!match)
    { return { name, index:0, isArrayElement:false }
    }
  ; const [ , _name, _index ] = match
  ; return { name:_name, index:parseInt(_index), isArrayElement:true }
  }

const setInData = 
  (inputName:string, value:any, data:any) =>
  { const { name, index, isArrayElement } = isArrayInput(inputName)
  ; if(isArrayElement)
    { console.log(name, index)
    ; data[name] = Array.isArray(data[name]) ? data[name] : []
    ; if ( isNaN(index) )
      { if ( !(`push` in data[name]) )
        { if(is_dev)
          {
          ;console.warn('you\'ve used the key `'+name+'` as an object and as an array')
          }
        }
        else
        {
        ; data[name].push(value)
        }
      }
      else
      { data[name][index] = value
      }
    }
    else
    {
    ; data[name] = value
    }
  }


/**
 * Serializes a collection of inputs (obtained with `form.elements` or `fieldset.elements`)
 * Returns data as a tree with keys named from the fieldset's names (if a fieldset is not named, it will not be considered)
 * @param fields A list of inputs
 * @param nested If false, data will be returned flat
 */
export const serialize_inputs_collection = 
  ( fields: HTMLFormControlsCollection, nested:boolean = true ): SerializedFormValues | null => 
  { const data = {}
  ; const { length } = fields
  ; let i = 0;
  ; let empty = true
  ; const fieldSets:HTMLFieldSetElement[] = []
  ; const not_fieldSets:HTMLInputElement[] = []
  ; while( i < length )
    {
    ; const input: HTMLInputElement | HTMLFieldSetElement = fields[i] as (HTMLInputElement | HTMLFieldSetElement)
    ; i++
    ; const { name } = input
    ; if(!name)
      { continue; 
      }
    ; if(input.nodeName === 'FIELDSET')
      { fieldSets.push(input as HTMLFieldSetElement)
      }
      else
      { not_fieldSets.push(input as HTMLInputElement)
      }
    }
  ; const inputs = nested ? not_fieldSets.filter( input => !fieldSets.some( fieldset => fieldset.contains(input) )) : not_fieldSets
  ; if(nested)
    {
    ; fieldSets.forEach( 
      ( fieldSet ) => 
      { const result = serialize_inputs_collection(fieldSet.elements)
      ; if(result)
        { setInData(fieldSet.name,result,data)
        ; empty = false
        }
      })
    }
  ; inputs.forEach(
    ( input ) => 
    { const value = get_input_value(input)
    ; if (value !== null)
      { setInData(input.name,value,data)
      ; empty = false
      }
    })
  ; if( empty )
    { return null
    }
  ; return data
  }

export default serialize_form