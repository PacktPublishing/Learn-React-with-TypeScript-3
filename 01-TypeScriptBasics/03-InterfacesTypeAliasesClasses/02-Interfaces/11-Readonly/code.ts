interface Product {
  readonly name: string;
  unitPrice: number;
}

const table: Product = {
  name: "Table",
  unitPrice: 500
};

table.name = "Better Table";
