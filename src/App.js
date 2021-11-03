import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "https://gitconnected.com/v1/portfolio/juanledesmaa",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {

    return (
      <div className="App">
        <Header data={this.state.resumeData.basics} />
        <About data={this.state.resumeData.basics} />
        <Education data={this.state.resumeData.education} />
        <Work data={this.state.resumeData.work} />
        <Skills data={this.state.resumeData.skills} />
        <Testimonials data={this.state.resumeData.skills} />
        {/* <Contact data={this.state.resumeData.basics} /> */}
        <Footer data={this.state.resumeData.basics} />
        {/* <Portfolio data={this.state.resumeData.basics} /> */}
      </div>
    );
  }
}

export default App;
