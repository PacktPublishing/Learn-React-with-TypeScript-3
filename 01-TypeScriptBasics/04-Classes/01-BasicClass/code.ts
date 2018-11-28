class Product {
  name: string;
  unitPrice: number;
}

class OrderDetail {
  product: Product;
  quantity: number;

  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const table = new Product();
table.name = "Table";
table.unitPrice = 500;

const orderDetail = new OrderDetail();
orderDetail.product = table;
orderDetail.quantity = 2;

const total = orderDetail.getTotal(0.1);

console.log(total);
