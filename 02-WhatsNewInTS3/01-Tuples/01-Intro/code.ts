let product: [string, number];

product = ["Table", 500];

product = [500, "Table"];

// Fairly readable
let flag: [string, boolean];
flag = ["Active", false];

// Fairly readable
let last3Scores: [string, number, number, number];
last3Scores = ["Billy", 60, 70, 75];

// Fairly readable
let point: [number, number, number];
point = [100, 200, 100];

// Not readable - what are those 2 numbers?
let customer: [string, number, number];
customer = ["Tables Ltd", 500100, 10500];

// Accessing tuple elements
product = ["Table", 500];
console.log(product[0]); // "Table"
console.log(product[1]); // 500

// Iterating tuples
product = ["Table", 500];
for (let element in product) {
  console.log(product[element]); // Table, 500
}

product.forEach(function(element) {
  console.log(element); // Table, 500
});
