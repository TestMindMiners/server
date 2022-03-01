const dbOperations = require("../db/models/operations.model.js");
const Operation = require("../entitys/Operation.js");

const getAllOperations = async () => {
  let result;
  try {
    result = await dbOperations.findAll({
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const getAllOperationsByType = async (type) => {
  let result;
  try {
    result = await dbOperations.findAll({
      where: {
        operationType: type,
      },
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const getOperationById = async (id) => {
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
      where: {
        SHAREId: operationBody.SHAREId,
      },
      raw: true,
      order: [["createdAt", "DESC"]],
    });
  } catch (error) {
    result = error;
  }

  return result;
};

const postOperation = async (operationBody) => {
  const lastOperation = getLastOperation()
    .catch((error) => {
      return error;
    })
    .then((result) => {
      return result;
    });
  const newOperation = new Operation(
    new Date(),
    operationBody.operationType,
    operationBody.SHAREId
  );
  if (operationBody.operationType === "purchase") {
    newOperation.calculateMiddlePrice(
      operationBody.purchasePrice,
      operationBody.purchaseQuantity,
      operationBody.brockerageFee,
      lastOperation
    );
  } else if (operationBody.operationType === "sale") {
    newOperation.calculateResultEarned(
      operationBody.salePrice,
      operationBody.saleQuantity,
      operationBody.brockerageFee,
      lastOperation
    );
  } else {
    return { message: "error" };
  }
  try {
    response = await dbOperations.create(newOperation);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllOperations,
  getAllOperationsByType,
  getOperationById,
  postOperation,
};
