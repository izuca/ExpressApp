//Prisma Client
const { prisma } = require("../prisma");

//Create Banks
exports.view = async (req,res) => {
    /*const addBank = await prisma.banco.create({
        id:,
        nome:,
        numero:
    });*/
    res.render("addBank");
};
