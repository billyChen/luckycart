const Criteria = require("../domain/eligibility/Criteria");
const GtCondition = require("../domain/eligibility/conditions/GtCondition");
const BasicCondition = require("../domain/eligibility/conditions/BasicCondition");

class CriteriaMapper {
  static toDomain(criterias) {
    if (Object.keys(criterias).length === 0) {
      return new Criteria([]);
    }

    const conditions = Object.entries(criterias).map(([key, value]) => {
      if (value.gt) {
        return new GtCondition(key, value.gt);
      }
      return new BasicCondition(key, value);
    });

    return new Criteria(conditions);
  }
}

module.exports = CriteriaMapper;
