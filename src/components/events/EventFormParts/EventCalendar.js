import React from 'react'
import Calendar from 'react-calendar'

class EventCalendar extends React.Component {
  constructor() {
    super()

    this.state = {
      date: new Date(),
      fixed: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({ date })
    console.log(date)
  }

  render() {

    return (

      <div className="control ten columns">

        <Calendar
          onChange = {this.handleChange}
        />
        {/*add buttons*/}
      </div>

    )
  }
}

export default EventCalendar
