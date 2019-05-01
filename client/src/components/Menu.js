import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menu__title" onClick={this.props.toggle}>Menu</h1>
        <ul className="menu__list" onClick={this.props.toggle}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/hobbies"><li>Hobbies</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    )
  }
}