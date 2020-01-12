//!Imports
const mongoose = require("mongoose");

//-File config
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {

        type: String,
        required: true
        
    },

    password: {

        type: String,
        required: true

    }

});

module.exports = mongoose.model("User", userSchema);