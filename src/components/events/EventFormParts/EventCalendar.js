import React from 'react'
import Calendar from 'react-calendar'
import TimePicker from 'react-time-picker'


class EventCalendar extends React.Component {
  constructor() {
    super()

    this.state = {
      date: new Date(),
      startTime: '10:00',
      endTime: '10:00'
    }

    this.handleChange = this.handleChange.bind(this)
    this.onChangeStart = this.onChangeStart.bind(this)
    this.onChangeEnd = this.onChangeEnd.bind(this)
  }

  handleChange(date) {
    this.setState({ date })
    console.log(date)
  }

  onChangeStart (e, startTime) {
    this.setState({ startTime })
  }
  onChangeEnd (e, endTime) {
    this.setState({ endTime })
  }


  render() {

    return (

      <div className="control ten columns">

        <Calendar
          onChange = {this.handleChange}
        />

        <label> Start Time</label>
        <TimePicker
          onChange={this.onChangeStart}
          value={this.state.startTime}
        />
        <label> Start Time</label>
        <TimePicker
          onChange={this.onChangeEnd}
          value={this.state.endTime}
        />
      </div>



    )
  }
}

export default EventCalendar
