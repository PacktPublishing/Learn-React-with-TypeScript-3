interface IPerson {
  id: number;
  firstName: string;
  surname: string;
}

interface ICompany {
  id: number;
  name: string;
}

type PersonOrCompany = IPerson | ICompany;

function isPerson(
  personOrCompany: PersonOrCompany
): personOrCompany is IPerson {
  return "firstName" in personOrCompany;
}

function logName(personOrCompany: PersonOrCompany) {
  if (isPerson(personOrCompany)) {
    console.log(`${personOrCompany.firstName} ${personOrCompany.surname}`);
  } else {
    console.log(personOrCompany.name);
  }
}
