// src/components/Benefits.js

import React, { useState } from 'react';
import '../stylesheets/Benefits.css';

function Benefits() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="benefits-container">
      {/* First Column: Static Text */}
      <div className="benefits-text">
        <h1> Finally Make It Out of the Group Chat</h1>
        <p>
        Group Planning Shouldn’t Feel Like a Full-Time Job
        </p>
      </div>

      {/* Second Column: Dynamic Dropdowns */}
      <div className="benefits-dropdown">
        <div className="dropdown-item">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(1)}
          >
            <h3>Plan Group Trips with Ease</h3>
            <span>{activeIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="dropdown-content">
              <p>
              Voxxy collects preferences and recommends itineraries everyone can agree on.</p>
            </div>
          )}
        </div>

        <div className="dropdown-item">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(2)}
          >
            <h3>Simplify Dinner Decisions</h3>
            <span>{activeIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="dropdown-content">
              <p>
              Say goodbye to “Where should we eat?” Voxxy finds the perfect spot based on group tastes.
              </p>
            </div>
          )}
        </div>

        <div className="dropdown-item">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(3)}
          >
            <h3>Save Time, Reduce Stress</h3>
            <span>{activeIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="dropdown-content">
              <p>
              Voxxy does the heavy lifting so you can focus on having fun.

              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
