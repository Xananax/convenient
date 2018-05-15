import { is_env_browser } from './is_env_browser'
import { get_image_orientation, Orientation, square } from './get_image_orientation'

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
  , orientation: square
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
 */
export const load_image = is_env_browser ?
  ( src: string ): Promise<ImageLoadReturn> => new Promise( ( resolve, reject ) => 
  { const image = new Image()
  ; image.onload = 
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
    ; return resolve(ret)
    }
  ; image.onerror = 
    ( evt ) => 
    { reject(new Error('could not load file'))
    }
  ; image.src = src
  })
  : ( src: string ): Promise<ImageLoadReturn> => Promise.resolve(serverResponse)