import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import UserEvents from './UserEvents'
import Request from './Request'
import Message from './Message'
import Select from 'react-select'
import { interest } from './UserInterests'
import { Link } from 'react-router-dom'


class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = { user: null, requests: [], messages: [], data: { interests: null } }
    this.logout = this.logout.bind(this)
    this.requestFunction = this.requestFunction.bind(this)
    this.messagesFunction = this.messagesFunction.bind(this)
    this.handleInterest = this.handleInterest.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)



  }


  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  requestFunction() {
    const requests = this.state.user.privateMessages.filter(message => message.request === true)
    requests.concat(requests.map(request => request.user))
    console.log(requests)
    this.setState({ requests: requests })


  }

  messagesFunction() {
    const messages = this.state.user.privateMessages.filter(message => message.request === false && message.text !== '')
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

  getEvent(){
    axios.get('/api/event', {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))


  }

  handleInterest(e) {

    this.setState({ data: { interests: e.value }  })

    console.log(this.state.data)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    const data = this.state.data
    console.log('data is', data.interests, `/api/users/${this.state.user._id}`)
    axios.put(`/api/users/${this.state.user._id}`, data , {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/myprofile'))
      .catch(err => console.log(err))
  }





  render(){
    if (!this.state.user) return null
    const { user } = this.state
    console.log(user)
    return (
      <div>
        <h1> {user.username} </h1>
        <a onClick={this.logout}>Logout</a>

        {user.privateMessages.forEach(message => (


          <p key ={message._id} > {message} </p> ))}

        <p> You have {user.privateMessages.filter(message => message.request === true).length} invitation requests </p>
        <button onClick={this.requestFunction}>See Requests</button>

        <div>
          {this.state.requests.map((request, i) =>

            <Request key={i} request={request} user={user} />



          )} </div>


        <p> You have {user.privateMessages.filter(message => message.request === false && message.text && message.read === false).length} private messages </p>
        <button onClick={this.messagesFunction}>See Messages</button>

        <div>
          {this.state.messages.filter(message => message.request === false && message.text && message.read === false).map((message, i) =>
            <div key={i}>
              <Message message={message} user={user}  />
            </div>


          )} </div>
        <form onSubmit={this.handleSubmit}>
          <p>Currently your interests are listed as {user.interests.map((interest, i) =>
            <Link key={i} to={`/events/${interest}`}> <button> {interest} </button></Link>
          )} </p>
          <label>Interests</label>
          <h6>What else are you interested in? Help us understand what kind of events might interest you.</h6>
          <Select

            defaultValue = {interest[0]}
            options= {interest}
            onChange={this.handleInterest}

          />
          <button type="submit" className="button">Add Interest</button>
        </form>


        <h3> Your events: </h3>

        < UserEvents />

      </div>


    )


  }

}


export default UserProfile
