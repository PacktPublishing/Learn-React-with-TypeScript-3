interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(number): number;
}

const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discountPercentage: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return priceWithoutDiscount - discountAmount;
  }
};
