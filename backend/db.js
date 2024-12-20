const mongoose = require("mongoose")
const URI = "mongodb://localhost:27017/inotebook"

const connectToMongo = async ()=>{
    await mongoose.connect(URI)
    console.log("Successfully Connected To Mongo")

}

module.exports = connectToMongo