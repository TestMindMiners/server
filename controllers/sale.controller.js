const service = require("../services/sale.service.js");

const getAllSale = (req, res) => {
  service
    .getAllSale()
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getSaleById = (req, res) => {
  service
    .getSaleById(req.params.id)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const postSale = (req, res) => {
  service
    .postSale(req.body)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

module.exports = {
  getAllSale,
  getSaleById,
  postSale,
};
