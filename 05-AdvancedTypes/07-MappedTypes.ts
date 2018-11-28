interface IPerson {
  id: number;
  name: string;
}

type ReadonlyPerson = { readonly [P in keyof IPerson]: IPerson[P] };

let billy: ReadonlyPerson = {
  id: 1,
  name: "Billy"
};
billy.name = "Sally";

let sally: Readonly<IPerson> = {
  id: 1,
  name: "Sally"
};
sally.name = "Billy";

type Stringify<T> = { [P in keyof T]: string };
let tim: Stringify<IPerson> = {
  id: "1",
  name: "Tim"
};
