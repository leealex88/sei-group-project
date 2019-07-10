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
          className="button"
          onClick={this.props.handleClick}>
        Art & Culture
        </button>
        <button
          type="button"
          value="nature"
          className="button"
          onClick={this.props.handleClick}>
        Nature & Outdoors
        </button>
        <button
          type="button"
          value="entertainment"
          className="button"
          onClick={this.props.handleClick}>
        Entertainment
        </button>
        <button
          type="button"
          value="health"
          className="button"
          onClick={this.props.handleClick}>
        Health & Wellbeing
        </button>
        <button
          type="button"
          value="food"
          className="button"
          onClick={this.props.handleClick}>
        Food & Drink
        </button>
        <button
          type="button"
          value="community"
          className="button"
          onClick={this.props.handleClick}>
        Community
        </button>
        <button
          type="button"
          value="learning"
          className="button"
          onClick={this.props.handleClick}>
        Learning
        </button>
        <button
          type="button"
          value="sport"
          className="button"
          onClick={this.props.handleClick}>
        Sport & Fitness
        </button>
      </div>
    )
  }
}

export default EventType
