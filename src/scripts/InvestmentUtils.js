export class InvestmentUtils {
  constructor(startAmount, additionalContribution, returnRate, months) {
    this.startAmount = parseInt(startAmount);
    this.additionalContribution = parseInt(additionalContribution);
    this.returnRate = parseInt(returnRate);
    this.months = parseInt(months);

    [this.graphData, this._tableData] = this.#calculateInterest();
  }

  getTableData() {
    const chunks = [];
    for (let i = 0; i < this._tableData.length; i += 12) {
      chunks.push(this._tableData.slice(i, i + 12));
    }
    return chunks;
  }

  getInvestmentData() {
    const data = [];
    for (let i = 1; i <= this.months; i++) {
      data.push({
        x: i,
        y: this.startAmount + i * this.additionalContribution,
      });
    }
    return data;
  }

  #calculateInterest() {
    const graphData = [];
    const tableData = [];

    let startAmount = this.startAmount;
    let totalAmount = this.startAmount;
    for (let i = 1; i <= this.months; i++) {
      totalAmount =
        totalAmount * (1 + this.returnRate / 100 / 12) +
        this.additionalContribution;
      tableData.push({
        month: i,
        startValue: startAmount,
        interest: startAmount * (this.returnRate / 100 / 12),
        finalValue: totalAmount,
      });
      graphData.push({ x: i, y: totalAmount });
      startAmount = totalAmount;
    }
    return [graphData, tableData];
  }

  getStartAmount() {
    return `${this.startAmount.toLocaleString("cs-CZ")} Kč`;
  }

  getFinalValue() {
    return `${Math.ceil(
      this.graphData[this.graphData.length - 1].y
    ).toLocaleString("cs-CZ")} Kč`;
  }

  getFinalInterest() {
    return `${Math.ceil(
      this._tableData.map(({ interest }) => interest).reduce((a, b) => a + b)
    ).toLocaleString("cs-CZ")} Kč`;
  }
}
