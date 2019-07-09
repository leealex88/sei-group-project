import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/Auth'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
    console.log(data)
  }

  handleSubmit(e) {
    console.log('this.state')
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))

  }

  render() {

    return (
      <form>
        <div className="row">
          <h2>Register</h2>
<<<<<<< HEAD
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Username</label>
=======
          <div className="control ten columns">
            <label htmlFor="username">Username</label>
>>>>>>> 3a88ec9ea9284bdd5517a0a68530b7cb11b4aa81
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
<<<<<<< HEAD
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Password</label>
=======
          <div className="control ten columns">
            <label htmlFor="password">Password</label>
>>>>>>> 3a88ec9ea9284bdd5517a0a68530b7cb11b4aa81
            <input
              className="u-full-width"
              type="password"
              placeholder=""
              name="password"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
<<<<<<< HEAD
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Password Confirmation</label>
=======
          <div className="control ten columns">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
>>>>>>> 3a88ec9ea9284bdd5517a0a68530b7cb11b4aa81
            <input
              className="u-full-width"
              type="password"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
<<<<<<< HEAD
          <div>
            <input className="button-primary" type="submit" value="Submit"/>
=======
          <div className="control ten columns">
            <label htmlFor="bio">Bio</label>
            <textarea
              minLength="20"
              maxLength="600"
              className="u-full-width"
              type="password"
              placeholder=""
              name="password"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="control ten columns">
            <button type="submit" className="button">Submit</button>
>>>>>>> 3a88ec9ea9284bdd5517a0a68530b7cb11b4aa81
          </div>
        </div>
      </form>
    )
  }
}

export default Register
