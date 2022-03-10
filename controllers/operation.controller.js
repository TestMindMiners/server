const service = require("../services/operation.service.js");

const getAllOperations = (req, res) => {
  service
    .getAllOperations(req.params.year)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getAllOperationsByShare = (req, res) => {
  service
    .getAllOperationsByShare(req.params.shareid,req.params.year)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getAllOperationsByType = (req, res) => {
  service
    .getAllOperationsByType(req.params.type)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getOperationById = (req, res) => {
  service
    .getOperationById(req.params.id)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getAllYears = (req, res) => {
  service
    .getAllYears()
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const postOperation = (req, res) => {
  service
    .postOperation(req.body)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

module.exports = {
  getAllOperations,
  getAllOperationsByShare,
  getAllOperationsByType,
  getOperationById,
  getAllYears,
  postOperation,
};
