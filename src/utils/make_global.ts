'use strict'

const root_object = 
  (  ( typeof self === 'object' && self.self === self && self )
  || ( typeof global === 'object' && global.global === global && global )
  // @ts-ignore
  || ( this )
  )

/**
 * Sets a property on the global object. That is `window` in browser environments, `process` in node, etc
 * @param name 
 * @param thing 
 */
export const set_global = 
  // tslint:disable-next-line:no-any
  ( name: string, thing: any ) => 
  ( root_object[name] = thing
  )

/**
 * Retrieves a property from the global object (`window` in browser environments, `process` in node, etc)
 * @param name 
 */
export const get_global = 
  ( name: string ) =>
  ( root_object[ name ]
  )

export const make_global = set_global

export default set_global