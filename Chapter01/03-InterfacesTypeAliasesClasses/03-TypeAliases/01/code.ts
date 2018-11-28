interface Product {
  name: string;
  unitPrice: number;
}

type GetTotal = (discount: number) => number;

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal: GetTotal;
}
