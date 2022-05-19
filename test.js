const sequelize = require("sequelize");
const Sequelize = new sequelize("easysell", "root", "123456", {
    host:"localhost",
    dialect:"postgres",
    port: 5455
});

const xablau = Sequelize.define("xablaus",{
    nome: {
        type: sequelize.STRING
    },
    idade: {
        type: sequelize.INTEGER
    }
});

xablau.create({nome:"adriel",idade:21});


/*Sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado!");
}).catch(function(error){
    console.log("Erro ao conectar-se ao banco de dados: " + error);
});*/