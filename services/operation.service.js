const dbOperations = require("../db/models/operations.model.js");
const share = require("../db/models/share.model.js");
const Operation = require("../entities/Operation.js.js");

const getAllOperations = async () => {
  let result;
  try {
    result = await dbOperations.findAll({
      include: share,
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const getAllOperationsByShare = async (shareid) => {
  try {
    result = await dbOperations.findAll({
      where: {
        SHAREId: shareid,
        operationType: "sale",
      },
      raw: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};

const getAllOperationsByType = async (type) => {
  let result;
  try {
    result = await dbOperations.findAll({
      where: {
        operationType: type,
      },
      include: share,
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
    result = await dbOperations.findOne({
      where: {
        id: id,
      },
      include: share,
      raw: true,
    });
  } catch (error) {
    result = error;
  }
  return result;
};

const getLastOperation = async (operationBody) => {
  const lastOperations = await dbOperations
    .findOne({
      where: {
        SHAREId: operationBody.SHAREId,
      },
      raw: true,
      order: [["createdAt", "DESC"]],
    })
    .catch((error) => {
      return error;
    })
    .then((result) => {
      return result;
    });

  return lastOperations;
};

const postOperation = async (operationBody) => {
  const result = getLastOperation(operationBody)
    .catch((error) => {
      return error;
    })
    .then(async (lastOperation) => {
      const newOperation = new Operation(
        operationBody.operationDate,
        operationBody.operationType,
        operationBody.SHAREId,
        operationBody.operationPrice,
        operationBody.operationQuantity,
        operationBody.brockerageFee
      );
      if (operationBody.operationType == "purchase") {
        newOperation.calculateMiddlePrice(lastOperation);
      } else if (operationBody.operationType == "sale") {
        newOperation.calculateResultEarned(lastOperation);
      }
      const response = await dbOperations
        .create(newOperation)
        .catch((error) => {
          return error;
        })
        .then((value) => {
          return value;
        });
      return response;
    });
  return result;
};

module.exports = {
  getAllOperations,
  getAllOperationsByShare,
  getAllOperationsByType,
  getOperationById,
  postOperation,
};
