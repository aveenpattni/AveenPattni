import React, { Component } from 'react'

export default class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies">
        <section className="hobbies__hero">
          <img src="./assets/images/hobby.jpeg" alt="Hero Image" />
          <div className="hobbies__herotext">
            <h2>My Hobbies</h2>
          </div>
        </section>
        <section className="hobbies__main">
          <h3>Sports</h3>
          <div className="hobbies__card">
            <div className="hobbies__card--text">
              <p>I play soccer</p>
            </div>
            <div className="hobbies__card--picture">
              <img src="./assets/images/soccer.jpg" alt="Soccer" />
            </div>
          </div>
          <h3>Robotics</h3>
          <div className="hobbies__card">
            <div className="hobbies__card--text">
              <p>I play with robots</p>
            </div>
            <div className="hobbies__card--picture">
              <img src="./assets/images/robotics.jpg" alt="Robotics" />
            </div>
          </div>
          <h3>Fitness</h3>
          <div className="hobbies__card">
            <div className="hobbies__card--text">
              <p>I am fit</p>
            </div>
            <div className="hobbies__card--picture">
              <img src="./assets/images/fitness.jpg" alt="Robotics" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
