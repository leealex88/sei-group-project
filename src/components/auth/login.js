import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( { target: { name, value } } ) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })

  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/events')
        console.log(res.data.token)
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="row" id="loginForm">
          <h2>Login</h2>
          <div className="control ten columns">
            <label htmlFor="emailInput">Your email</label>
            <input
              className="u-full-width"
              type="email"
              name="email"
              placeholder="example@mail.com"
              id="email"
              onChange={ this.handleChange }
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="passwordInput">Password</label>
            <input
              className="u-full-width"
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={ this.handleChange }
            />
          </div>
          <div className="control ten columns">
            <button type="submit" className="button">Submit</button>
          </div>
        </div>
      </form>

    )
  }
}

export default Login
