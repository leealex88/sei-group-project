import React from 'react'
import EventForm from './EventForm'

class EventNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
    console.log(data)
  }


  filterJobs() {
    const regexp = new RegExp(this.state.searchTerm, 'i')
    return this.state.data.filter(item => regexp.test(item.title))
  }

  //write handleSubmit function
  
  render() {
    return (


      <EventForm

        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />


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
