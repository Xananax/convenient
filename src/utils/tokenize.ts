export interface TextToken 
  { type: 'TEXT'
  ; text: string
  }

export interface LinebreakToken
  { type: 'LINEBREAK'
  }

export interface TagToken
  { type: 'TAG'
  ; text: string
  ; url:  string
  }

export interface EmailToken
  { type: 'EMAIL'
  ; text: string
  ; url:  string
  }

export interface URLToken
  { type: 'URL'
  ; text: string
  ; url:  string
  ; external?: boolean
  }

export interface PhoneToken
  { type: 'PHONE'
  ; text: string
  ; url:  string
  }

export type Token =
  | TextToken
  | LinebreakToken
  | TagToken
  | EmailToken
  | URLToken
  | PhoneToken

export const TOKEN_TAG = 
  ( tag: string ) => 
  { const text = tag.slice(1)
  ; return { type: 'TAG', text, url: text }
  }

export const TOKEN_TEXT = 
  ( text: string ) => 
  ( { type: 'TEXT', text } )

export const TOKEN_LINEBREAK = { type: 'LINEBREAK' }

export const word_to_token = 
  ( word: string ) => 
  ( word[0] === '#'
  ? TOKEN_TAG(word)
  : TOKEN_TEXT(word)
  )

/**
 * Takes a string and returns an array
 * of token. A token is an object of signature:
 * ```js
 * {type:string,text?:string,url?:string}
 * ```
 * Where `type` can be 'TEXT', 'TAG' or 'LINEBREAK'
 * @param text the original text
 * @param tokenArr optionally, an array to append to
 */
export const tokenize = 
  ( text: string
  , tokenArr: 
    ( { type: 'LINEBREAK' }
    | { type: 'TEXT'
      , text: string
      }
    | { type: 'TAG'
      , text: string
      , url: string
      }
    )[] = [] 
  ) =>
  ( ( text || '')
    .replace(/ +/, '')
    .split(/\n/)
    .reduce
    ( ( tokens, line ) => 
      [ ... tokens
      , ... line
          .split(/\s+/)
          .filter(Boolean)
          .map(word_to_token)
      , TOKEN_LINEBREAK
      ]
    , tokenArr
    )
  )

export default tokenize