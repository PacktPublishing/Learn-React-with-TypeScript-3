// Execution order of code with callbacks
let firstName: string;
setTimeout(() => {
  firstName = "Fred";
  console.log("firstName in callback", firstName); // second
}, 1000);
console.log("firstName after setTimeout", firstName); // first

// Errors in callback aren't caught outside of callback
try {
  setTimeout(() => {
    throw new Error("Something went wrong");
  }, 1000);
} catch (ex) {
  console.log("An error has occurred", ex); // never reached
}

// Errors in callback have to be caught inside the callback and then managed
interface IResult {
  success: boolean;
  error?: any;
}
let result: IResult = { success: true };
setTimeout(() => {
  try {
    throw new Error("Something went wrong");
  } catch (ex) {
    result.success = false;
    result.error = ex;
  }
}, 1000);
console.log(result);

// callback hell with jQuery ajax
$("button").click(function() {
  $.get("api/resouce1", function(items) {
    items.array.forEach(element => {
      $.get("api/resouce2", function(data) {
        // do some stuff
      });
    });
  });
});
// => messy and hard to manage errors
