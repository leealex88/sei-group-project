import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Message extends React.Component {
  constructor() {
    super()

    this.state = { messageSender: '' }
    this.markAsRead = this.markAsRead.bind(this)


  }

  MessageFunction() {
    axios.post(`/api/users/${this.props.message.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ messageSender: res.data }))

      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  markAsRead() {
    console.log('marking as read', `api/users/${this.props.user._id}/privateMessages/${this.props.message._id}`)
    axios.post(`api/users/${this.props.user._id}/privateMessages/${this.props.message._id}`, null, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.getEventData()
        this.props.toggleMessages()
        document.querySelector('.PM').style.display = 'none'
      })
      .catch(err => console.log(err))
  }



  componentDidMount() {
    if (!this.props.user) return null
    this.MessageFunction()
  }

  render(){
    if (!this.props.message.user && !this.state.messageSender && !this.props.user) return null

    return (

      <section className="PM">

        <h6> You have a Message from {this.state.messageSender} </h6>


        <p> {this.props.message.text} </p>


        <p> Click <Link to={`/users/${this.props.message.user}/message`}> here </Link> to reply. </p>
        <button onClick={this.markAsRead}>Mark as Read</button>
      </section>




    )
  }
}





export default Message
