import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class EventCreator extends React.Component {
  constructor() {
    super()

    this.state = { user: null, comment: {} }
    this.handleClick = this.handleClick.bind(this)


  }


  componentDidMount() {
    this.getData()
  }



  getData() {
    axios.post(`/api/events/${this.props.event}`)
      .then(res => this.setState({ user: res.data, comment: {} }))
      .catch(err => console.log(err))
  }

  handleClick() {
    axios.post(`/api/users/${this.state.user._id}/privateMessages`, { request: true, requestEvent: this.props.event }, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .catch(err => console.log(err))
    document.querySelector('.inviteButton').style.display = 'none'
    document.querySelector('.invited').style.display = 'block'

  }




  render() {
    // console.log('event', this.props.event)
    if (!this.state.user) return null
    const { user } = this.state
    return (
      <div >

        <h6> Event creator: </h6>
        <Link to={`/users/${user._id}`}>
          {user.username}</Link>
        <br/>
        <button className="inviteButton" onClick={this.handleClick}> Interested? Click here to request an invite! </button>
        <button className="invited"> Your request has been sent, you will be notified when the host accepts! </button>


      </div>
    )
  }
}

export default EventCreator
