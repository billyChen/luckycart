const EligibilityRules = require("./modules/eligibility/domain/EligibilityRules");
const CriteriaNotSupportedError = require("./modules/eligibility/domain/errors/CriteriaNotSupportedError");
const CartEligibilityMapper = require("./modules/eligibility/mappers/CartEligibilityMapper");
const CriteriaMapper = require("./modules/eligibility/mappers/CriteriaMapper");

class EligibilityService {
  /**
   * Compare cart data with criteria to compute eligibility.
   * If all criteria are fulfilled then the cart is eligible (return true).
   *
   * @param cart
   * @param criteria
   * @return {boolean}
   */
  isEligible(cartDto, criteriaDto) {
    try {
      const cartEligibility = CartEligibilityMapper.toDomain(cartDto);
      const criterias = CriteriaMapper.toDomain(criteriaDto);

      return EligibilityRules.check(cartEligibility, criterias);
    } catch (error) {
      if (error instanceof CriteriaNotSupportedError) {
        throw new Error(error.message);
      }

      throw new Error("Error while evaluating isEligible", error);
    }
  }
}

module.exports = {
  EligibilityService,
};
