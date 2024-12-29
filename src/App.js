import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TripPlanner from './pages/TripPlanner';
import AboutUs from './pages/AboutUs';
import LogIn from './pages/LogIn';  
import SignUp from './pages/SignUp';



function App() {
  return (
    <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;