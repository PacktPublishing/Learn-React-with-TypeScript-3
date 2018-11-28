function getData<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

interface IPerson {
  id: number;
  name: string;
}

getData<IPerson>("/people/1").then(person => console.log(person));
