class Operation {
  constructor(
    operationDate,
    operationType,
    SHAREId,
    operationPrice,
    operationQuantity,
    brockerageFee
  ) {
    this.operationDate = operationDate;
    this.operationType = operationType;
    this.operationPrice = operationPrice;
    this.operationQuantity = operationQuantity;
    this.middlePrice = 0.0;
    this.middleQuantity = 0.0;
    this.resultEarned = 0.0;
    this.accumulatedLoss = 0.0;
    this.brockerageFee = brockerageFee;
    this.irValue = 0.0;
    this.SHAREId = SHAREId;
  }

  calculateIR() {
    const minValue = Math.min(this.resultEarned, this.accumulatedLoss);
    const fullValue = this.resultEarned - minValue;
    this.irValue = fullValue * 0.15;
    this.accumulatedLoss += minValue;
  }

  calculateMiddlePrice(lastValues) {
    const initialMiddlePrice =
      lastValues === null ? 0.0 : parseFloat(lastValues.middlePrice);
    const initialMiddleQuantity =
      lastValues === null ? 0.0 : parseFloat(lastValues.middleQuantity);

    this.middlePrice =
      (initialMiddlePrice * initialMiddleQuantity +
        this.operationPrice * this.operationQuantity +
        this.brockerageFee) /
      (initialMiddleQuantity + this.operationQuantity);
    this.calculateMiddleQuantity(initialMiddleQuantity);
    this.addtoAccumulatedLoss(lastValues);
  }

  calculateMiddleQuantity(initialMiddleQuantity) {
    if (this.operationType === "purchase") {
      this.middleQuantity = initialMiddleQuantity + this.operationQuantity;
    } else {
      this.middleQuantity = initialMiddleQuantity - this.operationQuantity;
    }
  }

  calculateResultEarned(lastValues) {
    const initialMiddlePrice =
      lastValues === null ? 0.0 : parseFloat(lastValues.middlePrice);
    const initialMiddleQuantity =
      lastValues === null ? 0.0 : parseFloat(lastValues.middleQuantity);
    this.middlePrice = initialMiddlePrice;
    this.resultEarned =
      (this.operationPrice - initialMiddlePrice) * this.operationQuantity -
      this.brockerageFee;
    
    if (this.resultEarned > 0) {
      this.accumulatedLoss = lastValues.accumulatedLoss;
      this.calculateIR();
    }else{
      this.addtoAccumulatedLoss(lastValues);
    }
    this.calculateMiddleQuantity(initialMiddleQuantity);
  }

  addtoAccumulatedLoss(lastValues) {
    this.accumulatedLoss =
      lastValues === null ? 0.0 : parseFloat(lastValues.accumulatedLoss);
    this.accumulatedLoss -= this.resultEarned;
  }

  listStartPosition (operations,id){
    operations.forEach((operation,index) => {
      if(operation.id===id){
        return index;
      }
    });
  }
}
module.exports = Operation;
