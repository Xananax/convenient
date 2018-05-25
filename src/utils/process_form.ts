import { SerializedForm, SerializedFormValues } from './serialize_form'

export interface Transformer
  { ( input: SerializedForm ): SerializedFormValues | void | null
  }

export interface Validator
  { ( input: SerializedForm ):  ValidatorErrorsDictionary | void | null
  }

export interface ValidatorErrorsDictionary
  { [key: string]: string }

export interface ValidatedForm extends SerializedForm
  { errors?: ValidatorErrorsDictionary
  }

export const transform_form = 
  ( transform?: Transformer ) =>
  ( serialized: SerializedForm ): Promise<SerializedForm> => 
  ( transform
  ? Promise
    .resolve()
    .then( () => transform( serialized ) )
    .then(
      ( retValue ) => 
      ( !!retValue
      ? { ...serialized, values: retValue }
      : serialized
      )
    )
  : Promise.resolve( serialized )
  )

export const validate_form = 
  ( validate?: Validator ) =>
  ( serialized: SerializedForm ): Promise<ValidatedForm> => 
  ( validate
  ? Promise
    .resolve()
    .then( () => validate( serialized ) )
    .then(
      ( errors ) => 
      ( !!errors
      ? { ...serialized, errors }
      : serialized
      )
    )
  : Promise.resolve( serialized )
  )

export const process_form = 
  ( validate?: Validator, transform?: Transformer ) =>
  { const _validate = validate_form(validate)
  ; const _transform = transform_form(transform)
  ; const process = 
    ( serialized: SerializedForm ) =>
    Promise.resolve(serialized)
      .then(_transform)
      .then(_validate)
  ; return process
  }

export default process_form