const service = require("../services/purchase.service.js");

const getAllPurchase = (req, res) => {
  service
    .getAllPurchase()
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getPurchaseById = (req, res) => {
  service
    .getPurchaseById(req.params.id)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const postPurchase = (req, res) => {
  service
    .postPurchase(req.body)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

module.exports = {
  getAllPurchase,
  getPurchaseById,
  postPurchase,
};
