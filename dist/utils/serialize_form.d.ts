export interface SerializedFormValues {
    [key: string]: string | number | File | File[];
}
export interface SerializedForm {
    name: string;
    action: string;
    method: string;
    values: SerializedFormValues;
    enctype: string;
    target: string;
}
/**
 * Extracts all the fields from an html form, gets all their values,
 * and returns the results.
 * Some magic that happens:
 *  - files inputs will return an array of files (rather than a `FileList`)
 *  - if a file input does not have the `multiple` property, it will return a single file
 *  - checkboxes will return booleans
 *  - number and range inputs will return floats (i.e., numbers)
 *  - any field with an undefined value, or without a name will be skipped and not serialized
 *  - any button will be skipped
 * @param form
 */
export declare const serialize_form: (form: HTMLFormElement) => SerializedForm;
