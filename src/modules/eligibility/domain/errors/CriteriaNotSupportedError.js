class CriteriaNotSupportedError extends Error {
  constructor(criteria) {
    super(`Criteria ${criteria} not supported`);
    this.name = "CriteriaNotFoundError";
  }
}

module.exports = CriteriaNotSupportedError;
