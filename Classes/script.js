// The "new" Keyword

// IT creates a new object.

// const person = {};

// const person1 = new Object();

// person.firstName = "john";

// person1.firstName = "john";

// console.log(person)
// console.log(person1)

const myDate = new Date("August 11, 2025");

console.log(myDate.getFullYear());

//The "this" keyWord ,  note - not applicable inside Arrow Function.

function Sentence(words) {
  this.words = words;

  console.log(this);
}

const firstString = new Sentence("hello boys i am your new father");

console.log(this); // outside of all scopes in Global scope it will return goble window obj

//  const person = {
//     name: "John",
//     getName(){
//         console.log(this);
//     }
//  }

//  person.getName();

function Car(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;

  console.log(this);
}

const blueCar = new Car("Blue", "Bmw", 4);
const redCar = new Car("Red", "Mercedese", 4);

// A Class ia a scema for an object that can save many values

// const person = {
//   name: "malessa",
//   age: 36,
//   isWorking: true,
// };

class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
}

const user = new Person("Ash", 19, false);

console.log(user)