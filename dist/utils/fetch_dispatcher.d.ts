export interface Fetch {
    (input?: Request | string, init?: RequestInit): Promise<Response>;
}
export interface FetchPatcher extends Fetch {
}
export interface FetchPatcherEventLoad {
    type: 'loading' | 'success' | 'error';
    request: Request;
}
export interface FetchPatcherEventSuccess extends FetchPatcherEventLoad {
    type: 'success';
    request: Request;
    data: any;
}
export interface FetchPatcherEventError extends FetchPatcherEventLoad {
    type: 'error';
    request: Request;
    data: any;
    error: Error;
}
export declare type FetchPatcherEvent = FetchPatcherEventLoad | FetchPatcherEventError | FetchPatcherEventSuccess;
export interface FetchPatcherListener<E extends FetchPatcherEvent> {
    (event: E): void;
}
/**
 * Creates an equivalent to the native fetch,
 * but that dispatches events
 * @param _fetch
 */
export declare const fetch_dispatcher: (_fetch?: Fetch) => ((request?: string | Request | undefined, init?: (RequestInit & {
    invalidate?: boolean | undefined;
}) | undefined) => any) & {
    onSuccess: (listener: FetchPatcherListener<FetchPatcherEventSuccess>) => () => void;
    onError: (listener: FetchPatcherListener<FetchPatcherEventError>) => () => void;
    onLoad: (listener: FetchPatcherListener<FetchPatcherEventLoad>) => () => void;
    load: (request?: string | Request | undefined, init?: (RequestInit & {
        invalidate?: boolean | undefined;
    }) | undefined) => any;
};