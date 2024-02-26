const ICondition = require("./ICondition");

class InCondition extends ICondition {
  constructor(key, expectedValues) {
    super();
    this.key = key;
    this.expectedValues = expectedValues;
  }

  evaluate(cartEligibility) {
    return this.expectedValues.includes(cartEligibility[this.key]);
  }
}

module.exports = InCondition;
