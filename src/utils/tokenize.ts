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

export type Token =
  | TextToken
  | LinebreakToken
  | TagToken

export const TAG = 
  ( tag: string ) => 
  { const text = tag.slice(1)
  ; return { type: 'TAG', text, url: text }
  }

export const TEXT = 
  ( text: string ) => 
  ( { type: 'TEXT', text } )

export const LINEBREAK = { type: 'LINEBREAK' }

export const makeToken = 
  ( word: string ) => 
  ( word[0] === '#'
  ? TAG(word)
  : TEXT(word)
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
          .map(makeToken)
      , LINEBREAK
      ]
    , tokenArr
    )
  )