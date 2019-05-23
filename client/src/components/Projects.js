import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import data from '../data/Projects';
import Fade from 'react-reveal/Fade';

export default class Projects extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="projects">
        <section className="projects__hero">
          <img src="./assets/images/projectHero.jpeg" alt="Hero" />
          <div className="projects__herotext">
            <h2>My Projects</h2>
          </div>
        </section>
        <div className="projects__cards">
          {
            data.map(item=>{
              return <Fade><ProjectCard id={item.title} proj={item} /></Fade>
            })
          }
        </div>
      </div>
    )
  }
}
