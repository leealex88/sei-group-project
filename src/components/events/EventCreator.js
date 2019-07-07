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
    axios.post(`/api/users/${this.state.user._id}/privateMessages`, { request: true }, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })


      .catch(err => console.log(err))
    console.log(this.state.user.privateMessages)
  }




  render() {
    console.log(this.props.event)
    if (!this.state.user) return null
    const { user } = this.state
    return (
      <div >

        <h6> Event creator: </h6>
        <Link to={`/users/${user._id}`}>
          {user.username}</Link>
        <br/>
        <button onClick={this.handleClick}> Interested? Click here to request an invite! </button>



      </div>
    )
  }
}

export default EventCreator
