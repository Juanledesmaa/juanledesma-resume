import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {

  getGithubUrl(profilesArray) {
    let githubUrlElement = profilesArray.find(element => element.network === 'GitHub');
    return githubUrlElement.url;
  }

  getLinkedSocial(profilesArray) {
    let linkedSocialElement = profilesArray.find(element => element.network === 'LinkedIn');
    return linkedSocialElement.url;
  }

  render() {
    if (!this.props.data) return null;

    const linkedSocial = this.getLinkedSocial(this.props.data.profiles);
    const position = this.props.data.label;
    const github = this.getGithubUrl(this.props.data.profiles);
    const name = this.props.data.name;
    const headline = this.props.data.headline;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Education
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skills">
                Skills
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
              <h2 className="responsive-headline special-text">{position}</h2>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{headline}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={linkedSocial} className="button btn project-btn">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
