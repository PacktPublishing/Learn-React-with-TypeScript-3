function condenseString(string: string): string {
  return string.split(" ").join("");
}

console.log("condenseString", condenseString("the cat sat on the mat"));

function condenseArray(array: string[]): string[] {
  return array.map(item => item.split(" ").join(""));
}

console.log(
  "condenseArray",
  condenseArray(["the ", "cat ", " sat ", "on ", "the", "mat"])
);

function condense(string: string): string;
function condense(array: string[]): string[];
function condense(stringOrArray: string | string[]): string | string[] {
  return typeof stringOrArray === "string"
    ? stringOrArray.split(" ").join("")
    : stringOrArray.map(item => item.split(" ").join(""));
}

const condensedText = condense("The cat sat on the mat");
console.log("condensedText", condensedText);

const condensedArray = condense(["the ", "cat ", " sat ", "on ", "the", "mat"]);
console.log("condense with array", condensedArray);
