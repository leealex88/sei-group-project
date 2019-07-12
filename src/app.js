import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/styles.scss'

import Homepage from './components/common/Homepage'
import EventsIndex from './components/events/eventsIndex'
import EventsShow from './components/events/EventsShow'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserProfile from './components/auth/UserProfile'
import PrivateMessage from './components/auth/PrivateMessage'
import Avatar from './components/auth/Avatar'
import Request from './components/auth/Request'
import UserShow from './components/auth/UserShow'
import UsersIndex from './components/auth/UsersIndex'
import EventNew from './components/events/EventNew'
import SearchedEvents from './components/events/SearchedEvents'
import SearchedUsers from './components/auth/SearchedUsers'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/searchevents/:query" component={SearchedEvents} />
          <Route path="/events/new" component={EventNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route path="/events/" component={EventsIndex} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/searchusers/:query" component={SearchedUsers} />
          <Route path="/users/:userid/avatar" component={Avatar} />
          <Route path="/users/:userid/message" component={PrivateMessage} />
          <Route path="/users/:userid" component={UserShow} />
          <Route path="/users/" component={UsersIndex} />
          <Route exact path="/" component={Homepage}/>
          <Route path="/myprofile/requests" component={Request} />
          <Route path="/myprofile" component={UserProfile} />
        </Switch>
      </main>
    </BrowserRouter>


  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
