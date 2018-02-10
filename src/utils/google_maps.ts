import { make_global }      from './make_global'
import { deferred_promise,  } from './deferred_promise'
import { load_script }      from './load_script'
import { DeferredPromise } from '../main';

export interface GoogleMapsArgs 
  { latitude:  number
  , longitude: number
  , width:     number
  , height:    number
  , zoom:      number
  , token:     string
  }

export const googleLoaded:DeferredPromise<void> = deferred_promise()

const CALLBACK_NAME = 'google_map_api_loaded'

make_global
  ( CALLBACK_NAME
  , () => googleLoaded.resolve()
  )

export const get_maps_javascript_url = 
  ( API_KEY: string ) => 
  ( `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}` )

export const load_google_maps_api = 
  ( API_KEY: string
  , callback?: Function
  ) =>
  { const url = get_maps_javascript_url(API_KEY)
  ; load_script(url, callback)
  ; return googleLoaded
  }

export const defaultArgs: Partial<GoogleMapsArgs> =
  { zoom:   18
  , width:  720
  , height: 720
  }

export const get_google_maps_url_static = 
  (options: Partial<GoogleMapsArgs>) => 
  { const 
    { longitude
    , latitude
    , zoom
    , token
    , width
    , height
    } = { ...defaultArgs, ...options } as GoogleMapsArgs
  ; const coordinates = [ latitude, longitude ].join(',')
  // tslint:disable-next-line:max-line-length
  ; const googleMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?markers=${coordinates}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&key=${token}`
  ; return googleMapsUrl
  }

export const get_google_maps_url = 
  ( { latitude: lat, longitude: lng, zoom: z }: Partial<GoogleMapsArgs>, search?: string ) =>
  ( `https://www.google.com/maps/search/${search}/@${lat},${lng},${z}z?q=${lat},${lng}&z=${z}&ll=${lat},${lng}`
  )