const service = require("../services/purchase.service.js");

const getAllPurchase = (req, res) => {
  res.send(service.getAllPurchase());
};

const getPurchaseById = (req, res) => {
  res.send(service.getPurchaseById());
};

module.exports = {
    getAllPurchase,
    getPurchaseById
};
