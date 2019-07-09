import React from 'react'

import { Link } from 'react-router-dom'




class Attendees extends React.Component {
  constructor() {
    super()

  }



  render() {
    if (!this.props.attendees) return null
    return (
      <section >

        {this.props.attendees.map(attendee =>
          <div key={attendee._id}>

            <Link to={`/users/${attendee._id}`} key={attendee._id}> <p> {attendee.username} </p></Link>
          </div>
        )}




      </section>
    )
  }
}

export default Attendees
