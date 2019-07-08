import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Request extends React.Component {
  constructor() {
    super()

    this.messageSender = ''


  }




  requestFunction() {
    console.log(this.props.request)
    axios.post(`/api/users/${this.props.request.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.messageSender = res.data)
    // .then(res => this.messageSenders.push(res.data))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  componentDidMount() {
    if (!this.props.request.user) return null
    this.requestFunction()


  }

  render(){
    if (!this.props.request.user) return null
    console.log('sender', `/events/${this.props.request.requestEvent}`)
    return (
      <div>


        <h6> You have a request from {this.messageSender} to go to </h6>
        <Link to={`/events/${this.props.request.requestEvent}`}> this event </Link>



      </div>

    )
  }
}





export default Request
