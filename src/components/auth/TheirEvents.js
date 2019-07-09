import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'


class TheirEvents extends React.Component {
  constructor() {
    super()
    this.state = { events: null }



  }



  componentDidMount() {

    axios.get(`/api/users/${this.props.user}/events`)
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err))

  }


  render(){
    console.log(this.state.events)
    if (!this.state.events) return null
    return (


      <div className="userEventCards">
        {this.state.events.map(event => (

          <section  key={event._id} >
            <Link to={`/events/${event._id}`}>
              <div>
                <img src={event.partyImage}/>
                <span key={event._id}>


                  <h3 key={event._id}>

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





export default TheirEvents
