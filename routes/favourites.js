//Custom
const favourites_controller = require("../controllers/favouritesController");

//External
const express = require("express");

//-File configuration

const router = express.Router();

router.post("/add_favourite", favourites_controller.add_favourite);

module.exports = router;