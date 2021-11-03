import React, { Component } from "react";
import Slide from "react-reveal";

class Education extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = "Here you can see some of my most valuable skills";
    const education = this.props.data.map(function (education) {
      return (
        <div key={education.institution}>
          <h3>{education.institution}</h3>
          <p className="info">
            {education.studyType} - {education.area} <span>&bull;</span>
            <em className="date">{education.endDate}</em>
          </p>
          <p>{education.activities}</p>
        </div>
      );
    });

    return (
      <section id="resume" className="first-resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Education;
