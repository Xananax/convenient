'use strict'

export const root_object = 
  ( ( typeof self === 'object' && self.self === self && self )
  ||( typeof global === 'object' && global.global === global && global )
  ||( this )
  )

export const set_global = 
  ( name:string, thing:any ) => 
  ( root_object[name] = thing
  )

export const get_global = 
  ( name:string ) =>
  ( root_object[ name ]
  )

export const make_global = set_global

export default set_global