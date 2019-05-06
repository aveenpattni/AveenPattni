import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Landing extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
          <a href="#about"><button>About Me</button></a>
          <a href="#projects"><button>My Projects</button></a>
          <a href="#hobbies"><button>My Hobbies</button></a>
        </section>
        <section className="landing__about" id="about">
          <div className="landing__aboutContainer">
            <div className="landing__about--text">
              <p>
                I am a dynamic and detail-oriented full stack web developer from Mississauga, ON,  motivated to create a positive impact in the world of digital consulting/development. Armed with various experience in information technology and digital transformation, I am talented in creating detail-focused, user-friendly solutions to solve modern problems.
              </p>
            </div>
            <div className="landing__about--images">
              <img src="./assets/images/digital.jpeg" alt="About Intro" />
            </div>
          </div>
          <Link to="/about"><button>See More...</button></Link>
        </section>
        <section className="landing__projects" id="projects">
          <div className="landing__projectsContainer">
            
          </div>
          <Link to="/projects"><button>See More...</button></Link>
        </section>
        <section className="landing__hobbies" id="hobbies">
          <div className="landing__hobbiesContainer">

          </div>
          <Link to="/hobbies"><button>See More...</button></Link>
        </section>
      </div>
    )
  }
}
