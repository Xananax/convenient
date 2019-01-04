import { SerializedForm } from './serialize_form'

export interface Transformer
  { ( serialized: SerializedForm ): SerializedForm | undefined | void | Promise<SerializedForm | undefined | void>
  }

export interface Validator
  {  ( serialized: SerializedForm, errors: ValidatorErrorsDictionary ): void
  }

export interface ValidatorErrorsDictionary
  { [key: string]: string }

export interface ValidatedForm extends SerializedForm
  { errors?: ValidatorErrorsDictionary
  }

export const transform_form = 
  ( transform?: Transformer ) =>
  ( serialized: SerializedForm ) => 
  ( transform
  ? Promise
    .resolve()
    .then
    ( () => transform(serialized) )
    .then
    ( ( retValue ) => 
      ( !!retValue
      ? { ...serialized, ...retValue }
      : serialized
      )
    )
  : Promise.resolve( serialized )
  )

export const validate_form = 
  ( validate?: Validator ) =>
  ( serialized: SerializedForm, errors: ValidatorErrorsDictionary = {} ): Promise<ValidatedForm> => 
  ( validate
  ? Promise
    .resolve()
    .then
    ( () => validate(serialized, errors) )
    .then
    ( () => 
      ( Object.keys(errors).length > 0
      ? { ...serialized, errors }
      : serialized
      )
    )
  : Promise.resolve( serialized )
  )

export const process_form = 
  ( {validate, transform}: {validate?: Validator, transform?: Transformer} ) =>
  { const _validate = validate_form(validate)
  ; const _transform = transform_form(transform)
  ; const process = 
    ( serialized: SerializedForm ) => 
    ( Promise.resolve(serialized)
      .then(_transform)
      .then(_validate)
    )
  ; return process
  }

export default process_form