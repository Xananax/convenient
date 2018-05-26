import * as React from 'react'
import 
  { render
  } from 'react-dom'
import 
  { handle_form_submit
  , process_form
  } from './main'

const validate = ( key: string, value: any ) => {
  if ( key === 'password') {
    if (value.length < 6) {
      return 'must be at least 6 characters long'
    }
  }
  return undefined
}

const processForm = process_form( validate )

class App extends React.Component {
  state = {
    errors: {}
  }
  onSubmit = handle_form_submit( serialized =>
    processForm(serialized)
      .then( (validated) => this.setState( validated ) )
  )
  render() {
    const { errors } = this.state
    return (
      <div>
        <h1>Test</h1>
        <form onSubmit={this.onSubmit}>
          <input placeholder="username" type="text" name="username"/>
          <input placeholder="password" type="text" name="password"/>
          {errors['password'] && <div>{errors['password']}</div>}
          <input placeholder="confirm" type="text" name="password_confirm"/>
          <input type="submit" value="ok"/>
        </form>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
