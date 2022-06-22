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

//View Banks
exports.view = async (req,res) => {
    const allBanks = await prisma.banco.findMany();
    res.render("banks", {allBanks: allBanks});
}
