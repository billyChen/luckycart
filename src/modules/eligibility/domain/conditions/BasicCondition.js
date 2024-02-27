const { ICondition } = require("./ICondition");

class BasicCondition extends ICondition {
  constructor(key, expectedValue) {
    super();
    this.key = key;
    this.expectedValue = expectedValue;
  }

  evaluate(cartEligibility) {
    const value = this.getValueByPath(cartEligibility, this.key);
    if (Array.isArray(value)) {
      return value.some((val) => val == this.expectedValue);
    }
    return value == this.expectedValue;
  }
}

module.exports = BasicCondition;
