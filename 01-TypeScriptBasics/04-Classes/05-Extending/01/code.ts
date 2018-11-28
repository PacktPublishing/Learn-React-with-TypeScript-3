class Product {
  name: string;
  unitPrice: number;
}

interface DiscountCode {
  code: string;
  percentage: number;
}

class ProductWithDiscountCodes extends Product {
  discountCodes: DiscountCode[];
}

const table = new ProductWithDiscountCodes();
table.name = "Table";
table.unitPrice = 500;
table.discountCodes = [
  { code: "SUMMER10", percentage: 0.1 },
  { code: "BFRI", percentage: 0.2 }
];
