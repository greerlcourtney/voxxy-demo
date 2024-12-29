import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            {/* <div className="nav-logo">
                <Link to="/">Voxxy</Link>
            </div> */}
            <Link to="/">Home</Link>
            <Link to="/trip-planner">Trip Planner</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/login">Log In</Link>
            <Link to="/sign-up">Sign Up</Link>
        </nav>
    );
};

export default Navbar;

