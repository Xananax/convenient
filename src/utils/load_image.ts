import { is_env_browser } from './is_env_browser'
import { get_image_orientation, Orientation, ORIENTATION_SQUARE } from './get_image_orientation'

export interface ImageLoadReturnJSON
  { width: number
  ; height: number
  ; url: string
  ; ratioWidth: number
  ; ratioHeight: number
  ; orientation: Orientation
  }

export interface ImageLoadReturn extends ImageLoadReturnJSON
  { image: HTMLImageElement
  ; toJSON: () => ImageLoadReturnJSON
  }

const serverResponseJSON =
  { width: 0
  , height: 0
  , url: ''
  , ratioWidth: 1
  , ratioHeight: 1
  , orientation: ORIENTATION_SQUARE
  }

const serverResponse: ImageLoadReturn = 
  { image: {} as HTMLImageElement
  , ...serverResponseJSON
  , toJSON: () => serverResponseJSON
  }

/**
 * returns a promise with a loaded image and a few useful parameters, 
 * such as width, height, ratio, and orientation
 * 
 * This function has a custom toJSON method that removes non-serializable data
 * @param src 
 * @param useDecode if true, will use `img.decode()` to prevent the browser from slowing down while loading the image
 */
export const load_image = is_env_browser ?
  ( src: string, useDecode: boolean = true ): Promise<ImageLoadReturn> => new Promise( ( resolve, reject ) => 
  { const image = new Image()
  ; const onload = 
    () => 
    { const 
      { naturalHeight: height
      , naturalWidth: width
      } = image
    ; const orientation = get_image_orientation( width, height) 
    ; const ratioWidth = height / width
    ; const ratioHeight = width / height
    ; const url = image.src
    ; const json =
      { width
      , height
      , url
      , ratioWidth
      , ratioHeight
      , orientation
      }
    ; const ret = 
      { image
      , ...json
      , toJSON: () => json 
      }
    ; clean()
    ; return resolve(ret)
    }
  ; const onerror = 
    ( evt: ErrorEvent | string ) => 
    { clean()
    ; if(typeof evt === 'string')
      { reject(new Error(evt || 'could not load file'))
      ; return
      }
    ; reject(new Error(evt.message || 'could not load file'))
    }
  ; const clean = 
    () =>
    { 
    ; (image as any).onerror = null
    ; image.onload = null
    }
  ; (image as any).onerror = onerror
  ; image.src = src
  ; if ( useDecode && ( 'decode' in ( image ) ) )
    { image.src = src
    ; image.decode().then(onload).catch(onerror)
    }
    else
    { image.onload = onload
    }
  })
  : ( src: string ): Promise<ImageLoadReturn> => Promise.resolve(serverResponse)

export default load_image