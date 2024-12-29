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
        <div className="trip-card" onClick={() => handleTripSelect('Choose a Destination')}>
          <img src="/assets/choose-destination-icon.png" alt="Choose a Destination" />
          <h2>Choose a Destination</h2>
      </div>

      <div className="trip-card" onClick={() => handleTripSelect('Ski Trip')}>
        <img src="/assets/ski-trip-icon.png" alt="Choose a Destination" />
        <h2>Ski Trip</h2>
      </div>

      <div className="trip-card" onClick={() => handleTripSelect('Trip Around Ireland')}>
        <img src="/assets/trip-around-ireland-icon.png" alt="Choose a Destination" />
        <h2>Trip to Ireland</h2>
      </div>

      <div className="trip-card" onClick={() => handleTripSelect('Plan a Trip')}>
        <img src="/assets/plan-a-road-trip-icon.png" alt="Choose a Destination" />
        <h2>Plan a Road Trip</h2>
      </div>

      <div className="trip-card" onClick={() => handleTripSelect('Choose a Destination')}>
        <img src="/assets/spring-break-icon.png" alt="Choose a Destination" />
        <h2>Spring Break</h2>
      </div>

      <div className="trip-card" onClick={() => handleTripSelect('Recommend a Trip')}>
        <img src="/assets/request-a-trip-icon.png" alt="Choose a Destination" />
        <h2>Request a Trip</h2>
      </div>
    </div>
    </>
  );
}

export default TripPlanner;