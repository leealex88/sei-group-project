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

      .then(res => this.setState({ events: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))

  }


  render(){
    console.log(this.state.events)
    if (!this.state.events) return null
    return (

      <div className="div5">
        <h3> Your events: </h3>

        {this.state.events.map(event => (
          <section  key={event._id} >
            <Link className="links" to={`/events/${event._id}`}>
              <div>
                <img src={event.partyImage}/>
                <span key={event._id}>
                  <h3 className="yourEventsTitel" key={event._id}>
                    {event.eventName}
                  </h3></span>
              </div>
            </Link>
          </section>
        ))}

      </div>

    )
  }
}





export default UserEvents
