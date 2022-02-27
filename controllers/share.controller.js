const service = require("../services/share.service.js");

const getAllShare = (req, res) => {
  res.send(service.getAllShare());
};

const getShareById = (req, res) => {
  res.send(service.getShareById());
};

module.exports = {
  getAllShare,
  getShareById
};
