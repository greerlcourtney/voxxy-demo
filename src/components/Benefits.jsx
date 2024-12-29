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
        <h1> Voxxy is your ultimate companion for planning adventures.</h1>
        <p>
          Whether you're exploring cities,relaxing on beaches, or hiking mountains, Voxxy simplifies the decision-making process and makes travel effortless.
        </p>
      </div>

      {/* Second Column: Dynamic Dropdowns */}
      <div className="benefits-dropdown">
        <div className="dropdown-item">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(1)}
          >
            <h3>Group-Friendly Collaboration</h3>
            <span>{activeIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="dropdown-content">
              <p>
              Voxxy helps your group make decisions without the chaos. Whether you’re taking the quiz solo or sending surveys to friends, Voxxy ensures everyone has a voice – without the noise.
              </p>
              <ul title='Key Highlights'>
                <li>Collaborative decision-making made easy.</li>
                <li>Group polls and real-time voting.</li>
                <li>Seamless sharing and updates with everyone.</li>
              </ul>
              <button>Start Planning a </button>
            </div>
          )}
        </div>

        <div className="dropdown-item">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(2)}
          >
            <h3>Smart AI Planning</h3>
            <span>{activeIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="dropdown-content">
              <p>
                Easily organize your trip itinerary, book accommodations, and plan activities—all in one place.
              </p>
            </div>
          )}
        </div>

        <div className="dropdown-item">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(3)}
          >
            <h3>Personalized Recommendations</h3>
            <span>{activeIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="dropdown-content">
              <p>
                Enjoy a smooth and intuitive app experience designed for ease of use on every device.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
