const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
// const sql = require('mssql');
require('dotenv').config();

//DB
async function connectToMongoDB() {
    try {
        // Connect to the MongoDB server
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB with mongoose');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

// Middle Ware 
app.use(cors());
app.use(bodyParser.json());

//Databse Config


app.get("/", (req, res) => {
    res.send("Server is Running")
})

app.post("/tweet", (req, res) => {
    const twt = req.body.twt
    console.log(twt);
    res.send({ success: "Send Successfully" })
})




app.listen(3001, (req, res) => {
    console.log(`Server is Running on http://localhost:3001`)
})