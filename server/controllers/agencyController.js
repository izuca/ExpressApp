const { PrismaClient } = require('@prisma/client')

//Prisma Client
const prisma = new PrismaClient()

//View Agencies
exports.view = async (req, res) => {
    const allAgencies = await prisma.agencia_bancaria.findMany();
    res.render("agency", { allAgencies: allAgencies });
}
