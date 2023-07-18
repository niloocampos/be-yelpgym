import express from 'express';
import mongoose from 'mongoose';
import Gym from './models/Gym.js';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

mongoose.connect('mongodb://127.0.0.1:27017/yelpgym');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error"));
db.once("open", () => {
    console.log("Mongo database connected");
});

// Define MiddleWare
app.use(cors(corsOptions)); 

// Define Routes
app.get("/gyms", async (req, res) => {
    const gyms = await Gym.find({});
    res.send({ gyms });
})

app.get('/', (req, res) => {
    res.send("express app is answering");
})

app.listen(3001, () => {
    console.log('Backend Yelpgym is serving on port 3001');
})