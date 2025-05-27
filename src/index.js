import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const express = require('express');
const app = express();

// Sample workouts data
const workouts = [
  { id: 1, name: 'Push-Ups', description: 'Do 3 sets of 15 reps' },
  { id: 2, name: 'Squats', description: 'Do 3 sets of 20 reps' },
  { id: 3, name: 'Plank', description: 'Hold for 60 seconds' }
];

// Define the /api/workouts route
app.get('/api/workouts', (req, res) => {
  res.json(workouts);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
