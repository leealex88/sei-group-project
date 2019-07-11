import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Request extends React.Component {
  constructor() {
    super()

    this.state = { messageSender: '', event: null }
    this.acceptFunction = this.acceptFunction.bind(this)
    this.rejectFunction = this.rejectFunction.bind(this)


  }

  getData() {
    axios.get(`/api/events/${this.props.request.requestEvent}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ event: res.data }))

      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }



  requestFunction() {
    this.props.getEventData()
    console.log(this.props.request)
    axios.post(`/api/users/${this.props.request.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ messageSender: res.data }))

      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  acceptFunction() {
    console.log('requester:', this.state)
    axios.post(`api/users/${this.props.request.user}/accept`,  { event: this.props.request.requestEvent } ,  {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.getEventData()
        this.props.toggleRequests()
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))

    this.removeRequestFunction()

    document.querySelector('.request').style.display = 'none'

    this.sendAccept()


  }

  sendReject() {
    axios.post(`/api/users/${this.props.request.user}/privateMessages`, { text: `Your request to ${this.state.event.eventName} was not accepted, the event may have been full so please don't take it to heart. Have a good day!` }, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => {
        this.props.getEventData()
        this.props.toggleRequests()
      })
      .catch(err => console.log(err))

  }

  rejectFunction() {

    this.removeRequestFunction()

    document.querySelector('.request').style.display = 'none'

    this.sendReject()


  }

  sendAccept() {
    axios.post(`/api/users/${this.props.request.user}/privateMessages`, { text: `Your request to ${this.state.event.eventName} was accepted, you can now join in the chat and find out all the  details!` }, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.getEventData())
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
    this.getData()
    this.requestFunction()
  }

  render(){
    if (!this.props.request.user) return null
    if (!this.state.event) return null
    console.log(this.state.event.eventName)
    return (
      <section className="request">
        <div>
          <h6 className="request"> You have a request from <Link to={`/users/${this.props.request.user}`}>
            {this.state.messageSender} </Link> to go to
          <Link to={`/events/${this.props.request.requestEvent}`}> {this.state.event.eventName} </Link>
          </h6>

          <button onClick={this.acceptFunction}> Accept Request </button>
          <button onClick={this.rejectFunction}> Reject Request </button>
        </div>
      </section>
    )
  }
}





export default Request

// import React from 'react'
// import axios from 'axios'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'
//
// class Request extends React.Component {
//   constructor() {
//     super()
//
//     this.state = { messageSender: '', event: null }
//     this.acceptFunction = this.acceptFunction.bind(this)
//     this.rejectFunction = this.rejectFunction.bind(this)
//
//
//   }
//
//   getData() {
//     axios.get(`/api/events/${this.props.request.requestEvent}`, {
//       headers: { Authorization: ` ${Auth.getToken()}` }
//     })
//       .then(res => this.setState({ event: res.data }))
//
//       .catch(() => this.setState({ error: 'Invalid Crendentials' }))
//   }
//
//   requestFunction() {
//     this.getData()
//     console.log(this.props.request)
//     axios.post(`/api/users/${this.props.request.user}`, {
//       headers: { Authorization: ` ${Auth.getToken()}` }
//     })
//       .then(res => this.setState({ messageSender: res.data }))
//
//       .catch(() => this.setState({ error: 'Invalid Crendentials' }))
//   }
//
//   acceptFunction() {
//     console.log('requester:', this.state)
//     axios.post(`api/users/${this.props.request.user}/accept`,  { events: this.props.request.requestEvent } ,  {
//       headers: { Authorization: ` ${Auth.getToken()}` }
//     })
//       .then(() => this.getData())
//       .catch(() => this.setState({ error: 'Invalid Crendentials' }))
//
//     this.removeRequestFunction()
//
//     document.querySelector('.request').style.display = 'none'
//
//     this.sendAccept()
//
//
//   }
//
//   sendReject() {
//     axios.post(`/api/users/${this.props.request.user}/privateMessages`, { text: `Your request to ${this.state.event.eventName} was not accepted, the event may have been full so please don't take it to heart. Have a good day!` }, {
//       headers: { 'Authorization': `${Auth.getToken()}` }
//     })
//       .then(() => this.getData())
//       .catch(err => console.log(err))
//
//   }
//
//   rejectFunction() {
//
//     this.removeRequestFunction()
//
//     document.querySelector('.request').style.display = 'none'
//
//     this.sendReject()
//
//
//   }
//
//   sendAccept() {
//     axios.post(`/api/users/${this.props.request.user}/privateMessages`, { text: `Your request to ${this.state.event.eventName} was accepted, you can now join in the chat and find out all the  details!` }, {
//       headers: { 'Authorization': `${Auth.getToken()}` }
//     })
//       .then(() => this.getData())
//       .catch(err => console.log(err))
//
//   }
//
//   removeRequestFunction() {
//     axios.put(`api/users/${this.props.user._id}/privateMessages/${this.props.request._id}`, null, {
//       headers: { Authorization: ` ${Auth.getToken()}` }
//     })
//
//       .catch(err => console.log(err))
//     this.getData()
//   }
//
//
//   componentDidMount() {
//     if (!this.props.request.user) return null
//     this.requestFunction()
//   }
//
//   render(){
//     if (!this.props.request.user) return null
//     if (!this.state.event) return null
//     console.log(this.state.event.eventName)
//     return (
//       <section className="request">
//         <div>
//           <h6 className="request"> You have a request from <Link to={`/users/${this.props.request.user}`}>
//             {this.state.messageSender} </Link> to go to
//           <Link to={`/events/${this.props.request.requestEvent}`}> {this.state.event.eventName} </Link>
//           </h6>
//
//           <button onClick={this.acceptFunction}> Accept Request </button>
//           <button onClick={this.rejectFunction}> Reject Request </button>
//         </div>
//       </section>
//     )
//   }
// }
//
//
//
//
//
// export default Request
