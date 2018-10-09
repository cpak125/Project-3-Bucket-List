import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import BucketList from './components/BucketList';

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} /> 
          <Route expact path='/users/:userId' component={BucketList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
