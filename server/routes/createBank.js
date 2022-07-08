const express = require("express");
const router = express.Router();
const createBankController = require("../controllers/createBankController");

router.get("/",createBankController.view);

module.exports = router;

