import { SerializedForm, SerializedFormValues } from './serialize_form';
export interface Transformer {
    (input: SerializedForm): SerializedFormValues | void | null;
}
export interface Validator {
    (input: SerializedForm): ValidatorErrorsDictionary | void | null;
}
export interface ValidatorErrorsDictionary {
    [key: string]: string;
}
export interface ValidatedForm extends SerializedForm {
    errors?: ValidatorErrorsDictionary;
}
export declare const transform_form: (transform?: Transformer | undefined) => (serialized: SerializedForm) => Promise<SerializedForm>;
export declare const validate_form: (validate?: Validator | undefined) => (serialized: SerializedForm) => Promise<ValidatedForm>;
export declare const process_form: (validate?: Validator | undefined, transform?: Transformer | undefined) => (serialized: SerializedForm) => Promise<ValidatedForm>;
export default process_form;
