const sequelize = require("sequelize");
const database = require("../connection.js");

const operations = database.define("OPERATIONs", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  operationDate: {
    type: sequelize.DATE,
    allowNull: false,
  },
  operationType: {
    type: sequelize.STRING,
    allowNull: false,
  },
  resultEarned: {
    type: sequelize.FLOAT,
  },
  operationPrice:{
    type: sequelize.FLOAT,
  },
  operationQuantity:{
    type: sequelize.FLOAT,
  },
  middlePrice: {
    type: sequelize.FLOAT,
  },
  middleQuantity: {
    type: sequelize.FLOAT,
  },
  irValue: {
    type: sequelize.FLOAT,
    allowNull: true,
  },
  accumulatedLoss: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
  brockerageFee: {
    type:sequelize.FLOAT,
    allowNull:false
  }
});

module.exports = operations;
