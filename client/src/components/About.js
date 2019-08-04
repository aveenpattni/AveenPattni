import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="about">
        <section className="about__hero">
          <img src="./assets/images/homeHero.jpeg" alt="Hero" />
          <div className="about__herotext">
            <h1>Aveen Pattni</h1>
            <ul>
              <li>Web Developer</li>
              <li>Mathematician</li>
              <li>Self-Proclaimed Athlete</li>
            </ul>
          </div>
        </section>
        <section className="about__infoContainer">
          <h3>My Story</h3>
          <div className="about__infoBlock">
            <div className="about__story">
              <Slide right>
                <p>
                  I am a dynamic and detail-oriented full stack web developer from Mississauga, ON,  motivated to create a positive impact in the world of digital consulting/development. Armed with various experience in information technology and digital transformation, I am talented in creating detail-focused, user-friendly solutions to solve modern problems.
                </p>
                <p>
                  I am currently working as a Software Developer II at Walmart Labs.
                </p>
                <p>
                  I possess a Bachelor of Mathematics from the University of Waterloo majoring in Information Technology Management. This program combines the fields of Mathematics, Business, and Technology to bridge the gap between management and technology.
                </p>
                <p>
                  After completing my undergraduate degree, I entered the working world in digital transformation as an IT Analyst. This gave me good exposure to many areas of Information Technology with focus on the technical and managerial side. This role also exposed me to web development which then I took an interest in and decided to learn more about.
                </p>
                <p>
                  I enjoy application development as it allows me to utilize my problem-solving skills while working in an environment where I am continuously learning and challenging myself. Most recently I obtained a diploma in Full Stack Web Development from BrainStation school for digital skill training.
                </p>
                <p>
                  I am most comfortable developing in the MERN stack (MySQL/MongoDB, Express, React, Node) however, I am spending time broadening my skill set and currently learning the Angular framework as well as developing using Python.
                </p>
              </Slide>
            </div>
            <div className="about__images">
              <Fade>
                <a href="https://uwaterloo.ca/" target="__blank"><img src="./assets/images/uwlogo.png" alt="University of Waterloo" /></a>
                <a href="https://brainstation.io/" target="__blank"><img src="./assets/images/bslogo.png" alt="BrainStation" /></a>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
