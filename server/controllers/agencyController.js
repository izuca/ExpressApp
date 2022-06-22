const Sequelize = require("sequelize");

require("dotenv").config();

 

//View Agencies
exports.view = (req,res) => {
    res.render("agency");
}