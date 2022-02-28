const dbOperations = require("../db/models/operations.model.js");
const Operation = require("../entitys/Operation.js");

const getAllPurchase = async () => {
  let result;
  try {
    result = await dbOperations.findAll({
      where: {
        operationType: "purchase",
      },
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const getPurchaseById = async (id) => {
  let result;
  try {
    result = await dbOperations.findByPk(id);
  } catch (error) {
    result = error;
  }
  return result;
};

const getLastOperation = async () => {
  let result;
  try {
    result = await dbOperations.findAll({
      raw: true,
      order: [ [ 'createdAt', 'DESC' ]]
    });
  } catch (error) {
    result = error;
  }

  return result;
};

const postPurchase = async (operationBody) => {
  const lastOperation = getLastOperation()
    .catch((error) => {
      return error;
    })
    .then((result) => {
      return result;
    });
  const newPurchase = new Operation(
    new Date(),
    operationBody.operationType,
    operationBody.SHAREId
  );
  newPurchase.calculateMiddlePrice(
    operationBody.purchasePrice,
    operationBody.purchaseQuantity,
    operationBody.brockerageFee,
    lastOperation
  );
  try {
    const result = await dbOperations.create(newPurchase);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPurchase,
  getPurchaseById,
  postPurchase,
};
