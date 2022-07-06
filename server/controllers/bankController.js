//Prisma Client
const { prisma } = require("../prisma");

//View Banks
exports.view = async (req,res) => {
    const allBanks = await prisma.banco.findMany();
    res.render("banks", {allBanks: allBanks});
}
