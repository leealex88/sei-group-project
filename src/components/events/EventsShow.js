import React from 'react'
import axios from 'axios'

// import RatingTotal from './RatingTotal'
// import { Link } from 'react-router-dom'
// import Auth from '../../lib/Auth'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null }

  }

  componentDidMount() {

    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err))

  }





  render() {
    if (!this.state.event) return null


    return (

      <div >

        <h1 className="eventTitle">{this.state.event.eventName}</h1>

        <p> {this.state.event.description} </p>
        <hr/>
        <p> {this.state.event.date} </p>
        <hr/>
        <p> {this.state.event.location} </p>
      </div>









    )
  }
}

export default EventsShow
