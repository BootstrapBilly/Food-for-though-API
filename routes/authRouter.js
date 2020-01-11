//!Imports
//Core node

//Custom
const authController = require("../controllers/authController");

//External
const express = require("express");

//-File configuration

const router = express.Router();

router.get("/signup", authController.Signup);

module.exports = router;