import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__contact">
          <div className="footer__card">
            <a href="https://www.linkedin.com/in/aveenpattni/" target="__blank"><img src="./assets/images/linkedin.png" alt="LinkedIn" /></a>
          </div>
          <div className="footer__card">
            <a href="https://github.com/aveenpattni" target="__blank"><img src="./assets/images/github.png" alt="GitHub" /></a>
          </div>
          <div className="footer__card">
            <a href="mailto: aveenpattni@gmail.com"><img src="./assets/images/email.png" alt="Email" /></a>
          </div>
          <div className="footer__card">
            <a href="https://drive.google.com/file/d/1W486OyXJCSMsUT8sWuHyzlePIwf3O9oQ/view?usp=sharing" target="__blank"><img src="./assets/images/resume.png" alt="Resume" /></a>
          </div>
        </div>
        <h3>An Aveen Pattni Production.</h3>
      </div>
    )
  }
}
