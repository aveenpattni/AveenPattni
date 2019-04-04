import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <div className="navbar__home">
            <h1>Aveen Pattni</h1>
            <img src="./assets/images/aveen.jpg" alt="Aveen" />
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