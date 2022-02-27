const express = require("express");
const purchaseRoutes = require('./purchase.routes.js');
const saleRoutes = require('./sale.routes.js');
const shareRoutes = require('./share.routes.js');

const router = express.Router();

module.exports = router;

// purchase operations 
// get end points

purchaseRoutes.get.forEach(
    (route) => {
        router.get(route.route, route.requestFunction);
      }
);

// sale operations
// get end points

saleRoutes.get.forEach(
    (route) => {
        router.get(route.route, route.requestFunction);
      }
);

// share operations
// get end points

shareRoutes.get.forEach(
    (route) => {
        router.get(route.route, route.requestFunction);
      }
);