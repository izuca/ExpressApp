const Sequelize = require("sequelize");

require("dotenv").config();

 //Database Connection
 const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:"postgres",
    port: 5455
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};