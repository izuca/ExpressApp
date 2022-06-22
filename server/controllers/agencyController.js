const { PrismaClient } = require('@prisma/client')

//Prisma Client
const prisma = new PrismaClient()

//Querying Bancos
async function main() {
  
}

main()
.catch((e) => {
    throw e
})
.finally(async () => {
    await prisma.$disconnect()
})

//View Agencies
exports.view = async (req,res) => {
    const allAgencies = await prisma.agencia_bancaria.findMany();
    res.render("agency", {allAgencies: allAgencies});
}
