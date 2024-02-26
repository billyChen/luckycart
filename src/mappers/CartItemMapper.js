export class CartItemMapper {
  static toDomain(productData) {
    return new CartItem(productData);
  }
}
