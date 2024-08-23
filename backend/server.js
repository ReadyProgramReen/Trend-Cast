const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/db')




// app config
dotenv.config({path: './config/config.env'})


const app = express();
const port = 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); 
app.use(cors()); 

// api creation

app.get('/', (req,res)=>{
    res.send('Express Running')
})

app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
})
