import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'

class Message extends React.Component {
  constructor() {
    super()

    this.state = { messageSender: '' }


  }

  MessageFunction() {
    axios.post(`/api/users/${this.props.message.user}`, {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ messageSender: res.data }))
    // .then(res => this.messageSenders.push(res.data))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  componentDidMount() {
    if (!this.props.message.user) return null
    this.MessageFunction()


  }

  render(){
    if (!this.props.message.user && !this.state.messageSender) return null
    console.log('message', this.props.message)
    return (

      <section>
        <div>
          <Navbar />

          <h6> You have a Message from {this.state.messageSender} </h6>

          <p> {this.props.message.text} </p>

          <p> Click <Link to={`/users/${this.props.message.user}/message`}> here </Link> to reply. </p>
        </div>
      </section>




    )
  }
}





export default Message
