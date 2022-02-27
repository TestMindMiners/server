const service = require("../services/share.service.js");

const getAllShare = (req, res) => {
  service
    .getAllShare()
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const getShareById = (req, res) => {
  service
    .getShareById(req.params.id)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

const postShare = (req, res) => {
  service
    .postShare(req.body)
    .catch((error) => res.send(error))
    .then((result) => res.send(result));
};

module.exports = {
  getAllShare,
  getShareById,
  postShare,
};
