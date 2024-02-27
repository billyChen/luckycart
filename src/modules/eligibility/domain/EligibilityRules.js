class EligibilityRules {
  constructor() {}

  static check(cart, criterias) {
    return criterias.conditions.every((condition) => condition.evaluate(cart));
  }
}

module.exports = EligibilityRules;
