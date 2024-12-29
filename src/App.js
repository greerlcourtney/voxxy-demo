import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TripPlanner from './components/trip-planner';

function App() {
  return (
    <Router>
        <header>
        <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
        </Routes>
    </Router>
  );
}

export default App;