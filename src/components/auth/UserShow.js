import React from 'react'
import axios from 'axios'

// import RatingTotal from './RatingTotal'

// import Auth from '../../lib/Auth'

class UserShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }

  }

  componentDidMount() {

    axios.get(`/api/users/${this.props.match.params.userid}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))

  }





  render() {
    console.log(this.props.match.params.userid)
    if (!this.state.user) return null
    return (
      <div >

        <h1 className="userTitle">{this.state.user.username}</h1>

        <p> {this.state.user.bio} </p>
        <img src={this.state.user.avatar}/>

      </div>
    )
  }
}

export default UserShow
