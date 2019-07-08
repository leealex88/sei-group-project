import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/styles.scss'

import Homepage from './components/common/Homepage'
import EventsIndex from './components/events/eventsIndex'
import EventsShow from './components/events/EventsShow'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserShow from './components/auth/UserShow'
import UsersIndex from './components/auth/UsersIndex'
import EventNew from './components/events/EventNew'



const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/events/new" component={EventNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route path="/events/" component={EventsIndex} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/users/:userid" component={UserShow} />
          <Route path="/users/" component={UsersIndex} />
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </main>
    </BrowserRouter>


  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
