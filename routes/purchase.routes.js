const controller = require('../controllers/purchase.controller.js');

module.exports = {
    get:[
        {
            route: "/operation/purchase",
            requestFunction: controller.getAllPurchase
        },
        {
            route: "/operation/purchase/:id",
            requestFunction: controller.getPurchaseById
        }
    ],
}
