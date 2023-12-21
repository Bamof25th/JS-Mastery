// ECMAScript 6  or simply ES6


// const and let
var age = 27;
console.log(age); // 27
var age = 28;
console.log(age); // 28

let age = 27;
console.log(age); // 27
let age = 28;
console.log(age); // SyntaxError

// const password = '123123';
password = '123456'; // TypeError: Assignment to a constant variable

// let password = '123123';
password = '123456'; // Allowed

// Arrow function
function multiply (x) { 
	return x * x
}
const multiply = (x) => {
	return x * x;
}

const multiply = (x) => {
    return x * x;
}



// Default Parameters
const add = (x = 1, y = 2, z = 10) => { 
	return x + y + z;
}
add(10,3); // 23

// x = 10; 
// y = 3; 
// z = 10; (since it is not defined)

// Template Stings
const customer = 'John';

const order = { 
	name : 'iPad', 
	price: 1400
}

// the old way ... ugly
// const message = 'Hello' + customer.name + ',' + 'do you want to buy ' + order.product + ' for' + order.price + 'bucks?';

// the new way
const message = `Hello ${customer.name}, do you want to buy an ${order.product} for ${order.price} bucks?`;

// That is so simple!



// IMPORT AND EXPORTS

// import {FUNC or CLASS or Variable} name from "filename" 

// export default {FUNC or CLASS or Variable}
// exports {FUNC or CLASS or Variable}


//Destructuring

const person = {
    firstName: 'Gary',
    lastName: 'Vee',
    car: {
      color: 'red',
      wheels: 4
    },
    animals: {
      dog: {
        name: 'Fluffy',
        age: 3,
      },
       cat: {
        name: 'Kitty',
        age: 3,
      }
    }
  }
  
  // Object Destructuring
  const { firstName, lastName, car: { color, wheels }, animals: { cat, dog } } = person;