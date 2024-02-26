const ICondition = require("./ICondition");

class LtCondition extends ICondition {
  constructor(key, expectedValue) {
    super();
    this.key = key;
    this.expectedValue = expectedValue;
  }

  evaluate(cartEligibility) {
    const attributeValue = cartEligibility[this.key];
    return attributeValue < this.expectedValue;
  }
}

module.exports = LtCondition;
