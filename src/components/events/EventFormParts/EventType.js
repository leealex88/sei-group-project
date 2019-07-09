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
          value="art"
          className="button"
          onClick={this.props.handleClick}>
        Art & Culture
        </button>
        <button
          value="nature"
          className="button"
          onClick={this.props.handleClick}>
        Nature & Outdoors
        </button>
        <button
          value="entertainment"
          className="button"
          onClick={this.props.handleClick}>
        Entertainment
        </button>
        <button
          value="sport"
          className="button"
          onClick={this.props.handleClick}>
        Sports & Wellness
        </button>
        <button
          value="food"
          className="button"
          onClick={this.props.handleClick}>
        Food & Drink
        </button>
      </div>
    )
  }
}

export default EventType
