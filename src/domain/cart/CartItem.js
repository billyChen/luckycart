export class CartItem {
  constructor({ productId, quantity, unitPriceAti, totalPriceAti }) {
    this.productId = productId;
    this.quantity = quantity;
    this.unitPriceAti = unitPriceAti;
    this.totalPriceAti = totalPriceAti;
  }
}
