class Product {
  name: string;
  unitPrice: number;
}

class OrderDetail {
  public product: Product;
  public quantity: number;
  private deleted: boolean;

  public getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }

  public delete(): void {
    this.deleted = true;
  }
}

const orderDetail = new OrderDetail();
orderDetail.deleted = true;
