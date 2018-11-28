class Product {
  constructor(public name: string, public unitPrice: number) {}
}

interface DiscountCode {
  code: string;
  percentage: number;
}

class ProductWithDiscountCodes extends Product {
  constructor(public name: string, public unitPrice: number) {
    super(name, unitPrice);
  }
  discountCodes: DiscountCode[];
}

const table = new ProductWithDiscountCodes("Table", 500);
table.discountCodes = [
  { code: "SUMMER10", percentage: 0.1 },
  { code: "BFRI", percentage: 0.2 }
];
