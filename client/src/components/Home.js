import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="home__hero">
          <img src="./assets/images/homeHero.jpeg" alt="Hero" />
          <div className="home__herotext">
            <h1>Aveen Pattni</h1>
            <ul>
              <li>Web Developer</li>
              <li>Mathematician</li>
              <li>Self-Proclaimed Athlete</li>
            </ul>
          </div>
        </section>
        <section className="home__infoContainer">
          <h3>My Story</h3>
          <div className="home__infoBlock">
            <div className="home__story">
              <p>
                I am 23 years old, born and raised in Mississauga, ON. I am a dynamic and detail-oriented full stack web developer motivated to create a positive impact in the world of digital consulting/development. Armed with various experience in information technology and digital transformation, I am talented in creating detail-focused, user-friendly solutions to solve modern problems.
              </p>
              <p>
                I possess a Bachelor of Mathematics from the University of Waterloo majoring in Information Technology Management. This program combines the fields of Mathematics, Business, and Technology to bridge the gap between management and technology. After completing my undergraduate degree, I entered the working world in digital transformation as an IT Analyst. This exposed me to web development which then I pursued as a career as it allows me to utilize my problem-solving skills while working in an
  environment where I am continuously learning and challenging myself. Most recently I obtained a diploma in Full Stack Web Development from BrainStation school for digital skill training.
              </p>
              <p>
                I am most comfortable developing in the MERN stack (MySQL/MongoDB, Express, React, Node) however, I am spending time broadening my skill set and currently learning the Angular framework as well as developing using Python.
              </p>
            </div>
            <div className="home__images">
              <a href="https://uwaterloo.ca/" target="__blank"><img src="./assets/images/uwlogo.png" alt="University of Waterloo" /></a>
              <a href="https://brainstation.io/" target="__blank"><img src="./assets/images/bslogo.png" alt="BrainStation" /></a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
