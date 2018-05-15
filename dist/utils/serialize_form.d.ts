export interface SerializedForm {
    name: string;
    action: string;
    method: string;
    values: {
        [key: string]: string | number | File | File[];
    };
    enctype: string;
    target: string;
}
export declare const serialize_form: (form: HTMLFormElement) => SerializedForm;
