const mongoose = require("mongoose")

// use 127.0.0.1 instead of locahost if error occurs

const URI = "mongodb://127.0.0.1:27017/"

let connectToMongo = async ()=>{
    await mongoose.connect(URI)
    console.log("Connected To Mongoose Successfully")
}

module.exports = connectToMongo