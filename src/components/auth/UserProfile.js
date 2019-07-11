import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import UserEvents from './UserEvents'
import Request from './Request'
import Message from './Message'
import Select from 'react-select'
import Avatar from './Avatar'
import { interest } from './UserInterests'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'

class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = { user: null, requests: false, messages: false, data: { interests: null } }
    this.logout = this.logout.bind(this)
    this.requestFunction = this.requestFunction.bind(this)
    this.messagesFunction = this.messagesFunction.bind(this)
    this.handleInterest = this.handleInterest.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getData = this.getData.bind(this)
    this.messagesFunction = this.messagesFunction.bind(this)
    this.requestFunction = this.requestFunction.bind(this)

  }


  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  // requestFunction() {
  //   const requests = this.state.user.privateMessages.filter(message => message.request === true)
  //   requests.concat(requests.map(request => request.user))
  //   console.log(requests)
  //   this.setState({ requests: requests })
  // }
  requestFunction() {
    this.setState({ requests: !this.state.requests })
  }

  messagesFunction() {
    this.setState({ messages: !this.state.messages })
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    console.log('getting data')
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
      .catch(err => console.log(err))
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = this.state.data
    console.log('data is', data.interests, `/api/users/${this.state.user._id}`)
    axios.put(`/api/users/${this.state.user._id}`, data , {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })

      .then(() => this.props.history.push('/myprofile'))
      .catch(err => console.log(err))
      .this.getData()
  }

  render(){
    if (!this.state.user) return null
    const { user } = this.state
    console.log('user profile rendering')
    return (
      <div>

        <section>
          <Navbar />
          <section className="container section-container">
            <div className="flexbox-container">
              <div className="div1">
                <h1> {this.state.user.username} </h1>
                <img className="userPicture" src={user.avatar}/>
                <Link id="fullLineLink" className="links" to={`/users/${user._id}/avatar`} component={Avatar}>
                  <button className="buttonEvent" > Pick an avatar!  </button>
                </Link>
              </div>

              <div className="div2">

                {user.privateMessages.forEach(message => (
                  <p key ={message._id} > {message} </p> ))}
                <p> You have {user.privateMessages.filter(message => message.request === true).length} invitation requests </p>
                <button className="buttonEvent" onClick={this.requestFunction}>See Requests</button>

                {this.state.requests && user.privateMessages.filter(message => message.request === true).map((request, i) =>
                  <Request key={i}
                    request={request}
                    user={user}
                    getEventData={this.getData}
                    toggleRequests={this.requestFunction}
                  />
                )}
              </div>

              <div className="div3">
                <p> You have {user.privateMessages.filter(message =>
                  message.request === false && message.text && message.read === false).length} private messages </p>
                <button className="buttonEvent" onClick={this.messagesFunction}>See Messages</button>

                <div>
                  {this.state.messages && user.privateMessages.filter(message =>
                    message.request === false && message.text && message.read === false).map((message, i) =>
                    <div key={i}>
                      <Message
                        message={message}
                        user={user}
                        getEventData={this.getData}
                        toggleMessages={this.messagesFunction}
                      />
                    </div>
                  )}
                </div>
              </div>

              <br />
              <div className="div4">
                <form onSubmit={this.handleSubmit}>
                  <hr />
                  <label>Currently your interests are listed as </label>
                  <p>{user.interests.map((interest, i) =>
                    <Link key={i} to={`/events/${interest}`}> <button> {interest} </button></Link>
                  )} </p>
                  <h6 className="boldh6">Interests</h6>
                  <h6>What else are you interested in? Help us understand what kind of events might interest you.</h6>
                  <Select
                    defaultValue = {interest[0]}
                    options= {interest}
                    onChange={this.handleInterest}
                  />
                  <button type="submit" className="button" id="userProfileButtons">Add Interest</button>
                </form>

              </div>

              < UserEvents />

            </div>
          </section>
        </section>
      </div>

    )


  }

}


export default UserProfile
