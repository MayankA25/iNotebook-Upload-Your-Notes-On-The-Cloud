import mongoose from 'mongoose';
const { Schema } = mongoose;

// Schema is like the blueprint 
// It maps to the collections of the mongoose

const notesSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description:{
        type: String, 
        required: true
        
    },

    tag: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("notes", notesSchema)