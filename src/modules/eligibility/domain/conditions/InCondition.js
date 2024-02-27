const { ICondition } = require("./ICondition");

class InCondition extends ICondition {
  constructor(key, expectedValues) {
    super();
    this.key = key;
    this.expectedValues = expectedValues;
  }

  evaluate(cartEligibility) {
    const value = this.getValueByPath(cartEligibility, this.key);
    return this.expectedValues.includes(value);
  }
}

module.exports = InCondition;
