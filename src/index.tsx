import * as React from 'react'
import 
  { render
  } from 'react-dom'
import 
  { handle_form_submit
  , process_form
  } from './main'

const fakeRenderMarkdown = (text: string) => 
  text
    .replace(/(#+)(.*?)\n/g, (_, h, t) => `<h${h.length}>${t}</h${h.length}>`)
    .replace(/\n/g, `<br/>`)

const processForm = process_form({ 
  validate: ({values}, errors) => new Promise((resolve) => {
    if (!values.password || typeof values.password !== 'string' || values.password.length < 6) {
      errors.password = 'password must be over 6 chars'
    }
    if (values.password_confirm !== values.password ) {
      errors.password_confirm = 'passwords dont match'
    }
    if (values.username) {
      if (values.username === 'xananax') {
        errors.username = 'username is already taken'
      } else if (values.username === 'admin') {
        errors.username = 'admin is not a valid username'
      }
      setTimeout(resolve, 1000)
    } else {
      resolve()
    }
  }),
  transform: (form) => new Promise( (resolve) => {
    const html = fakeRenderMarkdown(form.values.bio as string )
    const values = { ...form.values, html }
    const newForm = { ...form, values }
    resolve(newForm)
  })
})

class App extends React.Component {
  state = {
    errors: {},
    values: {}
  }
  onSubmit = handle_form_submit( serialized =>
    processForm(serialized)
      .then( (validated) => this.setState( validated ) )
  )
  renderError( name: string ) {
    const { errors } = this.state
    if ( errors && (name in errors) && errors[name]) {
      return <label><em>{errors[name]}</em></label>
    }
    return null
  }
  render() {
    const { values } = this.state
    return (
      <div>
        <h1>Test</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input placeholder="username" type="text" name="username"/>
            {this.renderError('username')}
          </div>
          <div>
            <input placeholder="password" type="text" name="password"/>
            {this.renderError('password')}
          </div>
          <div>
            <input placeholder="confirm" type="text" name="password_confirm"/>
            {this.renderError('password_confirm')}
          </div>
          <div>
            <textarea placeholder="bio" name="bio"/>
            {this.renderError('bio')}
            <div dangerouslySetInnerHTML={{__html: values['html'] }}/>
          </div>
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
