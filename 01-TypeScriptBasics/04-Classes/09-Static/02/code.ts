class Product {
  name: string;
  unitPrice: number;
}

class OrderDetail {
  product: Product;
  quantity: number;

  static getTotal(
    unitPrice: number,
    quantity: number,
    discount: number
  ): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const total = OrderDetail.getTotal(500, 2, 0.1);
console.log(total);
