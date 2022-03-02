const controller = require("../controllers/operation.controller.js");

module.exports = {
  get: [
    {
      route: "/operation",
      requestFunction: controller.getAllOperations,
    },
    {
      route: "/operation/share/:shareid",
      requestFunction: controller.getAllOperationsByShare,
    },
    {
      route: "/operation/type/:type",
      requestFunction: controller.getAllOperationsByType,
    },
    {
      route: "/operation/:id",
      requestFunction: controller.getOperationById,
    },
  ],
  post: [
    {
      route: "/operation",
      requestFunction: controller.postOperation,
    },
  ],
};
