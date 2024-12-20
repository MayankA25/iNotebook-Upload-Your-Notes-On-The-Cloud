const mongoose = require("mongoose")
const URI = "mongodb://localhost:27017/inotebook" // I can specidy database by /database_name and it will create databse if not present already

const connectToMongo = async ()=>{
    await mongoose.connect(URI)
    console.log("Successfully Connected To Mongo")

}

module.exports = connectToMongo