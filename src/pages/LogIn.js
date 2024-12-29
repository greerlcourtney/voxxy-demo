// src/pages/LogIn.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Auth.css';

function LogIn() {
  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="button" className="auth-button">Log In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default LogIn;
