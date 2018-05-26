import { SerializedForm } from './serialize_form';
export interface Transformer {
    (serialized: SerializedForm): SerializedForm | undefined | void | Promise<SerializedForm | undefined | void>;
}
export interface Validator {
    (serialized: SerializedForm, errors: ValidatorErrorsDictionary): void;
}
export interface ValidatorErrorsDictionary {
    [key: string]: string;
}
export interface ValidatedForm extends SerializedForm {
    errors?: ValidatorErrorsDictionary;
}
export declare const transform_form: (transform?: Transformer | undefined) => (serialized: SerializedForm) => Promise<SerializedForm>;
export declare const validate_form: (validate?: Validator | undefined) => (serialized: SerializedForm, errors?: ValidatorErrorsDictionary) => Promise<ValidatedForm>;
export declare const process_form: ({ validate, transform }: {
    validate?: Validator | undefined;
    transform?: Transformer | undefined;
}) => (serialized: SerializedForm) => Promise<ValidatedForm>;
export default process_form;
