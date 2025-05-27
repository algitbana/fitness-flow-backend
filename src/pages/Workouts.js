import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutCard from '../components/WorkoutCard';


const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://https://fitness-flow-backend.onrender.com/api/workouts') // change to your actual backend URL
      .then(response => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching workouts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading workouts...</p>;

  return (
    <div>
      <h2>Available Workouts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {workouts.map(workout => (
          <WorkoutCard key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Workouts;

