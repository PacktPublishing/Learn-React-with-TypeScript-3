class Product {
  name: string;
  unitPrice: number;
}

interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

class OrderDetail implements IOrderDetail {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const table = new Product();
table.name = "Table";
table.unitPrice = 500;

const orderDetail = new OrderDetail(table, 2);
