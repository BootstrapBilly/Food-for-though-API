//Custom
const favourites_controller = require("../controllers/favouritesController");

//External
const express = require("express");

//-File configuration

const router = express.Router();

router.post("/toggle_favourite", favourites_controller.toggle_favourite);
router.get("/get_favourites", favourites_controller.get_favourites);

module.exports = router;