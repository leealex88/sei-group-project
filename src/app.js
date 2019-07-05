import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import './style.scss'

import Login from './components/auth/Login'
import Register from './components/auth/Register'





const App = () => {
  return (
    <BrowserRouter>
      <main>

        <Switch>


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



// <Route path="/events" component={eventIndex} />
