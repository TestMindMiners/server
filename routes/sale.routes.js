const controller = require('../controllers/sale.controller.js');

module.exports = {
    get:[
        {
            route: "/operation/sale",
            requestFunction: controller.getAllSale
        },
        {
            route: "/operation/sale/:id",
            requestFunction: controller.getSaleById
        }
    ],
}
