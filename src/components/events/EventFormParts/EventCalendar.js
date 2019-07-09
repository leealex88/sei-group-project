import React from 'react'
import Calendar from 'react-calendar'
import TimeField from 'react-simple-timefield'


class EventCalendar extends React.Component {
  constructor() {
    super()

    this.state = {
      date: new Date(),
      startTime: '10:00',
      endTime: '12:00'
    }

    this.handleChange = this.handleChange.bind(this)
    this.onChangeStart = this.onChangeStart.bind(this)
    this.onChangeEnd = this.onChangeEnd.bind(this)
  }

  handleChange(date) {
    this.setState({ date })
    console.log(date)
  }

  onChangeStart (startTime) {
    this.setState({ startTime })
  }
  onChangeEnd (endTime) {
    this.setState({ endTime })
  }


  render() {
    console.log(this.state.startTime)
    console.log(this.state.endTime)
    return (

      <div className="control ten columns">

        <Calendar
          onChange = {this.handleChange}
        />

        <label>Start Time</label>
        <div
          style={{
            
          }}
        >
          <TimeField
            value={this.state.startTime}
            onChange={this.onChangeStart}
            style={{
              width: 60
            }}
          />
          <label>End Time</label>
          <TimeField
            onChange={this.onChangeEnd}
            value={this.state.endTime}
            style={{
              width: 60
            }}
          />
        </div>
      </div>



    )
  }
}

export default EventCalendar
