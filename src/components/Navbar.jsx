import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;