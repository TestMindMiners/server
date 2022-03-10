const controller = require("../controllers/operation.controller.js");

module.exports = {
  get: [
    {
      route: "/operation/all/:year",
      requestFunction: controller.getAllOperations,
    },
    {
      route: "/operation/share/:shareid/:year",
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
    {
      route: "/operation/dates/years",
      requestFunction: controller.getAllYears,
    }
  ],
  post: [
    {
      route: "/operation",
      requestFunction: controller.postOperation,
    },
  ],
};
