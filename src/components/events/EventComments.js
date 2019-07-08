import React, { Fragment } from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Map from './Map'
import EventCreator from './EventCreator'


class EventComments extends React.Component {
  constructor() {
    super()

    this.state = { comment: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }

  getData() {
    axios.get(`/api/events/${this.props.event.id}`)
      .then(res => this.setState({ event: res.data, comment: {} }))
      .catch(err => console.log(err))
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/events/${this.props.event.id}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }



  isOwner(comment) {
    return Auth.getPayload().sub === comment.user._id
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/events/${this.props.event.id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  render() {
    if (!this.props.event) return null
    const { event } = this.props
    console.log(event)
    return (

      <section >
        <div >

          {event.comments.map(comment => (
            <div key={comment._id} className="card">
              <div className="card-content">
                {comment.text} - {new Date(comment.createdAt).toLocaleString()}
              </div>
              {this.isOwner(comment) && <button

                onClick={() => this.handleCommentDelete(comment)}
              >Delete
              </button>}
            </div>
          ))}
          <hr />
          {Auth.isAuthenticated() &&

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
