import { is_env_browser } from './is_env_browser'

const server_size =
  { width:  0
  , height: 0
  }

/**
 * 
 */
export const get_window_size = 
  is_env_browser ?
  () =>
  { const width =
    ( window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth
    )
  ; const height =
    ( window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
    )
  ; return { width, height }
  } : () => server_size

export default get_window_size