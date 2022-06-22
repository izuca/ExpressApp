const db = require("./db");
const Sequelize = require("sequelize");

require("dotenv").config();

//Definindo tabela banco
const banco = db.sequelize.define("banco", {
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    numero: {
        type: db.Sequelize.TEXT
    }
});

const bancolistas = await banco.findAll();

console.log(bancolistas);
module.exports = banco;