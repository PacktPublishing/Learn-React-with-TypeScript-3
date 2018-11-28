class Product {
  name: string;

  private _unitPrice: number;
  get unitPrice(): number {
    return this._unitPrice || 0;
  }
  set unitPrice(value: number) {
    if (value < 0) {
      value = 0;
    }
    this._unitPrice = value;
  }
}

const table = new Product();
table.name = "Table";
console.log(table.unitPrice);
table.unitPrice = -10;
console.log(table.unitPrice);
