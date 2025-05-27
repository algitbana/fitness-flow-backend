import React from 'react';
import './Workouts.css';  // Import Workouts CSS

function Workouts() {
  return (
    <div className="workouts-page">
      <h2>Our Workouts</h2>
      <div className="workout-list">
        <div className="workout-item">
          <h3>Full Body Workout</h3>
          <p>Great for strength and endurance.</p>
        </div>
        <div className="workout-item">
          <h3>Cardio Blast</h3>
          <p>High-intensity cardio to burn fat.</p>
        </div>
        <div className="workout-item">
          <h3>Yoga Flow</h3>
          <p>Perfect for flexibility and recovery.</p>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
