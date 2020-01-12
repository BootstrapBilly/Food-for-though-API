//!Imports
//Core node

//Custom
const authController = require("../controllers/authController");

//External
const express = require("express");
const { check } = require('express-validator');

//-File configuration

const router = express.Router();

router.post("/signup", check('email').isEmail(), authController.Signup);

module.exports = router;