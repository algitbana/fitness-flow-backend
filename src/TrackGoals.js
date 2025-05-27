import React from 'react';
import GoalTracking from './GoalTracking'; // Import GoalTracking component
import ProgressDashboard from './ProgressDashboard'; // Import ProgressDashboard component

function TrackGoals() {
  return (
    <div>
      <h2>Track Your Fitness Goals</h2>
      <GoalTracking />  {/* Include GoalTracking */}
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Progress</h3>
      <ProgressDashboard />  {/* Include ProgressDashboard */}
    </div>
  );
}

export default TrackGoals;


