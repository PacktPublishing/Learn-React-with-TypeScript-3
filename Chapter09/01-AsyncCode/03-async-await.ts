const someWork = async () => {
  // need mark asynchronous function with async keyword
  try {
    const result = await wait(1500); // need to use await keyword to call asynchronous function
    console.log(result);
  } catch (ex) {
    console.log(ex);
  }
};

someWork();
