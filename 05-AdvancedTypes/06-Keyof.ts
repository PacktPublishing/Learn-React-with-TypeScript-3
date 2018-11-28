interface IPerson {
  id: number;
  name: string;
  age: number;
}

type PersonProps = keyof IPerson;

class Field<T, K extends keyof T> {
  name: K;
  label: string;
  defaultValue: T[K];
}

const idField: Field<IPerson, "id"> = new Field();
idField.defaultValue = 2;

const nameField: Field<IPerson, "name"> = new Field();
nameField.defaultValue = "Billy";
