import React, { Component } from 'react';
import {Route, Switch, Link, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact render={(props) => {return <Navbar {...props}/> }} />
        <Route path="/:page" render={(props) => {return <Navbar {...props}/> }} />
        <Switch>
          <Route path="/" exact render={() => {return <Home/> }} />
        </Switch>
      </div>
    );
  }
}

export default App;