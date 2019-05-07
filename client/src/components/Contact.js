import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <section className="contact__hero">
          <img src="./assets/images/contact.jpeg" alt="Hero" />
          <div className="contact__herotext">
            <h2>Contact Aveen</h2>
          </div>
        </section>

        <section className="contact__main">
          <div className="contact__cards">
            <div className="contact__card">
              <a href="https://www.linkedin.com/in/aveenpattni/" target="__blank"><img src="./assets/images/linkedin.png" alt="LinkedIn" /></a>
            </div>
            <div className="contact__card">
              <a href="https://github.com/aveenpattni" target="__blank"><img src="./assets/images/github.png" alt="GitHub" /></a>
            </div>
            <div className="contact__card">
              <a href="mailto: aveenpattni@gmail.com"><img src="./assets/images/email.png" alt="Email" /></a>
            </div>
            <div className="contact__card">
              <a href="https://drive.google.com/file/d/1N-BylEt-QbOB1REaKe7ja_XDecyeKZBv/view?usp=sharingf" target="__blank"><img src="./assets/images/resume.png" alt="Resume" /></a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
