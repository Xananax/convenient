import * as React from 'react'
import { render } from 'react-dom'
/**/
import * as c from './utils'

const App = () => <div>Hello {c + ''}</div>

render(<App/>, document.getElementById( 'root' ))