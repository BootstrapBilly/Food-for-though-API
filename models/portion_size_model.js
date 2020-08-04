//!Imports
const mongoose = require("mongoose");

//-File config
const Schema = mongoose.Schema;

const portionSize = new Schema({

    title: {

        type: String,
        required: true

    },

    text: {

        type: String,


    },

    multiplier: {

        type: String

    }



});

module.exports = mongoose.model("PortionSize", portionSize);