import React from 'react'

class EventType extends React.Component {
  constructor() {
    super()

    this.state = {  type: {} }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({ type: e.target.value  })
  }

  render() {
    console.log(this.state)
    return (
      <div className="control ten columns">
        <button
          value="art"
          className="button"
          onClick={this.handleClick}>
        Art & Culture
        </button>
        <button
          value="nature"
          className="button"
          onClick={this.handleClick}>
        Nature & Outdoors
        </button>
        <button
          value="entertainment"
          className="button"
          onClick={this.handleClick}>
        Entertainment
        </button>
        <button
          value="sport"
          className="button"
          onClick={this.handleClick}>
        Sports & Wellness
        </button>
        <button
          value="food"
          className="button"
          onClick={this.handleClick}>
        Food & Drink
        </button>
      </div>
    )
  }
}

export default EventType
