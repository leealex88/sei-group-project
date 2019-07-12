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
    this.handleInterest = this.handleInterest.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleClick(e) {
    console.log('e.value', e.value)
    const data = { ...this.state.data, eventType: e.target.value, partyImage: e.target.value }
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

  handleInterest(e) {
    let tagsArray = []
    tagsArray = [e.value]
    const data = { ...this.state.data, tags: tagsArray }
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
    console.log(this.state.data)
    return (
      <main>
        <Navbar />
        <EventForm
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          handleDate={this.handleDate}
          handleTimeStart={this.handleTimeStart}
          handleTimeEnd={this.handleTimeEnd}
          handleInterest={this.handleInterest}
        />

      </main>
    )
  }
}
export default EventNew
