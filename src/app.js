import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss'

import EventsIndex from './components/events/eventsIndex'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {
  return (
    <BrowserRouter>
      <main>


        <EventsIndex/>
        <Login />
        <Register />

      </main>
    </BrowserRouter>


  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



{/*
  <Route path="/register" component={Register} />
  <Route path="/login" component={Login} />
  <Route path="/events" component={EventsIndex} /> */}
