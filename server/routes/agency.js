const express = require("express");
const router = express.Router();
const agencyController = require("../controllers/agencyController");

router.get("/", agencyController.view);


module.exports = router;