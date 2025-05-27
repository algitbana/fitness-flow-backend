import React, { useState } from 'react';
import ProgressDashboard from './ProgressDashboard';

function GoalTracking() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = () => {
    if (goal.trim() !== '') {
      setGoals([...goals, goal]);
      setGoal('');
    }
  };

  return (
    <div className="goal-tracking" style={{ textAlign: 'center', marginTop: '30px' }}>
      {/* Updated heading for "Track Goals" */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Track Goals</h2>
      
      <input
        type="text"
        placeholder="Enter your goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '60%', borderRadius: '5px' }}
      />
      <button
        onClick={handleAddGoal}
        style={{
          marginLeft: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: '#2e8b57',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Add Goal
      </button>
      
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {goals.map((g, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            ✅ {g}
          </li>
        ))}
      </ul>

      {/* Include Progress Dashboard below the goals */}
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Progress</h3>
      <ProgressDashboard />
    </div>
  );
}

export default GoalTracking;
