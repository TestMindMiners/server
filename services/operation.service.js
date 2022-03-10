const dbOperations = require("../db/models/operations.model.js");
const share = require("../db/models/share.model.js");
const Operation = require("../entities/Operation.js");

const getAllOperations = async (year) => {
  let result;
  try {
    result = await dbOperations.findAll({
      include: share,
      raw: true,
      order: [["operationDate"]],
    });
    return(selectByDate(result,year));
  } catch (error) {
    return error;
  }
};

const selectByDate = (operations,year)=>{
  const operationsList = [];
  operations.forEach(operation=>{
    if((new Date(operation.operationDate)).getFullYear()===parseInt(year)){
      operationsList.push(operation);
    }
  });
  return operationsList;
}

const getAllOperationsByShare = async (shareid,year) => {
  try {
    result = await dbOperations.findAll({
      where: {
        SHAREId: shareid,
        operationType: "sale",
      },
      order: [["operationDate", "DESC"]],
      raw: true,
    });
    return selectByDate(result,year);
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
      order: [["operationDate", "DESC"]],
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
      order: [["operationDate", "DESC"]],
    })
    .catch((error) => {
      return error;
    })
    .then((result) => {
      return result;
    });

  return lastOperations;
};

const getYear = (dateData)=>{
  dateList = [];
  dateData.forEach(date => {
    let year =(new Date(date.operationDate)).getFullYear();
    let objectYear = {name:year,value:year};
    if(!(JSON.stringify(dateList).includes(JSON.stringify(objectYear)))){
      dateList.push(objectYear);
    }
  });
  return dateList;
}
const getAllYears = async () => {
  let result;
  try {
    result = await dbOperations.findAll({
      attributes: ["operationDate"] 
    });
  }catch(error){
    result = error;
  }
  return getYear(result);
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
  getAllYears,
  postOperation,
};
