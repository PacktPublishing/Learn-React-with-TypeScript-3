const numbers: number[] = [];

numbers.push(1);

const numbers = [1, 3, 5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

for (let i in numbers) {
  console.log(numbers[i]);
}

numbers.forEach(function(num) {
  console.log(num);
});
