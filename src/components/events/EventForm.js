import React from 'react'
// import ReactFilestack from 'filestack-react'
import Select from 'react-select'
import EventCalendar from './EventFormParts/EventCalendar'
import EventType from './EventFormParts/EventType'
import { borough } from './EventFormParts/EventBorough'


const EventForm = ({  handleChange }) => (
  <form className="eventForm">
    <div className="container" id="newEvent">
      <div className="row">
        <h2>Things</h2>
        <div className="control ten columns">
          <label>Type of the Event</label>
          <EventType />
        </div>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">Name of the Event</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="eventName"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label>Date & Time</label>
          <EventCalendar />
        </div>
        <div className="control ten columns">
          <label>Schedule</label>
          <textarea
            className="u-full-width"
            type="input"
            placeholder=""
            name="schedule"
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="control ten columns">
          <label>Location</label>
          <h6>Which Borough in London is the event taking place?</h6>

          <Select
            defaultValue = {borough[0]}
            options= {borough}
          />
        </div>
        <div className="control ten columns">
          <label>Describe the Event</label>
          <textarea
            className="u-full-width"
            minLength="50"
            maxLength="460"
            type="text"
            placeholder="..."
            name="description"
            id="description"
            onChange={handleChange}
          />
        </div>
        {/* condense all ticket questions into component. tickets to be Boolean, ticketLink to be string */}
        <p className="control ten columns">Do you need a ticket?</p>
        <div className="ten columns">
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                checked=""
                name="yes"
                value="yes"
                onChange={handleChange}
              />
                Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                checked="yes"
                name="no"
                value=""
                onChange={handleChange}
              />
                  No
            </label>
          </div>
        </div>
        <div className="control ten columns">
          <label>Link to the tickets</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="ticketLink"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label>Link to the event</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="eventLink"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label>Preparation</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="preparation"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">The cost</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="cost"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label>Is any equipment provided?</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="provided"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label>What you need to bring with you.</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="whatToBring"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <p>
            <label>Max Size</label>
            <select id = "myList">
              <option value = "1">1</option>
              <option value = "2">2</option>
              <option value = "3">3</option>
              <option value = "4">4</option>
            </select>
          </p>

          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Min Size</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Ideal size of the group</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Anything else</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Party Image</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Tags</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <div className="control ten columns">
              <select
                onChange={handleChange} name="skillLevel">
                <option disabled value="">Skill level</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Expert</option>
              </select>
            </div>
          </div>
          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Comments</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="password confirmation"
              id="exampleEmailInput"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="control ten columns">
          <button type="submit" className="button">Submit</button>
        </div>
      </div>
    </div>
  </form>

)

export default EventForm


// <input
//   className="u-full-width"
//   type="input"
//   placeholder=""
//   name="username"
//   id="exampleEmailInput"
//   onChange={handleChange}/>
