const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");


//Config
    //Template Engine
    app.engine("hbs", exphbs.engine( {extname: ".hbs"}));
    app.set("view engine", "hbs");
    
    //Database Connection
    const sequelize = new Sequelize("easysell", "root", "123456", {
        host:"localhost",
        dialect:"postgres",
        port: 5455
    });

    //Parsing Middleware
        //Parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }));

        //Parse application/json
        app.use(bodyParser.json());
    
    //Static Files
    app.use(express.static("public"));
//Rotas

app.get("",(req,res) => {
    res.render("home");
})

app.get("/banks",(req,res) => {
    res.render("banks");
})
app.get("/agency",(req,res) => {
    res.render("agency");
})

app.listen(8081,() => console.log("Servidor rodando no site http://localhost:8081"));