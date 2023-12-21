const person = {
  firstname: "Emma",
  car: {
    brand: "BMW",
    color: "Red",
    wheels: 4,
  },
};

// const newPerson = { ...person, car: { ...person.car } };

// newPerson.firstname = "Mia";

// newPerson.car.brand = "Supra";

// console.log(person);
// console.log(newPerson);


// if we have a deepley nested object we ned to create a DEEP CLONE

const stringifiedPerson = JSON.stringify(person);

const newPerson =  JSON.parse(stringifiedPerson);


newPerson.firstname = "Mia";

newPerson.car.brand = "Supra";

console.log(person);
console.log(stringifiedPerson);
console.log(newPerson);