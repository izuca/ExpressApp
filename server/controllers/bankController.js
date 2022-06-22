const Sequelize = require("sequelize");
const tabela = require("../../models/bancos");

require("dotenv").config();

 //Database Connection
 const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:"postgres",
    port: 5455
});

//Check Database
exports.view = (req,res) => {
    tabela.findAll().then((posts) => {
        res.render("banks",{id: 2, nome: "xablesco",numero: "002"});

    })

    sequelize.authenticate().then(() =>{
        console.log("Banco Conectado")
    }).catch((erro) =>{
        console.log(`Falha ao se conectar: ${erro}`);
    })

    
    
}