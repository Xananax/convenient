import { serialize_form, SerializedForm } from './serialize_form'

export interface FormHandler
  { ( serialized: SerializedForm ): void
  }

export const handle_form_submit = 
  ( callback: FormHandler ) =>
  ( event: Event ) =>
  ( callback
    ( serialize_form
      ( event.target as HTMLFormElement
      )
    )
  )