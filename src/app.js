import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/styles.scss'

import EventsIndex from './components/events/eventsIndex'
import EventsShow from './components/events/EventsShow'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/events/:id" component={EventsShow} />
          <Route path="/events/" component={EventsIndex} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>

      </main>
    </BrowserRouter>


  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
