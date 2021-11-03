import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const testimonialsList = [
      {
        user: "Jesus Nieves - Senior iOS Software Engineer at X-Team (for Riot Games)",
        text: "It was a pleasure working with Juan, I was surprised by his ability to solve problems, he is an excellent partner and he performs in an incredible way with the responsibilities assigned.",
      },
      {
        user: "Emanuel Acevedo - Computer Engineering",
        text: "Desarrollador de app con buenas practicas para codear, responsable y siempre aprendiendo cosas nuevas",
      },
    ];

    const testimonials = testimonialsList.map((testimonials) => {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
