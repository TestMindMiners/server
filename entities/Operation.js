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
    const parcialValue = (fullValue * 15) / 100;
    this.irValue = fullValue * parcialValue;
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
    if (this.resultEarned < 0) {
      this.addtoAccumulatedLoss(lastValues);
    } else {
      this.calculateIR();
    }
    this.calculateMiddleQuantity(initialMiddleQuantity);
  }
  addtoAccumulatedLoss(lastValues) {
    this.accumulatedLoss =
      lastValues === null ? 0.0 : parseFloat(lastValues.accumulatedLoss);
    this.accumulatedLoss -= this.resultEarned;
  }
}
module.exports = Operation;
