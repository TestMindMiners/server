const express = require("express");
const purchaseRoutes = require("./purchase.routes.js");
const saleRoutes = require("./sale.routes.js");
const shareRoutes = require("./share.routes.js");

const router = express.Router();

module.exports = router;

// purchase operations end points

purchaseRoutes.get.forEach((route) => {
  router.get(route.route, route.requestFunction);
});

purchaseRoutes.post.forEach((route) => {
  router.post(route.route, route.requestFunction);
});

// sale operations end points

saleRoutes.get.forEach((route) => {
  router.get(route.route, route.requestFunction);
});

saleRoutes.post.forEach((route) => {
  router.post(route.route, route.requestFunction);
});

// share operations end points

shareRoutes.get.forEach((route) => {
  router.get(route.route, route.requestFunction);
});
shareRoutes.post.forEach((route) => {
  router.post(route.route, route.requestFunction);
});
