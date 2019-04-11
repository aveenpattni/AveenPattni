import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import data from '../data/Projects';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>My Projects</h2>
        <div className="projects__cards">
          {
            data.map(item=>{
              return <ProjectCard proj={item} />
            })
          }
        </div>
      </div>
    )
  }
}
