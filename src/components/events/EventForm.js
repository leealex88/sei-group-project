import React from 'react'
// import ReactFilestack from 'filestack-react'
import Select from 'react-select'
import EventCalendar from './EventFormParts/EventCalendar'
import EventType from './EventFormParts/EventType'
import { borough } from './EventFormParts/EventBorough'


const EventForm = ({  handleChange, handleClick, handleSubmit, handleDate, handleTimeStart, handleTimeEnd, handleBorough }) => (
  <form className="eventForm" onSubmit={handleSubmit}>
    <div className="container section-container" id="newEvent">
      <div className="row">
        <h2>Things</h2>
        <div className="control eleven columns">
          <label>Type of the Event (required)</label>
          <EventType
            handleClick={handleClick}
          />
        </div>
        <div className="control eleven columns">
          <label htmlFor="exampleEmailInput">Name of the Event (required)</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="eventName"
            onChange={handleChange}
          />
        </div>
        <div className="control eleven columns">
          <label>Date & Time  (required)</label>
          <EventCalendar
            handleDate={handleDate}
            handleTimeStart={handleTimeStart}
            handleTimeEnd={handleTimeEnd}
          />
        </div>
        <div className="control eleven columns">
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
        <div className="control eleven columns">
          <label>Location</label>
          <h6>Which Borough in London is the event taking place?</h6>
          <Select
            defaultValue = {borough[0]}
            options= {borough}
            onChange={handleBorough}
          />
        </div>
        <div className="control eleven columns">
          <label>Describe the Event</label>
          <textarea
            className="u-full-width"
            minLength="10"
            maxLength="460"
            type="text"
            placeholder="..."
            name="description"
            id="description"
            onChange={handleChange}
          />
          <label>Atelevendee details</label>
          <p>You can put any private information in here, such as the exact address - this will only be shown to peopl who you have accepted as atelevendees.</p>
          <textarea
            className="u-full-width"
            minLength="10"
            maxLength="460"
            type="text"
            placeholder="..."
            name="description"
            id="description"
            onChange={handleChange}
          />
          <hr />
        </div>
        {/* condense all ticket questions into component. tickets to be Boolean, ticketLink to be string */}
        <div className="control eleven columns">
          <h4>Tickets, links and equipment</h4>
          <label className="control eleven columns">Do you need a ticket?</label>
          <div className="eleven columns">
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="yes"
                  value="yes"
                  
                  onChange={handleChange}
                />
                  Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="no"
                  value="no"
                  onChange={handleChange}
                />
                    No
              </label>
            </div>
          </div>
          <div className="control eleven columns">
            <label>Cost</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="cost"
              onChange={handleChange}
            />
          </div>
          <div className="control eleven columns">
            <label>Link to the tickets</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="ticketLink"
              onChange={handleChange}
            />
          </div>
          <div className="control eleven columns">
            <label>Link to the event</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="eventLink"
              onChange={handleChange}
            />
          </div>
          <div className="control eleven columns">
            <label>Preparation</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="preparation"
              onChange={handleChange}
            />
          </div>
          <div className="control eleven columns">
            <label>Is any equipment provided?</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="provided"
              onChange={handleChange}
            />
          </div>
          <div className="control eleven columns">
            <label>What you need to bring with you</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="whatToBring"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="control eleven columns">
          <div className="control four columns" id="sizeOfTheGroup">
            <label>Min Size</label>
            <select
              name="minSize"
            >
              <option value = "2">2</option>
              <option value = "3">3</option>
              <option value = "4">4</option>
              <option value = "5">5</option>
            </select>
            <label>Max Size</label>
            <select
              name="maxSize"
            >
              <option value = "3">3</option>
              <option value = "4">4</option>
              <option value = "5">5</option>
              <option value = "6">6</option>
              <option value = "7">7</option>
              <option value = "8">8</option>
              <option value = "9">9</option>
            </select>
            <label>Ideal size of the group</label>
            <select
              name="idealGroupSize"
            >
              <option value = "2">2</option>
              <option value = "3">3</option>
              <option value = "4">4</option>
              <option value = "5">5</option>
              <option value = "6">6</option>
              <option value = "7">7</option>
              <option value = "8">8</option>
              <option value = "9">9</option>
            </select>
          </div>
          <div className="control eleven columns">
            <label>Party Pic</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="partyImage"
              onChange={handleChange}
            />
          </div>
          <div className="control eleven columns">
            <label>Tags</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="tags"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <div className="control eleven columns">
              <select
                onChange={handleChange} name="skillLevel">
                <option disabled value="">Skill level</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Expert</option>
              </select>
            </div>
          </div>
          <div className="control eleven columns">
            <label>Comments</label>
            <input
              className="u-full-width"
              type="input"
              placeholder=""
              name="comments"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="control eleven columns">
          <button type="submit" className="button">Submit</button>
        </div>
      </div>
    </div>
  </form>

)

export default EventForm
