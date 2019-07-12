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
import { Link } from 'react-router-dom'
import 'moment-timezone'


class eventShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null, attendees: [] , me: null, host: null }
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getHost()
    this.getAttendees()
    this.getData()
    this.getMe()


  }

  getMe() {
    axios.get('/api/me', {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ me: res.data })
      })
      .catch(err => console.log(err))


  }

  isAttending(){

    if (this.state.me) {
      if ( (this.state.attendees.map(attendee => attendee._id).includes(this.state.me)) ||
          ( this.state.me === this.state.host._id.toString()))
        return true
    }
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

  getHost() {

    axios.post(`/api/events/${this.props.match.params.id}`)
      .then(res =>  this.setState({ host: res.data }))


      .catch(err => console.log(err))
    this.setHost()

  }

  setHost() {
    this.setState({ attendees: this.state.attendees.concat(this.state.host) })
  }


  render() {
    if (!this.state.event || !this.state.attendees || !this.state.me  ) return null



    return (
      <section className="eventDisplayPage">
        <Navbar />
        <div className="eventsShow">
          <Fragment>

            <div className="eventName">
              <h4 >{this.state.event.eventName}</h4>
            </div>

            <div className="creator">
              {!this.isAttending() && <EventCreator event={this.props.match.params.id} eventDetails={this.state.event}/>}
            </div>
            <h2 >{this.state.event.eventName}</h2>
            <hr/>

            <div >
              <h4 >Description</h4>
              <p>{this.state.event.description}</p>
              <hr />
              <h4 >Location</h4>
              <p>{this.state.event.locationString}</p>
              <Map locations = {this.state.event}/>
              <hr />
            </div>
            <h4> This event is happening at  {this.state.event.startTime} on <Moment format="YYYY/MM/DD">{this.state.event.date}</Moment></h4>
            <hr />

            <div >

              <img src={this.state.event.partyImage} alt={this.state.event.name} />


              <div className="creator">
                {!this.isAttending() && <EventCreator event={this.props.match.params.id} eventDetails={this.state.event}/>}


              </div>

              <div>
              </div>
              <div >
                <h4 >Description</h4>
                <p>{this.state.event.description}</p>
                <hr />

                <Map locations = {this.state.event}/>
                <hr />
                <h4 >What else?</h4>

                <hr />
              </div>

              <hr />
              <EventComments event={this.state.event} getEventData={this.getData}
                attendees={this.state.attendees} me={this.state.me}
                attending={this.state.isAttending} host={this.state.host}/>


              <h3>These people are  members of this event group: </h3>
              {this.state.host &&  <Link to={`/users/${this.state.host._id}`}>
                {this.state.host.username}</Link>}
              <Attendees attendees={this.state.attendees} />

              {this.isAttending() && this.state.event && <AttendeeInfo event={this.state.event}/>}
            </div>
            <p> Event tags: {this.state.event.tags.map((tag, i) =>
              <Link key={i}
                to={`/searchevents/${tag}`}>
                <button> {tag} </button>
              </Link>)}
            </p>
          </Fragment>
        </div>
      </section>
    )
  }
}

export default eventShow

//
// import React, { Fragment } from 'react'
// import axios from 'axios'
// import Map from './Map'
// import EventCreator from './EventCreator'
// import EventComments from './EventComments'
// import Attendees from './Attendees'
// import AttendeeInfo from './AttendeeInfo'
// import Auth from '../../lib/Auth'
// import Navbar from '../common/Navbar'
//
// class eventShow extends React.Component {
//   constructor() {
//     super()
//
//     this.state = { event: null, attendees: null, me: null }
//
//     this.getData = this.getData.bind(this)
//   }
//
//   componentDidMount() {
//     this.getData()
//     this.getAttendees()
//     this.getMe()
//
//
//   }
//
//   getMe() {
//     console.log('attending')
//     axios.get('/api/me', {
//       headers: { 'Authorization': `${Auth.getToken()}` }
//     })
//       .then(res => {
//         console.log(res)
//         this.setState({ me: res.data })
//       })
//       .catch(err => console.log(err))
//
//
//   }
//
//   isAttending(){
//     if (this.state.attendees)
//       return this.state.attendees.map(attendee => attendee._id).includes(this.state.me)
//   }
//
//   getData() {
//     axios.get(`/api/events/${this.props.match.params.id}`)
//       .then(res => this.setState({ event: res.data }))
//       .catch(err => console.log(err))
//
//   }
//
//   getAttendees() {
//
//     axios.get(`/api/events/${this.props.match.params.id}/attending`)
//       .then(res => this.setState({ attendees: res.data }))
//       .catch(err => console.log(err))
//   }
//
//
//   render() {
//     if (!this.state.event) return null
//     console.log(this.state.event)
//     return (
//       <section >
//         <Navbar />
//         <div >
//
//           <Fragment>
//             <h2 >Event: {this.state.event.eventName}</h2>
//
//             <hr />
//             {!this.isAttending() && <EventCreator event={this.props.match.params.id} eventDetails={this.state.event}/>}
//             <div >
//               <div >
//
//                 <img src={this.state.event.partyImage} alt={this.state.event.name} />
//
//               </div>
//               <div >
//                 <h4 >Description</h4>
//                 <p>{this.state.event.description}</p>
//                 <hr />
//                 <h4 >Location</h4>
//                 <p>{this.state.event.location}</p>
//                 <hr />
//                 <h4 >What else?</h4>
//
//                 <hr />
//               </div>
//
//             </div>
//
//             <hr />
//
//             <EventComments event={this.state.event} getEventData={this.getData} attendees={this.state.attendees} me={this.state.me}/>
//
//
//           </Fragment>
//         </div>
//         <h3>These people are  members of this event group: </h3>
//         <Attendees attendees={this.state.attendees} />
//
//         {this.isAttending() && this.state.event && <AttendeeInfo event={this.state.event}/>}
//
//         <Map locations = {this.state.event}/>
//
//       </section>
//     )
//   }
// }
//
// export default eventShow
