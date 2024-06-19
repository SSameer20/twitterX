const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('./model/userModel'); 

const app = express();
app.use(cors());
app.use(express.json()); 

const url = process.env.MONGO_URL;
const dbName = process.env.DB;

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

  


  // post routes

  app.post('/user/register', async (req, res) => {
    const { user, remail, rpassword } = req.body;
    // console.log(user + " " + remail + " "+ rpassword)
    
    try {
        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ user }, { email: remail }] });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Username or email already exists' });
        }
        
        // Create a new user instance
        const newUser = new User({ user, email: remail, password : rpassword });

        // Save the user to the database
        await newUser.save();

        // Respond with the created user object (excluding the password)
        res.status(201).json({ success: true, user: newUser });
    } catch (error) {
        // Handle errors
        res.status(400).json({ success: false, error: error.message });
    }
  });

  // get routes

  app.get("/", (req,res) => {
    res.send("Server Started")
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });