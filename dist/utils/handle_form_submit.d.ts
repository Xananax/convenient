/// <reference types="react" />
import { SerializedForm } from './serialize_form';
import { FormEvent } from 'react';
export interface FormHandler {
    (serialized: SerializedForm): void;
}
/**
 * Creates a function that handles submit events.
 * The function:
 * - stops the event from propagating
 * - serializes the form inputs
 * - runs the provided callback with the serialized form
 * @param callback
 */
export declare const handle_form_submit: (callback: FormHandler) => (event: Event | FormEvent<HTMLFormElement>) => void;
