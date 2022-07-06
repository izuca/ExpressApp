const express = require("express");
const router = express.Router();
const createAgencyController = require("../controllers/createAgencyController");

router.get("/",createAgencyController.view);

module.exports = router;

