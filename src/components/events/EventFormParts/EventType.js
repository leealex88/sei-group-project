import React from 'react'

class EventType extends React.Component {
  constructor() {
    super()

    this.state = {  type: {} }

  }

  render() {
    return (
      <div className="control ten columns">
        <button
          type="button"
          value="art"
          className="buttonEvent"
          onClick={this.props.handleClick}>
        Art & Culture
        </button>
        <button
          type="button"
          value="nature"
          className="buttonEvent"
          onClick={this.props.handleClick}>
        Nature & Outdoors
        </button>
        <button
          type="button"
          value="entertainment"
          className="buttonEvent"
          onClick={this.props.handleClick}>
        Entertainment
        </button>
        <button
          type="button"
          value="sport"
          className="buttonEvent"
          onClick={this.props.handleClick}>
        Sports & Wellness
        </button>
        <button
          type="button"
          value="food"
          className="buttonEvent"
          onClick={this.props.handleClick}>
        Food & Drink
        </button>
      </div>
    )
  }
}

export default EventType
