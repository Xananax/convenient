import { deep_set } from './deep_set'

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

describe( 'deep_set', () => 
  { it( 'should set a deeply nested object', () => 
    { const obj = getObj()
    ; const obj2 = deep_set(obj, 'a.b.z', 13)
    ; expect(obj2).toHaveProperty('a')
    ; expect(obj2.a).toHaveProperty('b')
    ; expect(obj2.a.b).toHaveProperty('z')
    ; expect(obj2.a.b.z).toEqual(13)
    })
  ; it( 'should not modify the original object', () => 
    { const obj = getObj()
    ; const obj2 = deep_set(obj, 'a.b.z', 13)
    ; expect(obj).toHaveProperty('a')
    ; expect(obj.a).toHaveProperty('b')
    ; expect(obj.a.b).toHaveProperty('z')
    ; expect(obj.a.b.z).toEqual(12)
    ; expect(obj2.a.b.z).toEqual(13)
    ; obj2.d.e = 'mutated'
    ; expect(obj.d).toEqual(obj2.d)
    ; expect(obj2.d.e).toEqual('mutated')
    ; expect(obj.d.e).toEqual('mutated')
    })
  ; it( 'should create non-existing object if silentCreate is `true`', () => 
    { const obj = getObj()
    ; const obj2 = deep_set(obj, 'a.b.n.m', 13, true)
    ; expect(obj2).toHaveProperty('a')
    ; expect(obj2.a).toHaveProperty('b')
    ; expect(obj2.a.b).toHaveProperty('n')
    ; expect(obj2.a.b.n).toHaveProperty('m')
    ; expect(obj2.a.b.n.m).toEqual(13)
    })
  ; it( 'should throw if non-existing path is given and silenCreate is `false` (default)', () => 
    { const obj = getObj()
    ; expect(() => deep_set(obj, 'a.b.n.m', 13)).toThrow()
    })
  ; it( 'should work with arrays', () => 
    { const obj = getObj()
    ; const obj2 = deep_set(obj, 'f.1.name', 'changed')
    ; expect(obj2.f[1].name).toEqual('changed')
    })
  ; it( 'should work with wildcards', () => 
    { const obj = getObj()
    ; const obj2 = deep_set(obj, 'f.*.birthplace.town', 'changed')
    ; expect(obj2.f[0].birthplace.town).toEqual('changed')
    ; expect(obj2.f[1].birthplace.town).toEqual('changed')
    })
  ; it( 'should work with functions', () => 
    { const obj = getObj()
    ; const obj2 = deep_set(obj, 'f.*.name', (val, i) => val + i)
    ; expect(obj2.f[0].name).toEqual('nameA0')
    ; expect(obj2.f[1].name).toEqual('nameB1')
    })
  })