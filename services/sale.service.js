const dbOperations = require("../db/models/operations.model.js");
const Operation = require("../entitys/Operation.js");

const getAllSale = async () => {
  let result;
  try {
    result = await dbOperations.findAll({
      where: {
        operationType: "sale",
      },
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const getSaleById = async (id) => {
  let result;
  try {
    result = await dbOperations.findByPk(id);
  } catch (error) {
    result = error;
  }
  return result;
};

const postSale = async (operationBody) => {
  const newOperation = new Operation(
    new Date(),
    operationBody.operationType,
    operationBody.SHAREId
  );
  newOperation.calculateResultEarned(
    operationBody.salePrice,
    operationBody.saleQuantity,
    operationBody.brockerageFee
  );
  try {
    const result = await dbOperations.create(newOperation);
    return result;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getAllSale,
  getSaleById,
  postSale,
};
