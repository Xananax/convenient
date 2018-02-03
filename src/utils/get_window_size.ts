export const get_window_size = 
  () =>
  { if( !window )
    { return (
      { width:0
      , height:0
      })
    }
  ; const width =
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
  }

export default get_window_size