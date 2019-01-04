import { deep_get } from './deep_get'

const getObj = () => (
  { a: 
    { b: 
      { z: 12 }
    , c: 
      { d: 'foo' }
    }
  , d:
    { e: false }
  , f:
    [ { name: 'nameA', birthplace: { town: 'karlsruhe'} }
    , { name: 'nameB', birthplace: { town: 'karlsruhe'} }
    ]
  })

describe( 'deep_get', () => 
  { it( 'should return a value depending on the given path', () => 
    { const obj = getObj()
    ; const result = deep_get(obj, 'a.b.z')
    ; expect(result).toEqual(12)
    })
  ; it( 'should return a default value if the given path doesn\'t work', () => 
    { const obj = getObj()
    ; const result = deep_get(obj, 'a.d.z', 'def')
    ; expect(result).toEqual('def')
    })
  ; it( 'should work with wildcards', () => 
    { const obj = getObj()
    ; const result = deep_get(obj, 'f.*.name')
    ; expect(result).toBeInstanceOf(Array)
    ; expect(result[0]).toEqual('nameA')
    ; expect(result[1]).toEqual('nameB')
    })
  })