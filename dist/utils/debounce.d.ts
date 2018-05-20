/**
 * Ensures that the passed function gets called only once even if it runs multiple times under a specified delay
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param func
 * @param wait
 * @param immediate
 */
export declare const debounce: <F extends Function>(func: F, wait?: number, immediate?: boolean) => F;
export default debounce;
