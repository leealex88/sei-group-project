import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'


class UserEvents extends React.Component {
  constructor() {
    super()
    this.state = { events: null }



  }



  componentDidMount() {

    axios.get('/api/myevents', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
    console.log()
      .then(res => this.setState({ events: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))

  }


  render(){
    console.log(this.state.events)
    if (!this.state.events) return null
    return (


      <div>

        <Link to={`/events/${this.state.event._id}`}>
          <div>
            <img src={this.state.event.partyImage}/>
            <span key={this.state.event._id}>


              <h3 key={this.state.event._id}>

                {this.state.event.eventName}

              </h3></span>
          </div>
        </Link>


      </div>

    )
  }
}





export default UserEvents
