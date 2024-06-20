const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('./model/userModel');
const Post = require('./model/postModel'); 

const app = express();
app.use(cors());
app.use(express.json());

// DB
const url = process.env.MONGO_URL;


mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Routes

// Route to Register a new user
app.post('/user/register', async (req, res) => {
  const { user, remail, rpassword } = req.body;

  try {
    
    const existingUser = await User.findOne({ $or: [{ user }, { email: remail }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(rpassword, 10); 

    const newUser = await new User({ user, email: remail, password: hashedPassword });

    
    await newUser.save();

   
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
   
    console.error('Error in registration:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

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

//Post a tweet

app.post("/user/post", async (req,res) => {
  const {userId, content, media} = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const tweet = new Post({
      userId,
      content,
      media
    });

    await tweet.save();
    res.status(201).json(tweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10)
    .populate('userId', 'user');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
