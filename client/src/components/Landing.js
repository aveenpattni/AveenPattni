import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import data from '../data/Projects';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';

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
          <h3>About Me</h3>
          <div className="landing__aboutContainer">
            <div className="landing__about--text">
              <Rotate top left>
                <p>
                  I am a dynamic and detail-oriented full stack web developer from Mississauga, ON,  motivated to create a positive impact in the world of digital consulting/development. Armed with various experience in information technology and digital transformation, I am talented in creating detail-focused, user-friendly solutions to solve modern problems.
              </p>
              </Rotate>
            </div>
            <div className="landing__about--images">
              <img src="./assets/images/digital.jpeg" alt="About Intro" />
            </div>
          </div>
          <Link to="/about"><button>See More...</button></Link>
        </section>
        <section className="landing__projects" id="projects">
          <h3>Projects</h3>
          <Flip top>
          <div className="landing__projectsContainer">
            <ProjectCard id={data[0].title} proj={data[0]} />
          </div>
          </Flip>
          <Link to="/projects"><button>See More...</button></Link>
        </section>
        <section className="landing__hobbies" id="hobbies">
          <h3>Hobbies</h3>
          <div className="landing__hobbiesContainer">
            <div className="landing__hobbies--text">
              <Zoom>
                <p>I have been involved with educational competitive robotics programs since 2010. I
                  started out as a competitor when I was in high school for the FIRST and VEX Robotics
                  programs. After finishing high school, I stayed involved as a mentor for FIRST Robotics
                  and a global key volunteer for VEX Robotics as a head referee. I stay involved as a
                  volunteer because I want to help make an incredible educational experience for the students.
              </p>
              </Zoom>
            </div>
            <div className="landing__hobbies--images">
              <img src="./assets/images/robotics.jpg" alt="Robotics" />
            </div>
          </div>
          <Link to="/hobbies"><button>See More...</button></Link>
        </section>
      </div>
    )
  }
}
