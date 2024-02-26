import { Cart } from "../domain/cart/Cart";

export class CartMapper {
  static toDomain(cart) {
    const { cartId, shopperId, date, totalAti, promoCode, products } = cart;

    return new Cart(cartId, shopperId, date, totalAti, promoCode, products);
  }
}
