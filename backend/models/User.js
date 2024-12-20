// import mongoose from 'mongoose'
const mongoose = require("mongoose").mongoose
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})


// mongoose.exports = mongoose.model(<model_name>, <schema-name>)
const User = mongoose.model("user", userSchema)
User.createIndexes()    // It enforces the uniqueness 
module.exports = User
