require('dotenv').config(); // Load environment variables from .env file 
const express = require('express');
const mongoose = require('mongoose');mongoose.set('strictQuery', true); 
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['trainer', 'client'], required: true },
  name: String
});
const User = mongoose.model('User', userSchema);

// Workout Schema
const workoutSchema = new mongoose.Schema({
  title: String,
  description: String,
  clientId: String,
  trainerId: String
});
const Workout = mongoose.model('Workout', workoutSchema);

// Message Schema
const messageSchema = new mongoose.Schema({
  content: String,
  clientId: String,
  trainerId: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, jwtSecret);  // Use jwtSecret instead of 'secret'
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Auth Routes
app.post('/api/auth/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, password, role });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });

  res.json({ user: { id: user._id, email: user.email, role: user.role, name: user.name }, token });
});  

// Client Routes
app.get('/api/clients', verifyToken, async (req, res) => {
  if (req.user.role !== 'trainer') return res.status(403).json({ message: 'Access denied' });
  const clients = await User.find({ role: 'client' });
  res.json(clients);
});

// Workout Routes
app.post('/api/auth/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, password, role });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });
  res.json({ user: { id: user._id, email: user.email, role: user.role, name: user.name }, token });
});

app.get('/api/workouts', verifyToken, async (req, res) => {
  if (req.user.role !== 'trainer') return res.status(403).json({ message: 'Access denied' });
  const workouts = await Workout.find({ trainerId: req.user.id });
  res.json(workouts);
});

app.get('/api/workouts/client', verifyToken, async (req, res) => {
  if (req.user.role !== 'client') return res.status(403).json({ message: 'Access denied' });
  const workouts = await Workout.find({ clientId: req.user.id });
  res.json(workouts);
});

// Message Routes
app.post('/api/messages', verifyToken, async (req, res) => {
  if (req.user.role !== 'trainer') return res.status(403).json({ message: 'Access denied' });
  const message = new Message({ ...req.body, trainerId: req.user.id });
  await message.save();
  res.json(message);
});

app.get('/api/messages/client', verifyToken, async (req, res) => {
  if (req.user.role !== 'client') return res.status(403).json({ message: 'Access denied' });
  const messages = await Message.find({ clientId: req.user.id });
  res.json(messages);
});

app.listen(process.env.PORT || 3000, () => console.log('Server running on port ' + (process.env.PORT || 3000))); 
