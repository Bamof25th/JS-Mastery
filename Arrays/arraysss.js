// ARRAYS =>  data type of arrays Object.

const months = ['January', 'February', 'March', 'April'];


// console.log(months);
// console.log(typeof months);

months[2] = " not march"

// console.log(months[2]);


// console.log(months.length);// no of elements in  Arrays

// const combo = [

//     'Apple',
//     {name: 'john'},
//     true,
//     (b,a)=>a-b
// ]

// console.log(combo);

// for (let i = 0; i < months.length; i++) {
//     const element = months[i];
//     console.log(element)    
// }

//

const names = ['ash', 'goh', 'may', 'brock', 'gray', 'bob', 'mark'];

//Array push - Adds a new element containing the entered value to the wnd of the array

names.push('John');

// console.log(names.push('John') ); //=> gives 8

// console.log(names);

// Array Pop - Deletes Last element on array

names.pop();

// const removedValue = names.pop();

// console.log(removedValue);

// console.log(names);

// Array Shift - Deletes the firsst element of array.

names.shift();

// console.log(names);

// Array Unshift - adds the firsst element of array.

names.unshift('ash');

// console.log(names)


// Array Splice - It adds new values in any position of the array.

names.splice(2, 2,  10 ,20 ,30 ,40);

console.log(names)



// Array Slice - Copess certain part of  array into a newly created Array.

// const noOneLikesJohn = names.slice(1, 3);

// console.log(noOneLikesJohn)



 // For Each in Arrays

//  for (let i = 0; i < names.length; i++) {
//      console.log(names[i]);
//  }

// names.forEach((value)=>{
//     console.log(`${value}`);
// }) 

// let sum = 0 ;

// const numbers = [65, 44, 12, 4];

// numbers.forEach((number) => {
//     sum += number;
// });

// console.log(sum);



// Array Map 

// const inventory = [
//     { price: 6, name: 'egg'},
//     { price: 4, name: 'ham'},
//     { price: 4, name: 'mayo'},
//     { price: 4, name: 'bread'},
// ];


// const prices = inventory.map((item) => item.price);
// const items = inventory.map((item) => item.name);


// console.log(prices);
// console.log(items);

