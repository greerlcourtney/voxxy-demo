import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

function Navbar() {
    return (
        <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/trip-planner">Trip Planner</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/login">Log In</Link>
            <Link to="/sign-up">Sign Up</Link>
        </nav>
        </header>
    );
};

export default Navbar;

