import * as React from 'react'
import { render } from 'react-dom'
/**/
import * as c from './utils'
const { pipe } = c
const add = (n: number) => n + 1
const toStr = (n: number) => 'yey! ' + n
/**/

const add3 = pipe(toStr, add, add, add)

const App = () => <div>Hello {c + ''} {add3(1)}</div>

render(<App/>, document.getElementById( 'root' ))