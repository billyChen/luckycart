const ICondition = require("./ICondition");

class AndCondition extends ICondition {
  constructor(conditions) {
    super();
    this.conditions = conditions;
  }

  evaluate(cartEligibility) {
    return this.conditions.every((condition) =>
      condition.evaluate(cartEligibility)
    );
  }
}

module.exports = AndCondition;
