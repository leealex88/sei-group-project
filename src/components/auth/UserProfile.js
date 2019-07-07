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


  render(){
    console.log(this.state.user)
    if (!this.state.user) return null
    return (


      <div>


        <h1> {this.state.user.username} </h1>
        <a onClick={this.logout}>Logout</a>

      


      </div>

    )
  }
}





export default UserProfile
