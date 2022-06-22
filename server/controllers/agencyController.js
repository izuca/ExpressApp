const Sequelize = require("sequelize");

require("dotenv").config();

 //Database Connection
 const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:"postgres",
    port: 5455
});

//View Banks
exports.view = (req,res) => {
    res.render("agency");

    sequelize.authenticate().then(() =>{
        console.log("Banco Conectado")
    }).catch((erro) =>{
        console.log(`Falha ao se conectar: ${erro}`);
    })
}