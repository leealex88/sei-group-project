import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class eventsIndex extends React.Component {
  constructor() {
    super()

    this.state = { events: null }

  }


  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err))
  }




  render() {

    if (!this.state.events) return null
    console.log(this.state.events)

    return (
      <main>


        <section className="frontSection">
          <div className="container front">


            <div className="frontSection">

              {this.state.events.map(event => (

                <section  key={event._id} >

                  <Link to={`/events/${event._id}`}>
                    <span key={event._id}><h3 key={event._id}> {event.name}</h3></span>
                  </Link>
                </section>

              ))}

            </div>
          </div>


        </section>
      </main>
    )
  }
}

export default eventsIndex
