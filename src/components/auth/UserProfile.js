import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import UserEvents from './UserEvents'
import Request from './Request'
import Message from './Message'
import { Link } from 'react-router-dom'


class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = { user: null, requests: [], messages: [] }
    this.logout = this.logout.bind(this)
    this.requestFunction = this.requestFunction.bind(this)
    this.messagesFunction = this.messagesFunction.bind(this)



  }


  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  requestFunction() {
    const requests = this.state.user.privateMessages.filter(message => message.request === true)
    requests.concat(requests.map(request => request.user))
    this.setState({ requests: requests })


  }

  messagesFunction() {
    const messages = this.state.user.privateMessages.filter(message => message.request === false)
    messages.concat(messages.map(message => message.user))
    this.setState({ messages: messages })


  }

  componentDidMount() {

    axios.get('/api/myprofile', {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))


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
        <button onClick={this.requestFunction}>See Requests</button>

        <div>
          {this.state.requests.map(request =>
            <button key={request}>
              <Request request={request} />
            </button>


          )} </div>

        <p> You have {this.state.user.privateMessages.filter(message => message.request === false).length} private messages </p>
        <div onClick={this.messagesFunction}>See Messages</div>

        <div>
          {this.state.messages.map(message =>
            <div key={message}>
              <Message message={message} />
            </div>


          )} </div>



        < UserEvents />

      </div>


    )


  }

}


export default UserProfile
