import { CartItemMapper } from "../../mappers/CartItemMapper";

export class Cart {
  constructor({ cartId, shopperId, date, totalAti, promoCode, products }) {
    this.cartId = cartId;
    this.shopperId = shopperId;
    this.date = new Date(date);
    this.totalAti = totalAti;
    this.promoCode = promoCode;
    this.products = products.map(CartItemMapper.toDomain);
  }
}
