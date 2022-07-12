//Prisma Client
const { prisma } = require("../prisma");

//View 
exports.view = async (req,res) => {
    res.render("register");
};
