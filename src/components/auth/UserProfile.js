import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import UserEvents from './UserEvents'


class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = { user: null }
    this.logout = this.logout.bind(this)


  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidMount() {

    axios.get('/api/myprofile', {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))

  }

  requestFunction() {
    return this.state.user.privateMessages.filter(message => message.request === true).length

  }


  render(){


    if (!this.state.user) return null

    return (


      <div>


        <h1> {this.state.user.username} </h1>
        <a onClick={this.logout}>Logout</a>

        <h3> You have {this.state.user.privateMessages.length} messages </h3>

        {this.state.user.privateMessages.forEach(message => (


          <p key ={message._id} > {message} </p> ))}

        <p> You have {this.state.user.privateMessages.filter(message => message.request === true).length} invitation requests </p>

        < UserEvents />


      </div>

    )
  }
}





export default UserProfile
