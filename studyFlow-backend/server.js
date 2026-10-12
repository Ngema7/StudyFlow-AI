require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173", }));

app.use(express.json());


//health check API
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"StudyFlow Backend is running",
    })
})

//API test route 
app.get("/api/health",(req,res)=>{
    res.json({
        success:true,
        message:"healthy",
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});