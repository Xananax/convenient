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

export const is_image = 
  ( file: File, extension: string ) =>
  ( file && 
    ( ( file.type && file.type.split('/')[0] === 'image' ) || /gif|png|jpe?g|tiff?|webp|bmp|ico|svg/.test(extension)
    )
  )

/**
 * If the provided file is an image, this function will load the image
 * and return a set of useful properties.
 * If not, it will return the file, with extracted name and extension strings
 * 
 * This function has a custom toJSON method that removes non-serializable data
 * @param file 
 * @param isImage a function that receives the file and the extension, and has
 * to return a boolean if the provided file is an image. If `true` is passed, a default function will be used,
 * which checks for mime-type that begins with `image/` and/or most common extensions (gif/png/jpg...)
 * @param useDecode if true, will use `img.decode()` to prevent the browser from slowing down while loading the image
 */
export const read_image_from_file = is_env_browser ?
  ( file: File
  , isImage?: ( file: File, extension: string ) => boolean | boolean
  , useDecode: boolean = true
  ): Promise<ImageReadReturnNoImage|ImageReadReturn> => 
  { if ( typeof isImage === 'boolean' && isImage === true )
    { isImage = is_image
    }
  ; return new Promise( 
    ( resolve, reject ) => 
    { if (!file)
      { return reject(new Error('no file provided'))
      }
    ; const name = file.name
    ; const extension = get_file_extension(name)
    ; if (isImage && !isImage(file, extension))
      { const ret = { file, name, extension, toJSON: () => ({ name, extension }) }
      ; return resolve(ret)
      }
    ; window.URL = window.URL || window['webkitURL'];
    ; const src = window.URL.createObjectURL(file);
    ; const free = () => window.URL.revokeObjectURL( src );
    ; load_image( src, useDecode && extension !== 'svg' )
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
    }
  )
  } : (file?: File): Promise<ImageReadReturnNoImage|ImageReadReturn> => Promise.resolve(serverResponse) 