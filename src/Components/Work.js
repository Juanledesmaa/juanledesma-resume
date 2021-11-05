import React, { Component } from "react";
import Slide from "react-reveal";

class Work extends Component {

    getFormattedEndDate(rawEndDate) {
        if (rawEndDate === "") {
            return "Present"
        } else {
            return rawEndDate
        }
    }

    render() {
    if (!this.props.data) return null;

    const work = this.props.data.map((work) => {
        return (
        <div key={work.company} className="work-info">
            <h3>{work.company}</h3>
            <p className="info">
            {work.position}
            <span>&bull;</span> <em className="date">{work.startDate} &#8594; {this.getFormattedEndDate(work.endDate)}</em>
            </p>
            <h4>Highlights</h4>
            {
                work.highlights.map((highlight) => {
                    return (
                        <p className="work-highlight-item"><span>&bull;&nbsp;</span>{highlight}</p>
                    );
                })   
            }
        </div>
        );
    });

    return (
        <section id="work" className="first-resume">
        <Slide left duration={1300}>
            <div className="row work">
            <div className="three columns header-col">
                <h1>
                <span>Work</span>
                </h1>
            </div>
            <div className="nine columns main-col">{work}</div>
            </div>
        </Slide>
        </section>
    );
    }
}

export default Work;
