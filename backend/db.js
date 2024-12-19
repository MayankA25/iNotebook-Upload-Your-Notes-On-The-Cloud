const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/"

let connectToMongo = async ()=>{
    await mongoose.connect(URI)
    console.log("Connected To Mongoose Successfully")
}

module.exports = connectToMongo