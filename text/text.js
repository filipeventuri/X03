const sequelize = require("sequelize");
const connection = require("../database/db.js");

const Texts = connection.define("texts", {
    text:{
        type: sequelize.STRING,
        allowNull: false
    }
});

Texts.sync({force:false});

module.exports = Texts;

