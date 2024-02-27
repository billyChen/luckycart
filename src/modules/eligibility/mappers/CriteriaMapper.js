const Criteria = require("../domain/Criteria");
const GtCondition = require("../domain/conditions/GtCondition");
const BasicCondition = require("../domain/conditions/BasicCondition");
const LtCondition = require("../domain/conditions/LtCondition");
const GteCondition = require("../domain/conditions/GteCondition");
const LteCondition = require("../domain/conditions/LteCondition");
const InCondition = require("../domain/conditions/InCondition");
const AndCondition = require("../domain/conditions/AndCondition");
const OrCondition = require("../domain/conditions/OrCondition");
const CriteriaNotSupportedError = require("../domain/errors/CriteriaNotSupportedError");

const conditionTypeToClassMap = {
  gt: GtCondition,
  gte: GteCondition,
  lt: LtCondition,
  lte: LteCondition,
  in: InCondition,
  and: AndCondition,
  or: OrCondition,
};

class CriteriaMapper {
  static toDomain(criterias) {
    if (Object.keys(criterias).length === 0) {
      return new Criteria([]);
    }

    const conditions = this.createConditions(criterias);

    return new Criteria(conditions);
  }

  static createConditions(criterias) {
    return Object.entries(criterias).map(([key, value]) => {
      const conditionKey = this.getConditionKeyFromCriteria(value);

      if (conditionKey === "eq") {
        return new BasicCondition(key, value);
      }

      if (conditionKey === "and" || conditionKey === "or") {
        return new conditionTypeToClassMap[conditionKey](
          this.mapNestedConditions(key, value[conditionKey])
        );
      }

      if (!conditionTypeToClassMap[conditionKey])
        throw new CriteriaNotSupportedError(value);

      return new conditionTypeToClassMap[conditionKey](
        key,
        value[conditionKey]
      );
    });
  }

  static getConditionKeyFromCriteria(value) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      const conditionType = Object.keys(value)[0];
      return conditionType;
    }
    return "eq";
  }

  static mapNestedConditions(key, conditionKey) {
    return Object.entries(conditionKey).map(([nestedKey, nestedValue]) => {
      const condition = conditionTypeToClassMap[nestedKey];

      if (!condition) throw new CriteriaNotSupportedError();

      return new conditionTypeToClassMap[nestedKey](key, nestedValue);
    });
  }
}

module.exports = CriteriaMapper;
