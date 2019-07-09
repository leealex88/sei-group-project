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

        <label>Start Time</label>
        <div>
          <TimeField
            value={this.state.startTime}
            name="startTime"
            onChange={this.props.handleTimeStart}
            style={{
              width: 60
            }}
          />
          <label>End Time</label>
          <TimeField
            onChange={this.props.handleTimeEnd}
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
