//Prisma Client
const { prisma } = require("../prisma");

//Create Agencies
exports.view = async (req,res) => {
    /*const addAgency = await prisma.agencia_bancaria.create({
        id:,
        id_banco:,
        endereco:,
        fone:,
        tipo:,
        fone1:,
        tipo1:,
        agencia:,
        nome_agencia:
    });*/
    res.render("addAgency");
}
