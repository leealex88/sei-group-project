import React from 'react'
// import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
  }

  render() {
    return (
      <main className="container">
        <form>
          <div className="row">
            <div className="six columns">
              <label htmlFor="emailInput">Your email</label>
              <input className="u-full-width" type="email" placeholder="example@mail.com" id="registerEmail" />
            </div>
          </div>
        </form>
      </main>
    )
  }
}

export default Login
