fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json()) // returns a promise
  .then(data => console.log(data))
  .catch(json => console.log("error", json));
// => cleaner + errors are managed nicer

const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    if (ms > 1000) {
      reject("Too long");
    }
    setTimeout(() => {
      resolve("Sucessfully waited");
    }, ms);
  });
};

wait(1500)
  .then(result => console.log(result))
  .catch(error => console.log(error));
