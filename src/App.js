import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TripPlanner from './components/trip-planner';

function App() {
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;