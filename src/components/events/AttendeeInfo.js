import React from 'react'



class AttendeeInfo extends React.Component {
  constructor() {
    super()


  }


  render() {
    if (!this.props.event.privateInfo) return null
    console.log(this.props)
    return (
      <section >

        <p> Private information for group members only: </p>
        <p>{this.props.event.privateInfo}</p>
      </section>
    )
  }
}

export default AttendeeInfo
