import { load_script } from './load_script'

export interface GoogleMapsArgs 
  { latitude:  number
  , longitude: number
  , width:     number
  , height:    number
  , zoom:      number
  , token:     string
  }

const CALLBACK_NAME = 'google_map_api_loaded'

/**
 * Returns the google maps script url with the provided API key
 * @param API_KEY 
 */
export const get_maps_javascript_url = 
  ( API_KEY: string ) => 
  ( `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}` )

/**
 * Loads the google maps javascript file
 * @param API_KEY 
 * @param callback 
 */
export const load_google_maps_api = 
  ( API_KEY: string
  , callback?: Function
  ) =>
  { const url = get_maps_javascript_url(API_KEY)
  ; return load_script(url)
  }

export const googleMapsDefaultArgs: Partial<GoogleMapsArgs> =
  { zoom:   18
  , width:  720
  , height: 720
  }

/**
 * Returns a static image, good for embedding a non-interactive map
 * @param options 
 */
export const get_google_maps_url_static = 
  (options: Partial<GoogleMapsArgs>) => 
  { const 
    { longitude
    , latitude
    , zoom
    , token
    , width
    , height
    } = { ...googleMapsDefaultArgs, ...options } as GoogleMapsArgs
  ; const coordinates = [ latitude, longitude ].join(',')
  // tslint:disable-next-line:max-line-length
  ; const googleMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?markers=${coordinates}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&key=${token}`
  ; return googleMapsUrl
  }

/**
 * Returns an url for an embeddable google map
 * @param options 
 * @param search 
 */
export const get_google_maps_url = 
  ( { latitude: lat, longitude: lng, zoom: z }: Partial<GoogleMapsArgs>, search?: string ) =>
  ( `https://www.google.com/maps/search/${search}/@${lat},${lng},${z}z?q=${lat},${lng}&z=${z}&ll=${lat},${lng}`
  )