import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'

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
    axios.patch(`api/users/${this.props.user._id}/privateMessages/${this.props.message._id}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
    // axios.patch(`api/users/${this.props.user._id}/privateMessages/${this.props.message._id}`, {
    //   headers: { Authorization: ` ${Auth.getToken()}` }
    // })
    document.querySelector('.PM').style.display = 'none'
    console.log(this.props.message)
      .catch(err => console.log(err))

  }

  componentDidMount() {
    if (!this.props.user) return null
    this.MessageFunction()


  }

  render(){
    if (!this.props.message.user && !this.state.messageSender && !this.props.user) return null

    return (


      <section>

        <Navbar />
        <section className="PM">

          <h6> You have a Message from {this.state.messageSender} </h6>


          <p> {this.props.message.text} </p>

          <p> Click <Link to={`/users/${this.props.message.user}/message`}> here </Link> to reply. </p>


          <p> {this.props.message.text} </p>

          <p> Click <Link to={`/users/${this.props.message.user}/message`}> here </Link> to reply. </p>
          <button onClick={this.markAsRead}>Mark as Read</button>

        </section>

      </section>


    )
  }
}





export default Message
