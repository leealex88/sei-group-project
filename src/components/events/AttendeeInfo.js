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

        <p> Only members of the event group can see this info: </p>

      </section>
    )
  }
}

export default AttendeeInfo
