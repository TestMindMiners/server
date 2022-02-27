const database = require("./connection");
const operations = require("./models/operations.model.js");
const share = require("./models/share.model.js");

const verifyDB = () =>
  (async () => {
    operations.belongsTo(share);
    try {
      return await database.sync();
    } catch (error) {
      return error;
    }
  })();

module.exports = verifyDB;
