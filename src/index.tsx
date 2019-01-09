import * as React from 'react'
import 
  { render
  } from 'react-dom'
import 
  { handle_form_submit
  , process_form
  , serialize_form_collection
  } from './main'


const fakeRenderMarkdown = (text: string) => 
  text
    .replace(/(#+)(.*?)\n/g, (_, h, t) => `<h${h.length}>${t}</h${h.length}>`)
    .replace(/\n/g, `<br/>`)

const processForm = process_form({
  validate: ({ values }, errors) => new Promise((resolve) => {
    if(!values){ return resolve() }
    if(!values.main){
      errors.root = 'you need to set a username and a password!'
    }else{
      if(!values.main.password){
        errors.password_0 = "password must be set"
      }else{
        if (!values.main.password[0] || typeof values.main.password[0] !== 'string' || values.main.password[0].length < 6) {
          errors.password_0 = 'password must be over 6 chars'
        }
        if (values.main.password[1] !== values.main.password[0] ) {
          errors.password_1 = 'passwords dont match'
        }
      }
      if(!values.main.username){
        errors.username = 'username cannot be blank'
      }
      else {
        if (values.main.username === 'xananax') {
          errors.username = 'username is already taken'
        } else if (values.username === 'admin') {
          errors.username = 'admin is not a valid username'
        }
      }
    }
    setTimeout(resolve, .500)
  }),
  transform: (form) => new Promise( (resolve) => {
    const html = fakeRenderMarkdown(form.values.about.texts.bio as string )
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
    processForm(serialized).then( (validated) => this.setState( validated ) )
  )
  serializeAll = () => {
    const results = serialize_form_collection(document.querySelectorAll('form'))
    console.log(results)
  }
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
        <form name="a[]" onSubmit={this.onSubmit}>
          <fieldset name="main">
            <legend>main</legend>
            <div>
              <input placeholder="username" type="text" name="username"/>
              { this.renderError('username') }
            </div>
            <div>
              <input placeholder="password" type="text" name="password[]"/>
              { this.renderError('password_0') }
            </div>
            <div>
              <input placeholder="confirm" type="text" name="password[]"/>
              { this.renderError('password_1') }
            </div>
          </fieldset>
          <fieldset name="about">
            <legend>about</legend>
            <fieldset name="texts">
            <legend>texts</legend>
              <div>
                <textarea placeholder="bio" name="bio" defaultValue="I was a potato"/>
                { this.renderError('bio') }
                <div dangerouslySetInnerHTML={{__html: values['html'] }}/>
              </div>
            </fieldset>
          </fieldset>
          <input type="submit" value="ok"/>
        </form>
        <form name="a[]">
          <input name="name" defaultValue="name"/>
        </form>
        <button onClick={this.serializeAll}>serialize all</button>
        <pre>
          { JSON.stringify(this.state, null, 2) }
        </pre>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
