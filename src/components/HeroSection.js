import React from 'react';
import Navbar from '../components/Navbar';
import Benefits from '../components/Benefits';
import '../stylesheets/Home.css'; 

function HeroSection() {
  return (
    <>
      <div className="home-hero">
        <div>
        <h1>Plan your next adventure</h1>
        <p>Voxxy helps you and your crew plan but without the chaos</p>
        </div>
       <div className="button-container">   
          <button className="button">Sign up to get started</button>
          <button className="button">Log in to continue</button>
       </div>
       <div>
          <p>
          Voxxy is your bold, fun, AI-powered planning assistant, designed to take your group plans from endless chats to real adventures.
          Whether it’s a weekend trip, a birthday dinner, or your next book club meeting, Voxxy listens, learns, and recommends tailored plans your entire group will love—quickly and seamlessly. 
          </p>
       </div>
       </div>
    </>
  );
}

export default HeroSection;