const { ICondition } = require("./ICondition");

class LteCondition extends ICondition {
  constructor(key, expectedValue) {
    super();
    this.key = key;
    this.expectedValue = expectedValue;
  }

  evaluate(cartEligibility) {
    const attributeValue = this.getValueByPath(cartEligibility, this.key);
    return attributeValue <= this.expectedValue;
  }
}

module.exports = LteCondition;
