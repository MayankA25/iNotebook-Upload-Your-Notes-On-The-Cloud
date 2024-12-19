// models are created with Capitalize names

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String, 
        required: true
    },
    email:{
        type: String, 
        required: true, // this specifies this "email" field is must
        unique: true    // this specifies the "email" is unique
    },
    password:{
        type: String, 
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now   // we dont want to call it know we want to call it later
    }
});

module.exports = mongoose.model("user", userSchema)