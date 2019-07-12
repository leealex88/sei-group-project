import React from 'react'
import axios from 'axios'

import { avatars } from './AvatarImages.js'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'



class Avatar extends React.Component {
  constructor() {
    super()

    this.state = { user: null,  data: { avatar: null } }
    this.handleAvatar = this.handleAvatar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  componentDidMount() {
    this.getData()
  }

  getData(){
    axios.get('/api/myprofile', {
      headers: { Authorization: ` ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  handleAvatar(e) {
    e.target.style.opacity = 1
    this.setState({ data: { avatar: e.target.src }  })

    console.log(this.state.data)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    const data = this.state.data

    axios.patch(`/api/users/${this.state.user._id}`, data , {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })

      .then(() => this.props.history.push('/myprofile'))
      .catch(err => console.log(err))

  }


  render() {
    if (!this.state.user) return null

    console.log(this.state.user)
    return (

      <main>
        <Navbar />
        <div>

          <div className="containerFront">
            <h1> Avatars </h1>
            {avatars.map((image, i) => (
              <img className="avatar" id="chooseAvatar" src={`/assets/SVG/${image}`} key={i} onClick={this.handleAvatar} />))}
            <div>
              <button type="submit" className="button" onClick={this.handleSubmit}>Make Avatar</button>
            </div>
          </div>

        </div>

      </main>
    )
  }
}

export default Avatar
