const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bankController");

router.get("/", bankController.view);

module.exports = router;