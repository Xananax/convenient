import { is_env_browser } from './is_env_browser'
const cache = {}
// tslint:disable-next-line:no-any no-empty

/**
 * loads an external script. Useful for loading google maps or other external APIs
 * @param url 
 * @param bypassCache 
 */
export const load_script =
  is_env_browser ?
  ( url: string
  , bypassCache = false
  ) => new Promise( ( resolve, reject ) => 
    { if ( !bypassCache && cache[url] )
      { return resolve(url)
      }
    ; const onLoad =
      () => 
      { cache[url] = true
      ; return resolve(url)
      }
    ; const script = document.createElement('script')
    ; script.type = 'text/javascript';
    ; if ('readyState' in script)
      { (script as any)['onreadystatechange'] = 
        () => 
        { if (script['readyState'] === 'loaded' || script['readyState'] === 'complete')
          { (script as any)['onreadystatechange'] = null
          ; cache[url] = true
          ; onLoad()
          }
        }
      }
      else
      { script.onload = onLoad
      ; (script as any).onerror = 
        ( evt: ErrorEvent | string ) =>
        { if(typeof evt === 'string')
          {
          ; reject( new Error(evt || `Could not load file`) )
          ; return
          }
        ; reject( new Error(evt.message || `Could not load file`) )
        }
      }
    ; script.src = url;
    ; document.getElementsByTagName('head')[0].appendChild(script);
    }
  ) : ( url: string, bypassCache = false ) => Promise.resolve(url)

export default load_script