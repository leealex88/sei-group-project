import React, { Fragment } from 'react'
import axios from 'axios'
import Map from './Map'
import EventCreator from './EventCreator'
import EventComments from './EventComments'


class eventShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null }

  }

  componentDidMount() {
    this.getData()
  }



  getData() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data, comment: {} }))
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.event) return null
    const { event } = this.state
    console.log(this.state)
    return (
      <section >
        <div >
          <Fragment>
            <h2 >Event: {event.eventName}</h2>

            <hr />
            <EventCreator event={this.props.match.params.id}/>
            <div >
              <div >

                <img src={event.partyImage} alt={event.name} />

              </div>
              <div >
                <h4 >Description</h4>
                <p>{event.description}</p>
                <hr />
                <h4 >Location</h4>
                <p>{event.location}</p>
                <hr />
                <h4 >What else?</h4>

                <hr />
              </div>

            </div>
            <hr />

            <EventComments event={this.state.event}/>

          </Fragment>
        </div>
        <Map locations = {this.state.event}/>

      </section>
    )
  }
}

export default eventShow
