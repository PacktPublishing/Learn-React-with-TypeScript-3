interface IProduct {
  name: string;
  unitPrice: number;
}

function calculateTotalPrice(
  product: IProduct,
  quantity: number,
  discount: number
): number {
  var priceWithoutDiscount: number = product.unitPrice * quantity;
  var discountAmount: number = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}
