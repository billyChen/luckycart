const ICondition = require("./ICondition");

class BasicCondition extends ICondition {
  constructor(key, expectedValue) {
    super();
    this.key = key;
    this.expectedValue = expectedValue;
  }

  evaluate(cart) {
    return cart[this.key] == this.expectedValue;
  }
}

module.exports = BasicCondition;
