//Prisma Client
const { prisma } = require("../prisma");

//View Agencies
exports.view = async (req, res) => {
    const allAgencies = await prisma.agencia_bancaria.findMany();
    res.render("agency", { allAgencies: allAgencies });
};


