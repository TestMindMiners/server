class Operation {
  constructor(
    id,
    operationDate,
    middlePrice,
    middleQuantity,
    resultEarned,
    idShare,
    irValue
  ) {
    this.id = id;
    this.operationDate = operationDate;
    this.middlePrice = middlePrice;
    this.middleQuantity = middleQuantity;
    this.resultEarned = resultEarned;
    this.idShare = idShare;
    this.irValue = irValue;
  }
  getId(){
    return this.id;
  }
  getOperationDate(){
      return this.operationDate;
  }
  getMiddlePrice(){
      return this.middlePrice;
  }
  getMiddleQuantity(){
      return this.middleQuantity;
  }
  getResultEarned(){
      return this.resultEarned;
  }
  getIdShare(){
      return this.idShare;
  }
  getIrValue(){
      return this.irValue;
  }
  registerSale() {}
  registerSale() {}
  registerPurchase() {}
  calculateIR() {}
  calculateMiddlePrice() {}
  calculateMiddleQuantity() {}
  calculateResultEarned() {}
  addtoAccumulatedLoss() {}
}
export default Operation;
