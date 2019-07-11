import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import TheirEvents from './TheirEvents'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'

class UserShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null, comment: {} }
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
    axios.get(`/api/users/${this.props.match.params.userid}`)
      .then(res => this.setState({ user: res.data, comment: {} }))
      .catch(err => console.log(err))
  }



  handleSubmit(e) {
    console.log('submitting')
    e.preventDefault()

    axios.post(`/api/users/${this.props.match.params.userid}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }



  isOwner(comment) {
    return Auth.getPayload().sub === comment.user._id
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/users/${this.props.match.params.id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.user)
    if (!this.state.user) return null
    const { user } = this.state
    return (
      <main>
        <Navbar />
        <div id="userProfileMain">
          <img className="userPicture" src={user.avatar}/>
          <div className="userBio">
            <h5 className="userTitle">{user.username}</h5>
            <p>{ user.bio }</p>
          </div>
          <hr/>
          <h5> {user.username} is interested in... </h5>
          <hr/>
          {user.interests.map((interest, i) =>
            <Link key={i} to={`/events/${interest}`}> <button> {interest} </button></Link>
          )}

          <div className="messenger">
            <p>Have a Chat with Me!  </p>
            <Link to={`/users/${user._id}/message`}> <button> 💬 Private Message </button> </Link>
          </div>
          <p> Have you attended an event with {user.username}? Let others know how it was! </p>
          <div className="commentSection">
            {user.comments.map(comment => (
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
            {Auth.isAuthenticated() &&
          <form  onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control">
                <textarea
                  className="userCommentSection"
                  placeholder="Comment..."
                  onChange={this.handleChange}
                  value={this.state.comment.text || ''}
                >
                </textarea>
              </div>
            </div>
            <button type="submit">Post a Comment</button>
          </form>}

          </div>
          <section className="usersEventsSection">
            <p> {user.username} is attending these events: </p>
            <TheirEvents user={this.props.match.params.userid} />
          </section>
        </div>
      </main>
    )
  }
}

export default UserShow
