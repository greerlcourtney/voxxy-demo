import React from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/TripPlanner.css'; // Ensure this path is correct

function TripPlanner() {
    // Handle button click
    const handleTripSelect = (tripName) => {
      console.log(`Selected Trip: ${tripName}`);
      alert(`Selected Trip: ${tripName}`);
    };

    return (
        <>
        <Navbar />
      <div className="hero">
        <h1>Your next escape awaits....</h1>
        <p>Voxxy helps you and your crew decide where to go, where to stay, and what to do – without the chaos.</p>
      </div>


    {/* Scrollable Trip Selection Area */}
      <div className="trip-selection">
        <div className="trip-card" onClick={() => handleTripSelect('Mountain Adventure')}>
          <img src="https://via.placeholder.com/300x200" alt="Mountain Adventure" />
          <h2>Choose a Destination</h2>
        </div>

        <div className="trip-card" onClick={() => handleTripSelect('Beach Escape')}>
          <img src="https://via.placeholder.com/300x200" alt="Beach Escape" />
          <h2>Ski Trip</h2>
        </div>

        <div className="trip-card" onClick={() => handleTripSelect('City Lights')}>
          <img src="https://via.placeholder.com/300x200" alt="City Lights" />
          <h2>Trip around Ireland</h2>
        </div>
        <div className="trip-card" onClick={() => handleTripSelect('Mountain Adventure')}>
          <img src="https://via.placeholder.com/300x200" alt="Mountain Adventure" />
          <h2>Plan a Road Trip</h2>
        </div>

        <div className="trip-card" onClick={() => handleTripSelect('Beach Escape')}>
          <img src="https://via.placeholder.com/300x200" alt="Beach Escape" />
          <h2>Spring Break!!</h2>
        </div>

        <div className="trip-card" onClick={() => handleTripSelect('City Lights')}>
          <img src="https://via.placeholder.com/300x200" alt="City Lights" />
          <h2>Request a Trip Type</h2>
        </div>
      </div>
    </>
    )
};

export default TripPlanner;