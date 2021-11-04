import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {

  getResumeLink(profilesArray) {
    let linkedSocialElement = profilesArray.find(element => element.network === 'gitconnected');
    return linkedSocialElement.url + "/resume";
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = this.props.data.image;
    const bio = this.props.data.summary;
    const city = this.props.data.locationAsString;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.getResumeLink(this.props.data.profiles);

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns columns-profile-pic">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Juan Ledesma Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}
                      <br />
                    </span>
                    <span>{phone}</span>
                    <br />
                    <span>jlmanuel8540@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
