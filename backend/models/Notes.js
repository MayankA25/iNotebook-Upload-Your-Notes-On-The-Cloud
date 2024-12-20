const mongoose = require("mongoose").mongoose
const { Schema } = mongoose

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    tag:{
        type: String
    },

    date:{
        type: Date,
        default: Date.now
    }

})