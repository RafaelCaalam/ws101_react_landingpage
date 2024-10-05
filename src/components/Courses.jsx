import React from 'react';
import './Courses.css'; 

const Courses = () => {
  return (
    <section id="courses">
      <div className="courses-container">
        <h2 id="services-title">Our Services</h2>
        <div className="cards-wrapper">
          <div className="card">
              <h3>Front End</h3>
              <p>HTML/CSS Coding: Creating the structure and style of websites. <br />
                  <br />
                  JavaScript Development: Adding interactive features and client-side functionality.
                  <br /> <br />
                  Responsive Design: Ensuring websites work well on various devices and screen sizes.</p>
          </div>
          <div className="card">
              <h3>Back End</h3>
              <p>Server-Side Scripting: Writing code to handle data processing, server logic, and database interactions.
                  <br /> <br />
                  API Integration: Connecting websites or apps to third-party services and data sources.
              </p>
          </div>
          <div className="card">
              <h3>Custom Website Development</h3>
              <p>Static Websites: Simple sites with fixed content that do not change frequently. <br />
                  <br />
                  Dynamic Websites: Sites with interactive elements that can change content based on user interactions or data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
