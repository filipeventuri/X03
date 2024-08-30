const sequelize = require("sequelize");
const connection = new sequelize("texts", "root", "", {
    host:"localhost",
    dialect:"mysql"
});

module.exports = connection;