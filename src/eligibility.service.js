const { Cart } = require("./domain/cart/Cart");
const { Criteria } = require("./domain/eligibility/Criteria");
const { EligibilityRules } = require("./domain/eligibility/EligibilityRules");
const { CartMapper } = require("./mappers/CartMapper");
const { CriteriaMapper } = require("./mappers/CriteriaMapper");

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
    const cart = CartMapper.toDomain(cartDto);
    const criterias = CriteriaMapper.toDomain(criteriaDto);

    // TODO: compute cart eligibility here.
    return EligibilityRules.check(cart, criterias);
  }
}

module.exports = {
  EligibilityService,
};
