import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class PrivateMessage extends React.Component {
  constructor() {
    super()

    this.state = { user: null, message: { text: '' } }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)


  }


  componentDidMount() {
    this.getData()
  }

  handleChange(e) {
    this.setState({ message: { text: e.target.value } })
  }

  getData() {
    axios.get(`/api/users/${this.props.match.params.userid}`)
      .then(res => this.setState({ user: res.data, message: {} }))
      .catch(err => console.log(err))
  }

  handleSubmit(e) {
    console.log('submitting', this.state.message)

    e.preventDefault()

    axios.post(`/api/users/${this.props.match.params.userid}/privateMessages`, this.state.message, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))

  }

  render() {
    console.log(this.props.match.params.userid)
    if (!this.state.user) return null
    const { user } = this.state
    return (
      <div >

        <h1 className="userTitle">{user.username}</h1>




        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="message..."
                onChange={this.handleChange}
                value={this.state.message.text || ''}
              >
              </textarea>
            </div>
          </div>
          <button className="button" type="submit">message</button>
        </form>



      </div>
    )
  }
}

export default PrivateMessage
