const sequelize = require("sequelize");
const connection = new sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

module.exports = connection;
