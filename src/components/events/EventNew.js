import React from 'react'
import EventForm from './EventForm'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'

class EventNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleTimeStart = this.handleTimeStart.bind(this)
    this.handleTimeEnd = this.handleTimeEnd.bind(this)
    this.handleBorough = this.handleBorough.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleClick(e) {

    const data = { ...this.state.data, eventType: e.target.value, partyImage: e.target.value  }
    this.setState({ data  })

  }

  handleDate(e) {
    const data = { ...this.state.data, date: e }
    this.setState({ data })
  }

  handleTimeStart (e) {
    const data = { ...this.state.data, startTime: e }
    this.setState({ data })
  }
  handleTimeEnd (e) {
    const data = { ...this.state.data, endTime: e }
    this.setState({ data })
  }

  handleBorough(e) {
    const data = { ...this.state.data, location: e.value, locationString: e.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = this.state.data
    console.log('data is', data)
    axios.post('/api/events/', data, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/events'))
      .catch(err => console.log(err))
  }
  //write handleSubmit function

  render() {
    return (
      <main>
        <Navbar />
        <EventForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDate={this.handleDate}
          handleTimeStart={this.handleTimeStart}
          handleTimeEnd={this.handleTimeEnd}
        />

      </main>
    )
  }
}
export default EventNew


// data={data}
// errors={errors}






//
//
// eventType: { type: String, required: true }, -
// eventName: { type: String }, -
// date: { type: Date, required: true }, -
// fixedDate: { type: Boolean }, -
// location: { type: String, set: setLngLat, default: 'string' },
// // lnglat: { type: String, set: setLngLat },
// description: { type: String },
// schedule: { type: String },
// startTime: { type: Number },
// endTime: { type: Number },
// tickets: { type: String },
// ticketLink: { type: String },
// eventLink: { type: String },
// preparation: { type: String },
// cost: { type: Number, default: 0 },
// catered: { type: String },
// provided: { type: String },
// whatToBring: { type: String },
// maxSize: { type: Number },
// minSize: { type: Number },
// idealGroupSize: { type: Number },
// anythingElse: { type: String },
// partyImage: { type: String, default: 'http://www.thegatenewcastle.co.uk/images/layout/headers/mobile/party-planner.jpg' },
// tags: { type: Array },
// skillLevel: { type: String },
// comments: [ eventCommentSchema ]
