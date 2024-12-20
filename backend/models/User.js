const mongoose = require("mongoose").mongoose // here i am doing like this because when i use "import mongoose from 'mongoose' and then when i use it in other module it show cannot use import outside module"
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

    email: {
        type: String,
        required: true,
        unique: true
    },

    timeStamp:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("user", userSchema)