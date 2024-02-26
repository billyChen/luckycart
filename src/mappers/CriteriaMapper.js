const Criteria = require("../domain/eligibility/Criteria");
const BasicCondition = require("../domain/eligibility/conditions/BasicCondition");

class CriteriaMapper {
  static toDomain(criterias) {
    if (Object.keys(criterias).length === 0) {
      return new Criteria([]);
    }

    const conditions = Object.entries(criterias).map(([key, value]) => {
      return new BasicCondition(key, value);
    });

    return new Criteria(conditions);
  }
}

module.exports = CriteriaMapper;
