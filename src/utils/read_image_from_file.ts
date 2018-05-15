import { get_file_extension } from './get_file_extension'
import { is_env_browser } from './is_env_browser'
import { load_image, ImageLoadReturn, ImageLoadReturnJSON } from './load_image'

export interface ImageReadReturnJSON
  { name: string
  ; extension: string
  }

export interface ImageReadReturnNoImage extends ImageReadReturnJSON
  { file: File
  ; toJSON: () => ImageReadReturnJSON
  }

export interface ImageReadReturn extends ImageLoadReturn
  { free: () => void
  ; file: File
  ; name: string
  ; extension: string
  ; toJSON: () => ImageReadReturnJSON & ImageLoadReturnJSON
  }

const serverResponse: ImageReadReturnNoImage = 
  { file: {} as File
  , name: ''
  , extension: ''
  , toJSON: () => ({ name: '', extension: ''})
  }

/**
 * If the provided file is an image, this function will load the image
 * and return a set of useful properties.
 * If not, it will return the file, with extracted name and extension strings
 * 
 * This function has a custom toJSON method that removes non-serializable data
 * @param file 
 */
export const readImageFromFile = is_env_browser ?
  (file: File): Promise<ImageReadReturnNoImage|ImageReadReturn> => new Promise( ( resolve, reject ) => 
  { if (!file)
    { return reject(new Error('no file provided'))
    }
  ; const name = file.name
  ; const extension = get_file_extension(name)
  ; const isImage = /gif|png|jpe?g/.test(extension)
  ; if (!isImage)
    { const ret = { file, name, extension, toJSON: () => ({ name, extension }) }
    ; return resolve(ret)
    }
  ; window.URL = window.URL || window['webkitURL'];
  ; const src = window.URL.createObjectURL(file);
  ; const free = () => window.URL.revokeObjectURL( src );
  ; load_image(src)
    .then( 
      ( { toJSON: prevToJSON, ...props } ) => 
      { const ret =
        { ...props
        , free
        , file
        , name
        , extension
        , toJSON: () => ({...prevToJSON(), name, extension })
        }
      ; resolve(ret)
      }
    )
    .catch(reject)
  }) : (file?: File): Promise<ImageReadReturnNoImage|ImageReadReturn> => Promise.resolve(serverResponse) 