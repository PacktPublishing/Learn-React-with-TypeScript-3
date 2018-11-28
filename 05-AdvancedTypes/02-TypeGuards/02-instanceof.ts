class Person {
  id: number;
  firstName: string;
  surname: string;
}

class Company {
  id: number;
  name: string;
}

type PersonOrCompany = Person | Company;

function logName(personOrCompany: PersonOrCompany) {
  if (personOrCompany instanceof Person) {
    console.log(`${personOrCompany.firstName} ${personOrCompany.surname}`);
  } else {
    console.log(personOrCompany.name);
  }
}
