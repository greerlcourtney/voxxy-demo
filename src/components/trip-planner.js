import React from 'react';
import '../stylesheets/trip-planner.css'; // Ensure this path is correct

const TripPlanner = () => {
  return (
    <div className="trip-planner">
      <h1>Choose Your Adventure</h1>
      <div className="buttons-container">
        <button className="adventure-button">
          <img src="path/to/image1.jpg" alt="Adventure 1" />
          <span>Adventure 1</span>
        </button>
        <button className="adventure-button">
          <img src="path/to/image2.jpg" alt="Adventure 2" />
          <span>Adventure 2</span>
        </button>
        <button className="adventure-button">
          <img src="path/to/image3.jpg" alt="Adventure 3" />
          <span>Adventure 3</span>
        </button>
      </div>
    </div>
  );
};

export default TripPlanner;