const { PrismaClient } = require('@prisma/client')

//Prisma Client
const prisma = new PrismaClient()

//View Banks
exports.view = async (req,res) => {
    const allBanks = await prisma.banco.findMany();
    res.render("banks", {allBanks: allBanks});
}
