interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
}

const table: Product = {
  name: "Table",
  unitPrice: 500
};

const tableOrder: OrderDetail = {
  product: table,
  quantity: 1
};
