import axios from 'axios';

// Replace with your actual backend URL
const API_BASE_URL = 'https://your-backend-url.onrender.com/api';

// Get all workouts
export const fetchWorkouts = () => axios.get(`${API_BASE_URL}/workouts`);

// Save completed workout
export const saveCompletedWorkout = (data) =>
  axios.post(`${API_BASE_URL}/workouts/completed`, data);

// Save user profile
export const saveUserProfile = (profileData) =>
  axios.post(`${API_BASE_URL}/user/profile`, profileData);

// Save or update goals
export const saveUserGoals = (goalData) =>
  axios.post(`${API_BASE_URL}/user/goals`, goalData);

// Get user goal progress
export const getGoalProgress = () =>
  axios.get(`${API_BASE_URL}/user/goals/progress`);
