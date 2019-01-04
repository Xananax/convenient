import 
  { CreateElement
  } from './types'

import
  { InputHTMLAttributes
    , ReactNode
    , AllHTMLAttributes
  } from 'react'
  
import { SerializedFormValues } from '../../serialize_form';

export type MultipleInputItem = 
  | string 
  | number 
  | [ string|number
    , string|number ] 
  | { value: string|number
    , label: string 
    } 

export interface InputProperties<T> extends InputHTMLAttributes<T>
  { errors?: { [ key: string ]: string[] | string }
  ; values: SerializedFormValues
  ; label: string
  ; items: MultipleInputItem
  ; wrapperTag: string
  ; showPlaceholder: boolean
  }

let ids = 0

export const getId = 
  ({ id, name, type }: Partial<InputHTMLAttributes<any>> ) => 
  ( id 
  ? id
  : type
  ? `input-${type}-${ids++}`
  : name
  ? `input-${name}-${ids++}`
  : `input-${ids++}`
  )

export const getLabel =
({ name, label }: Partial<InputProperties<any>> ) => 
( label
? label
: name
)

export const classes = 
( prefix: string ) =>
( { className, type }: Partial<InputHTMLAttributes<any>> ) => 
( ( className && prefix
  ? `${prefix} ${prefix}-${className} `
  : prefix
  ? `${prefix} `
  : ''
  )
+ `${prefix}-type-${type}`
)

export const wrapperClasses = classes('input-wrapper')
export const labelClasses = classes('input-label')
export const errorClasses = classes('input-error')
export const labelTextClasses = classes('input-label-text')

export const InputTypeHidden =
  ( el: CreateElement) =>
  ( props: Partial<InputProperties<'hidden'>> ) => 
  ( el( 'input', props ) )

export const InputGeneric = 
  ( el: CreateElement ) => 
  ( props: Partial<InputHTMLAttributes<any>> ) => 
  ( el( 'input', props ) )

export const Label =
  ( el: CreateElement ) =>
  ( id: string, className: string, props: Partial<InputHTMLAttributes<any>>, ...children: ReactNode[] ) =>
  ( el
    ( 'label'
    , { className
      , id: `${id}-label`
      , htmlFor: id
      , children
      }
    )
  )

export const Container =
  ( el: CreateElement ) =>
  ( props: Partial<AllHTMLAttributes<'div'>>, tag: string = 'div', className?: string ) =>
  ( className && props.className
  ? el( tag, { ...props, className: [props.className, className].join(' ')} ) 
  : className
  ? el( tag, { ...props, className } ) 
  : el( tag, props ) 
  )

export const normalizeInputProps = 
( { type
  , errors
  , items
  , values
  , showPlaceholder
  , placeholder: _placeholder
  , wrapperTag
  , ...props
  }: InputProperties<any>
  ) => 
  { const name = props.name
  ; if ( typeof name === 'undefined' )
  { throw new Error('name has to be provided')
  }
  ; const value = 
    ( !(name in values) || typeof values[name] === 'undefined'
    ? ''
    : values[name]
    )
  ; const isCheckable = type === 'checkbox' || type === 'radio'
  ; const valueLabel = 
    ( isCheckable && props.onChange
    ? 'checked' 
    : isCheckable
    ? 'defaultChecked'
    : props.onChange
    ? 'value'
    : 'defaultValue'
    )
  ; const id = getId(props)
  ; const tag = wrapperTag || 'div'
  ; const className = labelClasses(props) 
  ; const labelClass = labelClasses(props)
  ; const errorClass = errorClasses(props)
  ; const error = errors ? errors[ name ] : null
  ; const placeholder = 
    ( showPlaceholder
    ? _placeholder
    : undefined
    )
  ; const inputProps = 
    { ...props
    , [valueLabel]: value
    , type
    , id
    , placeholder
  }
  ; const returnProps = 
    { tag
    , isCheckable
    , className
    , labelClass
    , errorClass
    , error
    , id
    , inputProps
    }
  ; return returnProps
  }

export const FormControl = 
  ( el: CreateElement ) => 
  { const _InputTypeHidden = InputTypeHidden(el)
  //; const _InputGeneric = InputGeneric(el)
  ; const _Label = Label(el)
  ; const Control = 
    ( _props: InputProperties<any>
    ) => 
    { const 
      { tag
      //, isCheckable
      , className
      , labelClass
      //, errorClass
      //, error
      , id
      , inputProps: props
      } = normalizeInputProps(_props) 
    ; const type = props.type
    ; if ( type === 'hidden')
      { return _InputTypeHidden(props)
      }
    /** 
     * 
     ; const errorsElements = 
     ( error && error.length 
      ? Array.isArray(error)
      ?  error.map
      ( ( err: string ) => 
      ( _Label
        ( id
          , errorClass
          , props
          , el
          ( 'span'
          , null
          , err
          )
          )
          )
          )
          : _Label( id, errorClass, props, el('span', null, error))
          : false
          )
    */
    ; if ( type === 'select' || type === 'radio' )
      { ; return el
        ( tag
        , { className
          , children: _Label
          }
        )
      }
    ; const span = el
      ( 'span'
      , { className: labelTextClasses(props) + (type === 'checkbox' || type === 'radio' ? ' checkable' : '')
        , children: getLabel(props) 
        }
      )
    ; const control = el
      ( tag
      , { className
        , children:
          ( type === 'checkbox'
          ? _Label( id, labelClass, props, el('input', props ), span )
          : _Label( id, labelClass, props, span, el('input', props ) )
          )
        }
      )
    ; return control
    }
  ; return Control
  }