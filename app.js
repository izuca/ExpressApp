const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const bankRouter = require("./server/routes/bank");
const agencyRouter = require("./server/routes/agency");

//Config
    //Template Engine
    app.engine("hbs", exphbs.engine( {extname: ".hbs"}));
    app.set("view engine", "hbs");

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
});

app.use("/banks",bankRouter);
app.use("/agency",agencyRouter);


app.listen(8081,() => console.log("Servidor rodando no site http://localhost:8081"));