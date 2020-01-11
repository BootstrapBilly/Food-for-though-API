//!Imports
//Core node

//Custom
const mainController = require("../controllers/mainController");

//External
const express = require("express");

//-File configuration

const router = express.Router();

router.get("/", mainController.getSlash);

module.exports = router;