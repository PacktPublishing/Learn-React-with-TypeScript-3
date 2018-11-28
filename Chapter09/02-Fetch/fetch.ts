// getting data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data));

// getting the response status
fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
  console.log(response.status, response.ok); // 200, true
});

// getting the response status
fetch("https://jsonplaceholder.typicode.com/posts/1001").then(response => {
  console.log(response.status, response.ok); // 404, false
});

// handling errors
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(json => console.log("error", json));

// post some data
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Interesting post",
    body: "This is an interesting post about ...",
    userId: 1
  })
})
  .then(response => {
    console.log(response.status); // 201
    return response.json();
  })
  .then(data => console.log(data));

// adding headers - e.g. Content-type, bearer token
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "bearer some-bearer-token"
  },
  body: JSON.stringify({
    title: "Interesting post",
    body: "This is an interesting post about ...",
    userId: 1
  })
})
  .then(response => {
    console.log(response.status); // 201
    return response.json();
  })
  .then(data => console.log(data));

// put some data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    title: "Corrected post",
    body: "This is corrected post about ...",
    userId: 1
  })
})
  .then(response => {
    console.log(response.status); // 200
    return response.json();
  })
  .then(data => console.log(data)); // {id: 1}

// patch some data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    title: "Corrected post"
  })
})
  .then(response => response.json())
  .then(data => console.log(data)); // {id: 1}

// delete from data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
}).then(response => {
  console.log(response.status); //200
});
