import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../lib/Auth'
// import { Link } from 'react-router-dom'
// This is a functional component which includes the links to Homepage component and the JobsIndex component.
// The Navbar is exported to the app.js component which is the parent of the whole project.
// As a result the Navbar is visable in every component.

const Navbar = () => {
  return(
    <nav className="navbar is-primary has-background-danger" role="navigation" aria-label="main navigation">

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start has-text-white">
          <Link to="/" className="navbar-item">
            Home Page
          </Link>
          <Link to="/login" className="navbar-item">
          Login
          </Link>
          <Link to="/register" className="navbar-item">
          Register
          </Link>
        </div>

        <div className="navbar-start has-text-white">
          <Link to="/flowers" className="navbar-item">
            Choose your Flower
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
