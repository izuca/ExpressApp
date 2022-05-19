const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("tudo bem");
})

app.listen(8081,function(){
    console.log("Servidor rodando na porta 8081");
});