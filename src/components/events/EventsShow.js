import React, { Fragment } from 'react'
import axios from 'axios'
import Map from './Map'
import EventCreator from './EventCreator'
import EventComments from './EventComments'
import Attendees from './Attendees'
import AttendeeInfo from './AttendeeInfo'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'
import Moment from 'react-moment'
import 'moment-timezone'

class eventShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null, attendees: null, me: null }

    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
    this.getAttendees()
    this.getMe()


  }

  getMe() {
    console.log('attending')
    axios.get('/api/me', {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(res => {
        console.log(res)
        this.setState({ me: res.data })
      })
      .catch(err => console.log(err))


  }

  isAttending(){
    if (this.state.attendees)
      return this.state.attendees.map(attendee => attendee._id).includes(this.state.me)
  }

  getData() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err))

  }

  getAttendees() {

    axios.get(`/api/events/${this.props.match.params.id}/attending`)
      .then(res => this.setState({ attendees: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    if (!this.state.event) return null
    console.log(this.state.attendees)
    return (
      <section >
        <Navbar />
        <div>
          <Fragment>
            <div className="eventName">
              <h4 >Event: {this.state.event.eventName}</h4>
            </div>
            <div className="creator">
              {!this.isAttending() && <EventCreator event={this.props.match.params.id} eventDetails={this.state.event}/>}

              <img src={this.state.event.partyImage} alt={this.state.event.name} />
            </div>

              
              <div >
                <h4 >Description</h4>
                <p>{this.state.event.description}</p>
                <hr />
                <h4 >Location</h4>
                <p>{this.state.event.locationString}</p>
                <hr />
                <h3> This event is happening at  {this.state.event.startTime} on <Moment format="YYYY/MM/DD">{this.state.event.date}</Moment></h3>




            <hr />

            <EventComments event={this.state.event} getEventData={this.getData} attendees={this.state.attendees} me={this.state.me}/>


          </Fragment>
        </div>
        <h3>These people are  members of this event group: </h3>
        <Attendees attendees={this.state.attendees} />

        {this.isAttending() && this.state.event && <AttendeeInfo event={this.state.event}/>}

        <Map locations = {this.state.event}/>

      </section>
    )
  }
}

export default eventShow
