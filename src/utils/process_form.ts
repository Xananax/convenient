import { SerializedForm } from './serialize_form'
import { InputValue } from './get_input_value'

export interface STOP
  { stop: true }

export const stop: STOP = { stop: true }

export interface ValidationObserver<T>
  { ( key: string, value: InputValue, form: SerializedForm, skip: STOP ):  T | undefined | Promise<T | undefined>
  }

export interface Transformer extends ValidationObserver<any>
  {}

export interface Validator extends ValidationObserver<string>
  {}

export interface ValidatorErrorsDictionary
  { [key: string]: string }

export interface ValidatedForm extends SerializedForm
  { errors?: ValidatorErrorsDictionary
  }

export const runObserver = 
  <T>
  ( observer: ValidationObserver<T>, serialized: SerializedForm ) =>
  { const newValues: T = {} as T
  ; let oneKeyChanged = false
  ; return Object.keys(serialized.values)
    .map
    ( ( key ) => 
      ( ( doStop: any ) => 
        ( doStop === stop
        ? Promise.resolve(stop)
        : Promise.resolve()
          .then
          ( () => observer(key, serialized.values[key], serialized, stop) )
          .then
          ( ( response ) => 
            { if ( typeof response !== 'undefined' )
              { if ( response === stop as any )
                { return stop;
                }
              ; oneKeyChanged = true
              ; newValues[key] = response
              }
            ; return true
            }
          )
        )
      )
    )
    .reduce
    ( ( prev, curr ) => prev.then(curr)
    , Promise.resolve({})
    )
    .then
    ( () =>
      { if (oneKeyChanged)
        { return newValues
        }
      ; return null
      }
    )
  }

export const transform_form = 
  ( transform?: Transformer ) =>
  ( serialized: SerializedForm ) => 
  ( transform
  ? Promise
    .resolve()
    .then
    ( () => runObserver(transform, serialized) )
    .then
    ( ( retValue ) => 
      ( !!retValue
      ? { ...serialized, values: {...serialized.values, retValue } }
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
    .then
    ( () => runObserver(validate, serialized) )
    .then
    ( ( errors ) => 
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