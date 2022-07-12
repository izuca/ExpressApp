const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.get("/",registerController.view);

module.exports = router;