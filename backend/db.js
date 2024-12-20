const express = require("express")
const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/"


let connectToMongo = async ()=>{
    await mongoose.connect(URI)
    console.log("Successfully Connected To Mongoose")
}

module.exports = connectToMongo