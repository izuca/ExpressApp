const express = require("express"); //importa o express
const app = express(); // cria uma variável que chama a função express
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const bankRouter = require("./server/routes/bank");
const agencyRouter = require("./server/routes/agency");
const createAgencyRouter = require("./server/routes/createAgency");
const createBankRouter = require("./server/routes/createBank");
const loginRouter = require("./server/routes/createLogin")
const registerRouter = require("./server/routes/register");
const { prisma } = require("./server/prisma");
const port = process.env.PORT || 8080;

//Config
    //Definindo a Template Engine do Handlebars
    app.engine("hbs", exphbs.engine( {extname: ".hbs"}));
    app.set("view engine", "hbs");

    //Parsing Middleware
        //Parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }));

        //Parse application/json
        app.use(bodyParser.json());
    
    //Define os arquivos estáticos na pasta public
    app.use(express.static("public"));
//Rotas

app.get("/",(req,res) => {
    res.render("home");
}); // cria a rota / com o método get, renderizando a página home

// Cria demais rotas
app.use("/banks",bankRouter);
app.use("/agency",agencyRouter);
app.use("/createAgency",createAgencyRouter);
app.use("/createBank",createBankRouter);
app.use("/login",loginRouter);
app.use("/register",registerRouter);

// Conectando no banco de dados antes de iniciar o servidor.
prisma.$connect().then(
    () => app.listen(port,() => console.log("Servidor rodando no site http://localhost:8081"))
);