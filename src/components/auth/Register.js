import React from 'react'
// import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()
    this.state = { data: {} }
  }

  render() {
    return (
      <form>
        <div className="row">
          <h2>Register</h2>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Username</label>
            <input className="u-full-width" type="email" placeholder="Username" id="exampleEmailInput"/>
          </div>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Email</label>
            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
          </div>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Password</label>
            <input className="u-full-width" type="password" placeholder="" id="exampleEmailInput"/>
          </div>
        </div>
      </form>
    )
  }
}

export default Register
