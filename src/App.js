import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';
import './App.css'; 
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;