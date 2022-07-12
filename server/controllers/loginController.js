//Prisma Client
const { prisma } = require("../prisma");

//Create login
exports.view = async (req,res) => {
    res.render("login");
};
