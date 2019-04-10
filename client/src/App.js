import React, { Component } from 'react';
import {Route, Switch, Link, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact render={(props) => {return <Navbar {...props}/> }} />
        <Route path="/:page" render={(props) => {return <Navbar {...props}/> }} />
        <Switch>
          <Route path="/" exact render={() => {return <Home/> }} />
          <Route path="/projects" exact render={() => {return <Projects/> }} />
          <Route path="/experience" exact render={() => {return <Experience/> }} />
          <Route path="/hobbies" exact render={() => {return <Hobbies/> }} />
          <Route path="/contact" exact render={() => {return <Contact/> }} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;