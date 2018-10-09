import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/api/users' component={Users} /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
