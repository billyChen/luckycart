const CartEligibility = require("../domain/CartEligibility");

class CartEligibilityMapper {
  static toDomain(attributes) {
    return new CartEligibility(attributes);
  }
}

module.exports = CartEligibilityMapper;
