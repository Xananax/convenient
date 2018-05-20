import { is_env_browser } from './is_env_browser'
import { no_op } from './no_op'

/**
 * If true, the browser supports passive events
 */
let passive_events_supported = false;

if(is_env_browser)
{ try
  { const opts = Object.defineProperty({}, 'passive', 
    { get() 
      { passive_events_supported = true
      }
    })
  ; window.addEventListener('test', no_op, opts);
  }
  catch (e) 
  { //
  }
  window.removeEventListener('test', no_op);
}

export { passive_events_supported }