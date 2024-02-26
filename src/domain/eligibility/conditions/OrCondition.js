const ICondition = require("./ICondition");

class OrCondition extends ICondition {
  constructor(conditions) {
    super();
    this.conditions = conditions;
  }

  evaluate(cartEligibility) {
    return this.conditions.some((condition) =>
      condition.evaluate(cartEligibility)
    );
  }
}

module.exports = OrCondition;
