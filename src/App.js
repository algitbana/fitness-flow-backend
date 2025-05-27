import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Import router components
import MusicPlayer from './MusicPlayer';
import Workouts from './Workouts'; // Import Workouts
import UserProfileForm from './UserProfileForm'; // Import UserProfileForm
import GoalTracking from './GoalTracking'; 
import ProgressDashboard from './ProgressDashboard';

// Import the Power Mode logo from assets
import PowerModeLogo from './assets/powermode-logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Display the logo */}
          <img src={PowerModeLogo} alt="Power Mode Logo" style={{ width: '200px', height: 'auto' }} />
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Power Mode</h2>
          <p style={{ fontSize: '1rem', fontWeight: '300' }}>by Alex</p>
          
          <p>Start tracking your workouts and progress today. 💪</p>
          
          {/* Navigation with links */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/workouts">See Workouts</Link></li>
              <li><Link to="/profile">Your Profile</Link></li>
              <li><Link to="/track-goals">Track Goals</Link></li>
            </ul>
          </nav>
          
          {/* Add your routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/profile" element={<UserProfileForm />} />
            <Route path="/track-goals" element={<GoalTracking />} />
          </Routes>

          {/* Music Player Section */}
          <MusicPlayer />
        </header>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to Power Mode!</h2>
    </div>
  );
}

export default App;
