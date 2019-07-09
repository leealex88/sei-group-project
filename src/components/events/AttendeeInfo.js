import React from 'react'



class AttendeeInfo extends React.Component {
  constructor() {
    super()


  }


  render() {
    if (!this.props.event) return null
    console.log(this.props)
    return (
      <section >

        <p>The event host has accepted your request to join this event group.Here are the private details of this event. </p>

      </section>
    )
  }
}

export default AttendeeInfo
