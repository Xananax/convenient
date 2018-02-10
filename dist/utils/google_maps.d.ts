import { DeferredPromise } from '../main';
export interface GoogleMapsArgs {
    latitude: number;
    longitude: number;
    width: number;
    height: number;
    zoom: number;
    token: string;
}
export declare const googleLoaded: DeferredPromise<void>;
export declare const get_maps_javascript_url: (API_KEY: string) => string;
export declare const load_google_maps_api: (API_KEY: string, callback?: Function | undefined) => DeferredPromise<void>;
export declare const defaultArgs: Partial<GoogleMapsArgs>;
export declare const get_google_maps_url_static: (options: Partial<GoogleMapsArgs>) => string;
export declare const get_google_maps_url: ({ latitude: lat, longitude: lng, zoom: z }: Partial<GoogleMapsArgs>, search?: string | undefined) => string;
