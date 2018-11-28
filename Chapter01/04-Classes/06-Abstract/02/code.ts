abstract class Product {
  name: string;
  unitPrice: number;
}

class Food extends Product {
  constructor(public bestBefore: Date) {
    super();
  }
}

const bread = new Food(new Date(2019, 6, 1));
