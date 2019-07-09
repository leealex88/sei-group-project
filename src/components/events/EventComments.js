import React, { Fragment } from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'



class EventComments extends React.Component {
  constructor() {
    super()

    this.state = { event: null, comment: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }



  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }




  handleSubmit(e) {
    console.log('submitting')
    e.preventDefault()

    axios.post(`/api/events/${this.props.event._id}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => {
        this.props.getEventData()
        this.setState({ comment: '' })
      })
      .catch(err => console.log(err))
  }

  isOwner(comment) {
    return Auth.getPayload().sub === comment.user._id
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/events/${this.props.event._id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  isAttending(){
    if (this.props.attendees)
      return this.props.attendees.map(attendee => attendee._id).includes(this.props.me)
  }

  render() {
    if (!this.props.event) return null
    // const { event } = this.props
    console.log(this.state)
    return (

      <section >
        <div >
          {this.props.event.comments.map(comment => (
            <div key={comment._id} className="card">

              <div className="card-content">
                {comment.text} - {new Date(comment.createdAt).toLocaleString()}
              </div>
              {this.isOwner(comment) &&
                <button
                  onClick={() => this.handleCommentDelete(comment)}
                >
                  Delete
                </button>}
            </div>
          ))}

          <hr />

          {Auth.isAuthenticated() && this.isAttending() &&

            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Comment..."
                    onChange={this.handleChange}
                    value={this.state.comment.text || ''}
                  >
                  </textarea>
                  <button className="button" type="submit">Comment</button>
                </div>
              </div>

            </form>}
        </div>




      </section>


    )
  }
}

export default EventComments
