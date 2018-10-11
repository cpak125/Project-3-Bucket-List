import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={UsersList} />
          <Route expact path='/users/:userId' component={User} />
        </Switch>
      </Router>

    )
  }
}

export default App
