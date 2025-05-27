import React, { useState } from 'react';

function UserProfileForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userProfile = { name, age, goal, fitnessLevel };
    console.log(userProfile); // This is where you can handle the form data
  };

  return (
    <div>
      {/* Updated heading */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>User Profile</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">Select Goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="maintain">Maintain Weight</option>
        </select>
        <select
          value={fitnessLevel}
          onChange={(e) => setFitnessLevel(e.target.value)}
        >
          <option value="">Select Fitness Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default UserProfileForm;
