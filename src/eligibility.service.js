const EligibilityRules = require("./domain/eligibility/EligibilityRules");
const CartEligibilityMapper = require("./mappers/CartEligibilityMapper");
const CriteriaMapper = require("./mappers/CriteriaMapper");

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
    const cartEligibility = CartEligibilityMapper.toDomain(cartDto);
    const criterias = CriteriaMapper.toDomain(criteriaDto);

    return EligibilityRules.check(cartEligibility, criterias);
  }
}

module.exports = {
  EligibilityService,
};
