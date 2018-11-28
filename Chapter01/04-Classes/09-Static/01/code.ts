class Product {
  name: string;
  unitPrice: number;
}

class OrderDetail {
  product: Product;
  quantity: number;

  static getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}
