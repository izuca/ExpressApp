const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const bankRouter = require("./server/routes/bank");
const agencyRouter = require("./server/routes/agency");
const createAgencyRouter = require("./server/routes/createAgency");
const createBankRouter = require("./server/routes/createBank");
const loginRouter = require("./server/routes/createLogin")
const { prisma } = require("./server/prisma");

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
app.use("/createAgency",createAgencyRouter);
app.use("/createBank",createBankRouter);
app.use("/login",loginRouter);

// Conectando no banco de dados antes de iniciar o servidor.
prisma.$connect().then(
    () => app.listen(8081,() => console.log("Servidor rodando no site http://localhost:8081"))
);