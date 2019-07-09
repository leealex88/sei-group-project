import React from 'react'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'
// This is a functional component which includes the code for the homepage.
// Here you can find the title of the project and a short description of what the website does.
// This component is one of the Routes inside of the app.js and is a first page the users see when they land on the project.



class Homepage extends React.Component {
  constructor() {
    super()

    this.state = {
      panelOpen: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ panelOpen: !this.state.panelOpen })
  }



  render() {
    return (
      <section>
        <div className="panels">
          <div className="panel panel1">
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div
            className={`panel panel3 ${this.state.panelOpen ? 'open open-active' : ''}`}
            onClick={this.handleClick}
          >
            <Link className="homePageLink" to="/register">
              <p>Register</p>

            </Link>
            <p>Stranger Things</p>
            <Link className="homePageLink" to="/login">
              <p>Login</p>
            </Link>
          </div>
          <div className="panel panel5">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
    )

  }
}

export default Homepage


// <Link to="/jobs" className="button is-medium is-primary">
//   Find a job
// </Link>
