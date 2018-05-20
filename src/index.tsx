import * as React from 'react'
import 
  { render
  } from 'react-dom'
import 
  { handle_form_submit as submit
  , log
  } from './main'

const App = () => (
  <div>
    <h1>Test</h1>
    <form onSubmit={submit(log('form submit'))}>
      <input type="text" name="name"/>
      <input type="submit" value="ok"/>
    </form>
  </div>
)

render(<App />, document.getElementById('root'));
