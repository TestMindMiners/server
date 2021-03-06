const dbShare = require("../db/models/share.model.js");
const Share = require("../entities/Share.js");

const getAllShare = async () => {
  let result;
  try {
    result = await dbShare.findAll({ raw: true });
  } catch (error) {
    result = error;
  }
  return result;
};

const getShareById = async (id) => {
  let result;
  try {
    result = await dbShare.findOne({
      where: {
        id: id,
      },
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const postShare = async (shareBody) => {
  try {
    const newShare = new Share(shareBody.name);
    const result = await dbShare.create(newShare);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllShare,
  getShareById,
  postShare,
};
