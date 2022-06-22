const Sequelize = require("sequelize");

require("dotenv").config();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const allBanks = await prisma.banco.findMany();
  console.log(allBanks)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

//View Agencies
exports.view = (req,res) => {
    res.render("agency");
}