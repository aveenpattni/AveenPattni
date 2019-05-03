import React, { Component } from 'react'

export default class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies">
        <section className="hobbies__hero">
          <img src="./assets/images/hobby.jpeg" alt="Hero" />
          <div className="hobbies__herotext">
            <h2>My Hobbies</h2>
          </div>
        </section>
        <section className="hobbies__main">
          <h3>Sports</h3>
          <div className="hobbies__card">
            <div className="hobbies__card--text">
              <p>Sports have always been my number 1 pastime throughout my life.
                Growing up I had played almost every sport. The two sports I play most
                often are basketball and soccer. My agility, speed, an IQ help me excel
                at any sport that I pick up.</p>
            </div>
            <div className="hobbies__card--picture">
              <img src="./assets/images/soccer.jpg" alt="Soccer" />
            </div>
          </div>
          <h3>Robotics</h3>
          <div className="hobbies__card reverse">
            <div className="hobbies__card--text">
              <p>I have been involved with educational competitive robotics programs since 2010. I 
                started out as a competitor when I was in high school for the FIRST and VEX Robotics 
                programs. After finishing high school, I stayed involved as a mentor for FIRST Robotics
                and a global key volunteer for VEX Robotics as a head referee. I stay involved as a 
                volunteer because I want to help make an incredible educational experience for the students.
              </p>
            </div>
            <div className="hobbies__card--picture">
              <img src="./assets/images/robotics.jpg" alt="Robotics" />
            </div>
          </div>
          <h3>Fitness</h3>
          <div className="hobbies__card">
            <div className="hobbies__card--text">
              <p>Personal fitness has become increasingly important to me as I have gotten older. Taking 
                care of my body and my health is something which I beleive will benefit me more later on 
                in life than it will now. Staying in great physical shape now is also something that is 
                important to me. This includes staying active through working out and playing sports, as 
                well as maintaining a healthy diet.
              </p>
            </div>
            <div className="hobbies__card--picture">
              <img src="./assets/images/fitness.jpg" alt="Fitness" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
