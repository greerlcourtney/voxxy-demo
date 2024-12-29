import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/trip-planner">Trip Planner</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/LogIn">Log In</Link>
                <Link to="/SignUp">Sign Up</Link>
            </nav>
        </header>
    );
};

export default Navbar;

