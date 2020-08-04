//Custom
const portion_size_controller = require("../controllers/portionSizeController");

//External
const express = require("express");

//-File configuration

const router = express.Router();

router.post("/set_portion_size", portion_size_controller.set_portion_size);
router.post("/get_portion_size", portion_size_controller.get_portion_size);

module.exports = router;