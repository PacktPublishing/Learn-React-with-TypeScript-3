export interface IProduct {
  name: string;
  unitPrice: number;
}

export class OrderDetail {
  public product: IProduct;
  public quantity: number;
  public getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}
