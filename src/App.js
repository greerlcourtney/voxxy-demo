import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './voxxy-icon.png'; // Ensure the image is in the same folder or provide the correct path

// Home Page Component
function Home() {
  return (
    <>
      <div className="hero">
      <header>
        <nav>
          {/* <Link to="/" className="logo">
            <img src={logo} alt="Voxxy Logo" />
          </Link> */}
          <Link to="/">Home</Link>
          <Link to="/trip-planner">Trip Planner</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/login">Log In</Link>
          <Link to="/logout">Log Out</Link>
        </nav>
      </header>
        <h1>Let Voxxy Plan Your Next Adventure</h1>
        <p>Smart, seamless, and stress-free trip planning designed just for you and your crew</p>
        <div>
          <button className="button-primary">Sign up to get started</button>
          <button className="button-secondary">Log in to continue</button>
        </div>
      </div>
      <div className="section-key-features">
        <h2>Next Section</h2>
      </div>
    </>
  );
}

export default Home;
