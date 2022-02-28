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

const getLastOperation = async () => {
  let result;
  try {
    result = await dbOperations.findOne({
      raw: true,
      order: [ [ 'createdAt', 'DESC' ]]
    });
  } catch (error) {
    result = error;
  }

  return result;
};

const postSale = async (operationBody) => {
  const lastOperation = getLastOperation()
    .catch((error) => {
      return error;
    })
    .then((result) => {
      return result;
    });
  const newSale = new Operation(
    new Date(),
    operationBody.operationType,
    operationBody.SHAREId
  );
  newSale.calculateResultEarned(
    operationBody.salePrice,
    operationBody.saleQuantity,
    operationBody.brockerageFee,
    lastOperation
  );
  try {
    response = await dbOperations.create(newSale);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSale,
  getSaleById,
  postSale,
};
