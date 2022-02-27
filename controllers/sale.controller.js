const service = require("../services/sale.service.js");

const getAllSale = (req, res) => {
  res.send(service.getAllSale());
};

const getSaleById = (req, res) => {
  res.send(service.getSaleById());
};

module.exports = {
  getAllSale,
  getSaleById,
};
