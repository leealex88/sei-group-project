import React from 'react'
import Calendar from 'react-calendar'
import TimeField from 'react-simple-timefield'


class EventCalendar extends React.Component {
  constructor() {
    super()

    this.state = {
      startTime: '10:00',
      endTime: '12:00'
    }

  }

  render() {
    // const {startTime} = this.props
    // or this.props.startTime
    console.log()
    return (

      <div className="control ten columns">

        <Calendar
          onChange={this.props.handleDate}
        />


        <div className="timingDivs">
          <label>Start Time</label>
          <TimeField
            value={this.state.startTime}
            name="startTime"
            onChange={this.props.handleTimeStart}
            id="timeStart"
            style={{
              width: 80
            }}
          />
          <label>End Time</label>
          <TimeField
            onChange={this.props.handleTimeEnd}
            value={this.state.endTime}
            id="timeStop"
            style={{
              width: 80
            }}
          />
        </div>
      </div>
    )
  }
}

export default EventCalendar
