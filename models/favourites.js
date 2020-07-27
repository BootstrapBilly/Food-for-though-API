//!Imports
const mongoose = require("mongoose");

//-File config
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({

    title: {

        type: String,
        required: true
        
    },

    thumbnail: {

        type: String,
        required: true

    },

    rating: {

        type: String,
        required: true

    },

    kcals: {

        type: String,
        required: true

    },

    source: {

        type: String,
        required: true

    },

    pros: [],

    cons: []

});

module.exports = mongoose.model("Favourites", favouriteSchema);