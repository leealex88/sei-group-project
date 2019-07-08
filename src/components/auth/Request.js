import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Request extends React.Component {
  constructor() {
    super()

    this.state = { messageSender: '' }
    this.acceptFunction = this.acceptFunction.bind(this)


  }




  requestFunction() {
    console.log(this.props.request)
    axios.post(`/api/users/${this.props.request.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ messageSender: res.data }))

      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  acceptFunction() {
    console.log('request:', this.props.request.requestEvent)
    axios.post(`api/users/${this.props.request.user}/accept`,  { events: this.props.request.requestEvent } ,  {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
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
      <section>
        <div>


          <h6> You have a request from {this.state.messageSender} to go to </h6>
          <Link to={`/events/${this.props.request.requestEvent}`}> this event </Link>
        </div>
        <div>

          <Link to={`/users/${this.props.request.user}`}>
            {this.state.messageSender}<p>s profile</p>
          </Link>
          <div onClick={this.acceptFunction}> Accept Request </div>
        </div>
      </section>
    )
  }
}





export default Request
