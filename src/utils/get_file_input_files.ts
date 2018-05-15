import { arrayLike_to_array } from './arrayLike_to_array'

/**
 * Returns an array of files for a given FileList, or null if the array is empty
 * @param files a FileList, presumably from a file input component
 * @param first if true, will only return the first file
 */
export function fileList_to_array( files: FileList, first?: boolean ): File[] | null;
export function fileList_to_array( files: FileList, first: true ): File | null;
export function fileList_to_array( files: FileList, first: false ): File[] | null;
export function fileList_to_array( files: FileList, first?: boolean ): File[] | File | null
  { const _files = arrayLike_to_array(files)
  ; if ( !files.length )
    { return null
    }
  ; const ret = 
    ( first
    ? files[0]
    : _files
    )
  ; return ret
  }

export const empty_files: File[] = []

/**
 * extract files from the input. Returns a single file if the input doesn't have the 'multiple' flag.
 * Returns null if no files were found
 * @param input a file input
 */
export const get_file_input_files = 
  ( input: HTMLInputElement ) => 
  { const 
    { multiple
    , files
    } = input
  ; if ( files )
    { const single = !!!multiple
    ; const ret = fileList_to_array( files, single )
    ; return ret
    }
  ; return ( multiple
    ? empty_files
    : null
    )
  }