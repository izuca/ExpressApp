const express = require("express");
const app = express();
const Handlebars = require("express-handlebars");
const Sequelize = require("sequelize");
const hbs = Handlebars.create({defaultLayout:"main"});

//Config
    //Template Engine
    app.engine("Handlebars",() => hbs);
    app.set("view engine", "Handlebars");
    
    //Database Connection
    const sequelize = new Sequelize("easysell", "root", "123456", {
        host:"localhost",
        dialect:"postgres",
        port: 5455
    });

//Rotas

app.get("/", function(req,res){
    res.render(__dirname + "views/home.handlebars");
});
app.get("/cad", function(req,res){
    res.render("form");
});

app.listen(8081,function(){
    console.log("Servidor rodando no site http://localhost:8081");
});