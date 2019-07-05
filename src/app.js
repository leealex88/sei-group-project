import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import './style.scss'


const App = () => {
  return (
    <BrowserRouter>
      <main>

        <Switch>


          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/events" component={eventIndex} />

        </Switch>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
