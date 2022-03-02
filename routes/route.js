const express = require("express");
const shareRoutes = require("./share.routes.js");
const operationRoutes = require("./operation.routes.js");

const router = express.Router();

module.exports = router;

// operations end points

operationRoutes.get.forEach((route) => {
  router.get(route.route, route.requestFunction);
});

operationRoutes.post.forEach((route) => {
  router.post(route.route, route.requestFunction);
});

// share operations end points

shareRoutes.get.forEach((route) => {
  router.get(route.route, route.requestFunction);
});
shareRoutes.post.forEach((route) => {
  router.post(route.route, route.requestFunction);
});
