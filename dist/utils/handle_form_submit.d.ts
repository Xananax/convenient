import { SerializedForm } from './serialize_form';
export interface FormHandler {
    (serialized: SerializedForm): void;
}
export declare const handle_form_submit: (callback: FormHandler) => (event: Event) => void;
