const controller = require('../controllers/share.controller.js');

module.exports = {
    get:[
        {
            route: "/operation/share",
            requestFunction: controller.getAllShare
        },
        {
            route: "/operation/share/:id",
            requestFunction: controller.getShareById
        }
    ],
}
