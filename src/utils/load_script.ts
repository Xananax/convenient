const cache = {}
const default_callback = (arg:any)=>{}

export const load_script =
  ( url:string
  , callback:Function=default_callback
  , bypassCache=false
  ) =>
  { if (!bypassCache && cache[url])
    { return callback(url)
    }
  ; if (!document)
    { return; //TODO: do something in node env?
    }
  ; const script = document.createElement("script")
  ; script.type = "text/javascript";
  ; if ('readyState' in script)
    { script['onreadystatechange'] = 
      () => 
      { if (script['readyState'] == "loaded" || script['readyState'] == "complete")
        { script['onreadystatechange'] = null
        ; cache[url] = true
        ; callback(url)
        }
      }
    }
    else 
    { script.onload = () => 
      { cache[url] = true
      ; callback(url)
      }
    }
  ; script.src = url;
  ; document.getElementsByTagName("head")[0].appendChild(script);
  }