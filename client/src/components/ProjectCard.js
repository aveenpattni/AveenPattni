import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="projectCard">
        <h1>{this.props.proj.title}</h1>
        <div className="projectCard__imgContainer">
          <Carousel>
            <div>
              <img src={this.props.proj.image1} />
              <p className="legend">{this.props.proj.caption1}</p>
            </div>
            <div>
              <img src={this.props.proj.image2} />
              <p className="legend">{this.props.proj.caption2}</p>
            </div>
            <div>
              <img src={this.props.proj.image3} />
              <p className="legend">{this.props.proj.caption3}</p>
            </div>
          </Carousel>
        </div>
        <div className="projectCard__info">
          <div className="projectCard__stack projectCard--caption">
            <h4>Tech Stack:</h4>
            <p>{this.props.proj.stack}</p>
          </div>
          <div className="projectCard__high projectCard--caption">
            <h4>Highlights:</h4>
            <p>{this.props.proj.highlights}</p>
          </div>
          <div className="projectCard__description projectCard--caption">
            <h4>Description:</h4>
            <p>{this.props.proj.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
