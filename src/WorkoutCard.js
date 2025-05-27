import React from 'react';
import WorkoutCard from './WorkoutCard';
import './Workouts.css'; // Ensure this is imported for styling

function Workouts() {
  const workouts = [
    {
      title: 'Full Body Blast',
      duration: '30 mins',
      difficulty: 'Intermediate',
      instructions: 'A balanced workout targeting all major muscle groups.'
    },
    {
      title: 'Cardio Burn',
      duration: '20 mins',
      difficulty: 'Beginner',
      instructions: 'Keep your heart rate up with this fun cardio circuit.'
    },
    {
      title: 'Strength Training',
      duration: '45 mins',
      difficulty: 'Advanced',
      instructions: 'Focus on muscle building with weights and resistance.'
    },
  ];

  return (
    <div className="workouts-page">
      <h2>🏋️‍♀️ Explore Workouts</h2>
      <div className="workout-list">
        {workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            title={workout.title}
            duration={workout.duration}
            difficulty={workout.difficulty}
            instructions={workout.instructions}
          />
        ))}
      </div>
    </div>
  );
}

export default Workouts;
