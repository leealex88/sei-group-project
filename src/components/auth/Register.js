import React from 'react'
// import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
    console.log(data)
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  render() {

    return (
      <form>
        <div className="row">
          <h2>Register</h2>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Username</label>
            <input
              className="u-full-width"
              type="email"
              placeholder=""
              name="username"
              id="exampleEmailInput"
              onChange={this.handleChange}/>
          </div>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Email</label>
            <input
              className="u-full-width"
              type="email"
              placeholder=""
              name="email"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Password</label>
            <input
              className="u-full-width"
              type="password"
              placeholder=""
              name="password"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Password Confirmation</label>
            <input
              className="u-full-width"
              type="password"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input className="button-primary" type="submit" value="Submit"/>
          </div>
        </div>
      </form>
    )
  }
}

export default Register
