import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// This is a functional component which includes the links to Homepage component and the JobsIndex component.
// The Navbar is exported to the app.js component which is the parent of the whole project.
// As a result the Navbar is visable in every component.



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navComponents">
        <Link to="/" className="homePageLink"> <p>Stranger Things</p>
        </Link>
      </div>

      <div className="navComponents">
        <Link to="/events/new" className="homePageLink"> <p>Create Event</p>
        </Link>
      </div>

      <div className="navComponents">
        <Link to="/myprofile" className="homePageLink"> <p>My Profile</p>
        </Link>
      </div>
      <div className="navComponents">
        <Link to="/users" className="homePageLink"> <p>All Users</p>
        </Link>
      </div>

      <div onClick={Auth.logout()} className="navComponents">
        <Link to="/" className="homePageLink"> < p>Logout</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
