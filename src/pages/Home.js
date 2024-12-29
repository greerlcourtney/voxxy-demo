import React from 'react';
import Navbar from '../components/Navbar';
import Benefits from '../components/Benefits';
import '../stylesheets/Home.css'; 

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-hero">
        <h1>Plan your next adventure</h1>
        <p>Voxxy helps you and your crew decide where to go, where to stay, and what to do – without the chaos.</p>
        <div>
          <button className="button">Sign up to get started</button>
          <button className="button">Log in to continue</button>
        </div>
      </div>
      <Benefits />
    </>
  );
}

export default Home;