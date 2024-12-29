import React from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/AboutUs.css'; 

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>About Us</h1>
        <p>Welcome to Voxxy! We help you and your crew decide where to go, where to stay, and what to do – without the chaos.</p>
      </div>
    </>
  );
};

export default AboutUs;