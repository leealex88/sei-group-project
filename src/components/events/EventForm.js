import React from 'react'
import ReactFilestack from 'filestack-react'

const EventForm = ({  handleChange }) => (
  <form className="eventForm">
    <div className="container" id="newEvent">
      <div className="row">
        <h2>Things</h2>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">Type of the Event</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="username"
            id="exampleEmailInput"
            onChange={handleChange}/>
        </div>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">Name of the Event</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="email"
            id="exampleEmailInput"
            onChange={handleChange}
          />
        </div>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">
            Date of the Event</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="password"
            id="exampleEmailInput"
            onChange={handleChange}
          />
        </div>
        <p className="control ten columns">Is the date fixed?</p>
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
                checked=""
                name="no"
                value=""
                onChange={handleChange}
              />
                  No
            </label>
          </div>
        </div>
        <br />
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">
            <p>Location</p>
            <h6>Which Borough in London is the event taking place?</h6>
          </label>

          <input
            className="input is-primary"
            type="text"
            placeholder="Borough"
            onChange={handleChange}
            // value={this.state.searchTerm}
          />


        </div>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">Describe the Event</label>
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
          <label htmlFor="exampleEmailInput">Schedule</label>
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
          <label htmlFor="exampleEmailInput">Start Time</label>
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
          <label htmlFor="exampleEmailInput">End Time</label>
          <input
            className="u-full-width"
            type="input"
            placeholder=""
            name="password confirmation"
            id="exampleEmailInput"
            onChange={handleChange}
          />
        </div>
        <p className="control ten columns">Is the ticket necessery to buy?</p>
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
                checked=""
                name="no"
                value=""
                onChange={handleChange}
              />
                  No
            </label>
          </div>
        </div>
        <div className="control ten columns">
          <label htmlFor="exampleEmailInput">Link to the tickets</label>
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
          <label htmlFor="exampleEmailInput">Link to the event</label>
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
          <label htmlFor="exampleEmailInput">Link to the tickets</label>
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
          <label htmlFor="exampleEmailInput">Preparation</label>
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
          <label htmlFor="exampleEmailInput">The cost</label>
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
          <label htmlFor="exampleEmailInput">Provided</label>
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
          <label htmlFor="exampleEmailInput">What you need to bring with.</label>
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
          <p>
            <label htmlFor="exampleEmailInput">Max Size</label>
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


//   <input
//     className="u-full-width"
//     type="input"
//     placeholder=""
//     name="password confirmation"
//     id="exampleEmailInput"
//     onChange={handleChange}
//   />
// </div>
