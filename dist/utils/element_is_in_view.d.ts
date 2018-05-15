/**
 * Check if the node is visible in overflow container parent
 * @param node
 * @param parent
 * @param offset
 */
export declare const element_in_overflow: (node: HTMLElement, parent: Element | Document, offset?: number) => boolean;
/**
 * Check if the node is visible in document
 * @param node
 * @param offset
 */
export declare const element_in_window: (node: HTMLElement, offset?: number) => boolean;
/**
 * Detect if element is visible in viewport
 * @param node
 * @param overflow
 */
export declare const element_is_in_view: (node: HTMLElement, overflow?: boolean | undefined) => boolean;
