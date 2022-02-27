const sequelize = require("sequelize");
const database = require("../connection.js");

const share = database.define("SHARE", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  }
});

module.exports = share;
