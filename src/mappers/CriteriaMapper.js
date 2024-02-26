const Criteria = require("../domain/eligibility/Criteria");
const GtCondition = require("../domain/eligibility/conditions/GtCondition");
const BasicCondition = require("../domain/eligibility/conditions/BasicCondition");
const LtCondition = require("../domain/eligibility/conditions/LtCondition");
const GteCondition = require("../domain/eligibility/conditions/GteCondition");
const LteCondition = require("../domain/eligibility/conditions/LteCondition");
const InCondition = require("../domain/eligibility/conditions/InCondition");
const AndCondition = require("../domain/eligibility/conditions/AndCondition");
const OrCondition = require("../domain/eligibility/conditions/OrCondition");

class CriteriaMapper {
  static toDomain(criterias) {
    if (Object.keys(criterias).length === 0) {
      return new Criteria([]);
    }

    const conditions = Object.entries(criterias).map(([key, value]) => {
      if (value.gt) {
        return new GtCondition(key, value.gt);
      }

      if (value.gte) {
        return new GteCondition(key, value.gte);
      }

      if (value.lt) {
        return new LtCondition(key, value.lt);
      }

      if (value.lte) {
        return new LteCondition(key, value.lte);
      }

      if (value.in) {
        return new InCondition(key, value.in);
      }

      if (value.and) {
        const nestedConditions = Object.entries(value.and).map(
          ([nestedKey, nestedValue]) => {
            if (nestedKey === "gt") {
              return new GtCondition(key, nestedValue);
            }

            if (nestedKey === "gte") {
              return new GteCondition(key, nestedValue);
            }

            if (nestedKey === "lt") {
              return new LtCondition(key, nestedValue);
            }

            if (nestedKey === "lte") {
              return new LteCondition(key, nestedValue);
            }

            if (nestedKey === "in") {
              return new InCondition(key, nestedValue);
            }
            // TODO: should handle and / or conditions here too
          }
        );
        return new AndCondition(nestedConditions);
      }

      if (value.or) {
        const nestedConditions = Object.entries(value.or).map(
          ([nestedKey, nestedValue]) => {
            if (nestedKey === "gt") {
              return new GtCondition(key, nestedValue);
            }

            if (nestedKey === "gte") {
              return new GteCondition(key, nestedValue);
            }

            if (nestedKey === "lt") {
              return new LtCondition(key, nestedValue);
            }

            if (nestedKey === "lte") {
              return new LteCondition(key, nestedValue);
            }

            if (nestedKey === "in") {
              return new InCondition(key, nestedValue);
            }
            // TODO: should handle and / or conditions here too
          }
        );
        return new OrCondition(nestedConditions);
      }

      return new BasicCondition(key, value);
    });

    return new Criteria(conditions);
  }
}

module.exports = CriteriaMapper;
