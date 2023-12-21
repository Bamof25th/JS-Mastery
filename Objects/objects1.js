//OBJECTS

// object is an unorderd collection of related data in form of key value pair.

//  const students = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     no :  1
//  }

//  console.log(Object.keys(students));

// DOT NOTATION

const person = {
  firstName: "BRAD",
};
// console.log(person.firstName) // o/p => BRAD

person.pokemon = { name: "Pikachu", age: 2 };
person.pokemon1 = { name: "Charmander", age: 1 };
person.pokemon2 = { name: "Squirtel", age: 1 };
person.pokemon3 = { name: "Bulbasaur", age: 1 };

console.log(person.pokemon.name); // ans = Pikachu

// Square Bracket Notation

console.log(person["firstName"]); // BRAD === to dot notation

// info abut me server is storing  == session => cookies(in way of session id)

// Object Methods  ==> another property of object to store functions

// const myObj = {
//   myMethod: () => {}, // arrow func
//   myMethod1: function () {}, // normal function
//   myMethod3() {},// directly functions
// };

const cat = {
  name: "Whiskers",
  age: 1,
  mewAllProps: function () {
    // this
    console.log(this.name, this.age); // it cant be used inside the arrow function
  },
};

cat.mewAllProps();



// built in objects methods (important);

// Object.keys() creates an array containing key of an object.

// let employees = {
//   boss: 'Aniket',
//   secretary: 'Pragya',
//   sales: 'Om',
//   accountant: 'Aarti'
// }


// const positions = Object.keys(employees);

// console.log(positions)

// Object.values() creates an array containing the values of an objects. / / /


let session = { 
  id: 1,
  time: `26-nov-2023`,
  device: `mobile`,
  browser: 'safari'
}

const sessionInfo = Object.values(session);
console.log(sessionInfo);


// Object.entries() returns an array of a given object’s own enumerable string-keyed property [key, value] pairs.

const OperatingSystem = {
  name: `Windows`,
  version:`10`,
  license: `Open Source`
};

const entries = Object.entries(OperatingSystem);
console.log(entries);

// / loop through the result

entries.forEach(entry => {
  let key = entry[0];
  let value = entry[1];

  console.log(` ${key} : ${value}`)
});


// Object.freeze() prevents Modification.

// const user = {
//   username: 'john',
//   password: '9987897'
// }


// const admin = Object.freeze(user);

// admin.username =  'Ash'
// admin.password = '123123123'

// console.log(admin);

// Object.seal()  prevents new properties ,

const user = {
  username: 'john',
  password: '9987897'
}

const newUser = Object.seal(user);

newUser.password = 'anibag321';

newUser.active = true ; 
console.log(newUser);