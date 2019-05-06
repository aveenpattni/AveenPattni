import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <section className="landing__hero">
          <img src="./assets/images/homeHero.jpeg" alt="Hero" />
          <div className="landing__herotext">
            <h1>Aveen Pattni</h1>
            <ul>
              <li>Web Developer</li>
              <li>Mathematician</li>
              <li>Self-Proclaimed Athlete</li>
            </ul>
          </div>
        </section>
        <section className="landing__nav">
          <button>More About Me</button>
          <button>Projects</button>
          <button>Hobbies</button>
        </section>
        <section className="landing__about">
          <div className="landing__aboutContainer">
            <div className="landing__about--text">

            </div>
            <div className="landing__about--images">

            </div>
          </div>
          <Link to="/about"><button>More...</button></Link>
        </section>
        <section className="landing__projects">
          <div className="landing__projectsContainer">
            
          </div>
          <Link to="/projects"><button>More...</button></Link>
        </section>
        <section className="landing__hobbies">
          <div className="landing__hobbiesContainer">
            
          </div>
          <Link to="/hobbies"><button>More...</button></Link>
        </section>
      </div>
    )
  }
}
