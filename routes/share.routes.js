const controller = require("../controllers/share.controller.js");

module.exports = {
  get: [
    {
      route: "/share",
      requestFunction: controller.getAllShare,
    },
    {
      route: "/share/:id",
      requestFunction: controller.getShareById,
    },
  ],
  post: [
    {
      route: "/share",
      requestFunction: controller.postShare,
    },
  ],
  put: [],
  delete: [],
};
