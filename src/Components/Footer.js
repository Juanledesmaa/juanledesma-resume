import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {

  getProfileIcon(name) {
    console.log(name);
    return "fa fa-" + name.toLowerCase();
  }

  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.profiles.map((profile) => {
      return (
        <li key={profile.network}>
          <a href={profile.url}>
            <i className={this.getProfileIcon(profile.network)}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Juan Ledesma</li>
                <li>
                  Design by Juan Ledesma
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
