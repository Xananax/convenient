export declare const root_object: any;
/**
 * Sets a property on the global object. That is `window` in browser environments, `process` in node, etc
 * @param name
 * @param thing
 */
export declare const set_global: (name: string, thing: any) => any;
/**
 * Retrieves a property from the global object (`window` in browser environments, `process` in node, etc)
 * @param name
 */
export declare const get_global: (name: string) => any;
export declare const make_global: (name: string, thing: any) => any;
export default set_global;
