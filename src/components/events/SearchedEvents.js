import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'


class SearchedEvents extends React.Component {
  constructor() {
    super()

    this.state = { events: null, searchTerm: null }

  }

  componentDidMount() {
    axios.get(`/api/searchevents/${this.props.match.params.query}`)
      .then(res => this.setState({ events: res.data }))
      .then(() => this.setState({ searchTerm: this.props.match.params.query }))
      .catch(err => console.log(err))
  }

  render() {

    if (!this.state.events) return null

    return (
      <main >
        <Navbar />
        <p> Showing events that are tagged with the term <strong>{this.state.searchTerm} </strong>.
          To find <strong> Strangers </strong> who are also interested in <strong> {this.state.searchTerm} </strong> click
        <Link to={`/searchusers/${this.state.searchTerm}`}> here </Link> </p>

        <section className="frontSection">
          <div className="containerFront">


            <div className="frontSection">

              {this.state.events.map(event => (

                <section key={event._id} className="eachCard">
                  <Link to={`/events/${event._id}`}>

                    <div>
                      <img src={event.partyImage}/>
                      <span key={event._id}>
                        <h3 key={event._id}>
                          {event.eventName}
                        </h3>
                      </span>
                    </div>
                  </Link>
                  <div className="eventDescriptionCard">
                    <p className="searchEventsTitel" key={event._id}>
                      {event.description}
                    </p>
                  </div>
                </section>

              ))}

            </div>
          </div>


        </section>
      </main>
    )
  }
}

export default SearchedEvents
