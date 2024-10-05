import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
            <h2>About Us</h2>
            <p id="para4">Welcome to our web development studio, where creativity meets technology. <br />
                We are a passionate team of web developers dedicated to crafting innovative and functional digital experiences. <br />
                Our mission is to design, build, and maintain high-quality websites and web applications that not only meet but exceed our clients' expectations.</p>
            
            <h2>Key Responsibilities</h2>
            <h4 id="keytitle">Designing and Developing Website</h4>
            <p id="keypara">Creating the layout, structure, and interactive elements of websites using languages like HTML, CSS, and JavaScript.</p>
            <h4 id="keytitle">Writing Code</h4>
            <p id="keypara">Implementing functionality and features through coding, including both front-end (user interface) and back-end (server-side) tasks.</p>
            <h4 id="keytitle">Troubleshooting and Debugging</h4>
            <p id="keypara">Identifying and fixing issues or bugs that affect website performance and functionality.</p>
            <h4 id="keytitle">Maintaining and Updating Sites</h4>
            <p id="keypara">Regularly updating website content, fixing issues, and ensuring compatibility with new technologies and standards.</p>
            <h4 id="keytitle">Collaborating with Teams</h4>
            <p id="keypara">Working with designers, content creators, and other stakeholders to ensure the website meets user needs and business goals.</p>
        </div>
      </div>
    </section>
  );
};

export default About;