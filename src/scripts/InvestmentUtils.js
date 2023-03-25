export class InvestmentUtils {
  constructor(startAmount, additionalContribution, returnRate, months) {
    this.startAmount = startAmount;
    this.additionalContribution = additionalContribution;
    this.returnRate = returnRate;
    this.months = months;

    [this.resultInvestment, this.resultInterest] = this.#calculateInvestment();
  }

  #calculateInvestment() {
    const result = [];
    let interest = 0;

    let totalAmount = this.startAmount;
    for (let i = 1; i <= this.months; i++) {
      interest = interest + totalAmount * (this.returnRate / 100 / 12);
      totalAmount =
        totalAmount * (1 + this.returnRate / 100 / 12) +
        this.additionalContribution;
      result.push({ x: i, y: totalAmount });
    }
    return [result, interest];
  }

  getStartAmount() {
    return `${this.startAmount.toLocaleString("cs-CZ")} Kč`;
  }

  getFinalValue() {
    return `${Math.ceil(
      this.resultInvestment[this.resultInvestment.length - 1].y
    ).toLocaleString("cs-CZ")} Kč`;
  }

  getFinalInterest() {
    return `${Math.ceil(this.resultInterest).toLocaleString("cs-CZ")} Kč`;
  }
}
