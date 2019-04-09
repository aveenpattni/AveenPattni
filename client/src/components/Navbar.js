import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default class Navbar extends Component {
  state={
    menu: false
  }
  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({
      menu: !this.state.menu
    })
  }
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__menu">
          <img onClick={this.toggleMenu} src="./assets/icons/menu.svg" alt="Menu" />
        </div>
        {this.state.menu ? <Menu toggle={this.toggleMenu}/> : <></>}
        <Link to="/" className="navbar__a">
          <div className="navbar__home">
            <img src="./assets/images/aveen.jpg" alt="Aveen" />
            <h1>Aveen Pattni</h1>
          </div>
        </Link>
        <div className="navbar__tabs">
          <div className={this.props.match.params.page === "projects" ? "navbar__tab navbar__tab--selected" : "navbar__tab"}>
            <Link to="/projects"><h4>Projects</h4></Link>
          </div>
          <div className={this.props.match.params.page === "experience" ? "navbar__tab navbar__tab--selected" : "navbar__tab"}>
            <Link to="/experience"><h4>Experience</h4></Link>
          </div>
          <div className={this.props.match.params.page === "extracurricular" ? "navbar__tab navbar__tab--selected" : "navbar__tab"}>
            <Link to="/extracurricular"><h4>Extracurricular</h4></Link>
          </div>
          <div className={this.props.match.params.page === "contact" ? "navbar__tab navbar__tab--selected" : "navbar__tab"}>
            <Link to="/contact"><h4>Contact</h4></Link>
          </div>
        </div>
      </nav>
    )
  }
}