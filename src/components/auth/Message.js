import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Message extends React.Component {
  constructor() {
    super()

    this.messageSender = ''


  }




  MessageFunction() {
    axios.post(`/api/users/${this.props.Message.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.messageSender = res.data)
    // .then(res => this.messageSenders.push(res.data))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))




  }

  componentDidMount() {
    if (!this.props.message.user) return null
    this.MessageFunction()


  }

  render(){
    if (!this.props.message.user) return null
    console.log('sender', this.messageSender)
    return (



      <h6> You have a Message from {this.messageSender} </h6>




    )
  }
}





export default Message
