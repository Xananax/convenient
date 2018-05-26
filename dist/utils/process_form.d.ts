import { SerializedForm } from './serialize_form';
import { InputValue } from './get_input_value';
export interface STOP {
    stop: true;
}
export declare const stop: STOP;
export interface ValidationObserver<T> {
    (key: string, value: InputValue, form: SerializedForm, skip: STOP): T | undefined | Promise<T | undefined>;
}
export interface Transformer extends ValidationObserver<any> {
}
export interface Validator extends ValidationObserver<string> {
}
export interface ValidatorErrorsDictionary {
    [key: string]: string;
}
export interface ValidatedForm extends SerializedForm {
    errors?: ValidatorErrorsDictionary;
}
export declare const runObserver: <T>(observer: ValidationObserver<T>, serialized: SerializedForm) => Promise<T | null>;
export declare const transform_form: (transform?: Transformer | undefined) => (serialized: SerializedForm) => Promise<SerializedForm | {
    values: {
        retValue: any;
    };
    name: string;
    action: string;
    method: string;
    enctype: string;
    target: string;
}>;
export declare const validate_form: (validate?: Validator | undefined) => (serialized: SerializedForm) => Promise<ValidatedForm>;
export declare const process_form: (validate?: Validator | undefined, transform?: Transformer | undefined) => (serialized: SerializedForm) => Promise<ValidatedForm>;
export default process_form;
