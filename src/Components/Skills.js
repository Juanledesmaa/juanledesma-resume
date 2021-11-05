import React, { Component } from "react";
import Slide from "react-reveal";

class Skills extends Component {
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
    const skills = this.props.data.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const skillRating = ((skills.rating + 4) * 10).toString() + "%";
      const width =  skillRating;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name} - {skills.yearsOfExperience} years</em>
        </li>
      );
    });

    return (
      <section id="skills" className="first-resume">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Skills;
