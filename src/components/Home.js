import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css'; // Ensure this path is correct

function Home() {
  return (
    <>
      <div className="hero">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/trip-planner">Trip Planner</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/login">Log In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </nav>
        </header>
        <h1>Let Voxxy Plan Your Next Adventure</h1>
        <p>Smart, seamless, and stress-free trip planning designed just for you and your crew</p>
        <div>
          <button className="button">Sign up to get started</button>
          <button className="button">Log in to continue</button>
        </div>
      </div>
      <div className="section-key-features">
        <h2>Next Section</h2>
      </div>
    </>
  );
}

export default Home;