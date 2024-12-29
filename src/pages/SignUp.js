// src/pages/SignUp.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Auth.css';

function SignUp() {
  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="button" className="auth-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default SignUp;
