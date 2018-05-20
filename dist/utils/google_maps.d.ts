export interface GoogleMapsArgs {
    latitude: number;
    longitude: number;
    width: number;
    height: number;
    zoom: number;
    token: string;
}
/**
 * Returns the google maps script url with the provided API key
 * @param API_KEY
 */
export declare const get_maps_javascript_url: (API_KEY: string) => string;
/**
 * Loads the google maps javascript file
 * @param API_KEY
 * @param callback
 */
export declare const load_google_maps_api: (API_KEY: string, callback?: Function | undefined) => Promise<{}>;
export declare const defaultArgs: Partial<GoogleMapsArgs>;
/**
 * Returns a static image, good for embedding a non-interactive map
 * @param options
 */
export declare const get_google_maps_url_static: (options: Partial<GoogleMapsArgs>) => string;
/**
 * Returns an url for an embeddable google map
 * @param options
 * @param search
 */
export declare const get_google_maps_url: ({ latitude: lat, longitude: lng, zoom: z }: Partial<GoogleMapsArgs>, search?: string | undefined) => string;
