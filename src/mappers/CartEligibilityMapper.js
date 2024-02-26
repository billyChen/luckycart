const CartEligibility = require("../domain/eligibility/CartEligibility");

class CartEligibilityMapper {
  static toDomain(attributes) {
    return new CartEligibility(attributes);
  }
}

module.exports = CartEligibilityMapper;
