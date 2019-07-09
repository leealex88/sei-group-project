import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Request extends React.Component {
  constructor() {
    super()

    this.state = { messageSender: '', event: null }
    this.acceptFunction = this.acceptFunction.bind(this)


  }

  getData() {
    axios.get(`/api/events/${this.props.request.requestEvent}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ event: res.data }))

      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  requestFunction() {
    this.getData()
    console.log(this.props.request)
    axios.post(`/api/users/${this.props.request.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ messageSender: res.data }))

      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  acceptFunction() {
    console.log('requester:', this.state)
    axios.post(`api/users/${this.props.request.user}/accept`,  { events: this.props.request.requestEvent } ,  {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
    this.removeRequestFunction()
    document.querySelector('.request').style.display = 'none'

    axios.post(`/api/users/${this.props.request.user}/privateMessages`, { text: `Your request to ${this.state.event.eventName} was accepted, you can now join in the chat and find out all the  details!` }, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  removeRequestFunction() {
    axios.put(`api/users/${this.props.user._id}/privateMessages/${this.props.request._id}`, null, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })

      .catch(err => console.log(err))
  }





  componentDidMount() {
    if (!this.props.request.user) return null
    this.requestFunction()



  }

  render(){
    if (!this.props.request.user) return null

    return (
      <section className="request">
        <div>


          <h6 className="request"> You have a request from {this.state.messageSender} to go to </h6>
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
