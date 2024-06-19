const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('./model/userModel'); // Adjust the path as per your file structure

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const url = process.env.MONGO_URL;
const dbName = process.env.DB;

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Routes

// Register a new user
app.post('/user/register', async (req, res) => {
  const { user, remail, rpassword } = req.body;

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ user }, { email: remail }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(rpassword, 10); // 10 is the salt rounds

    // Create a new user instance
    const newUser = await new User({ user, email: remail, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with the created user object (excluding the password)
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    // Handle errors
    console.error('Error in registration:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// Login route 
// Login route 
app.post('/user/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ success: false, message: "User Doesn't Exist" });
      }

      const matchPassword = await bcrypt.compare(password, user.password);
      if (!matchPassword) {
          return res.status(401).json({ success: false, message: "Password Doesn't Match" });
      }

      res.status(200).json({ success: true, message: "Successfully Logged in", user });
      console.log("Successfully Logged in by " + email);
  } catch (error) {
      console.error('Login error:', error);
      res.status(400).json({ success: false, message: "Error in login", error: error.message });
  }
});


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
