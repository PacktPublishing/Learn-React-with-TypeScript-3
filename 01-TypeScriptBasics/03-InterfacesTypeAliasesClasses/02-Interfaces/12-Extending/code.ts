interface Product {
  name: string;
  unitPrice: number;
}

interface DiscountCode {
  code: string;
  percentage: number;
}

interface ProductWithDiscountCodes extends Product {
  discountCodes: DiscountCode[];
}

const table: ProductWithDiscountCodes = {
  name: "Table",
  unitPrice: 500,
  discountCodes: [
    { code: "SUMMER10", percentage: 0.1 },
    { code: "BFRI", percentage: 0.2 }
  ]
};
