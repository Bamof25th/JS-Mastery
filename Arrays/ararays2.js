// Arrays  Filter method.

// const numbers = [ -10, 0, -2, 15, -36, 25 ];


//  const positiveNumbers = numbers.filter((number) =>  number >= 0 );

// console.log(numbers);
// console.log(positiveNumbers);


// const employeesData = [
//     { name: 'John', overtime: 40 },
//     { name: 'om', overtime: 30 },
//     { name: 'jod', overtime: 70 },
//     { name: 'podenam', overtime: 10 },
// ];

// const employeesToReward = employeesData.filter((employee) => employee.overtime >= 30 ) 

// const emplyeeNames = employeesToReward.map((employee)=>employee.name);

// emplyeeNames.forEach((name)=> console.log(`${name} received a reward`))

// console.log(emplyeeNames)
// console.log(employeesToReward);




// ARRAYS Find 

// const numbers =  [1,2,3,4,5,6,7,8,9,10];

// const value = numbers.find((number) => number > 5);

// console.log(value);

// const states = [ 'Alaska', 'California', 'Colarado', 'Hawaii'];

// const state = states.find((state) => state.startsWith('Hawa'));

// console.log(state);

// ARRAY iNCLUDES => the array includes method check if the value is (true or false) present or absent in array. 


// const pets = ['cat', 'dog', 'llama'];


// console.log(pets.includes('llama'));


// const bookShelf = ["Moby Dick", "The Great Gatsby", "Pride and PRjudices"];

// if(bookShelf.includes("The Great Gatsby")){
//     console.log("Book is on the shelf");
// }else{
//     console.log("Book is not on the shelf");
// }


// ARRAY  Sort

// const names = ["Aniket", "Bam", "Ben", "Camilla", "Danny"];


// names.sort(); //Mutates the Arrays;

// console.log(names)


// const numbers = [19,92,20,7,36,676,34,28,15,51,81,99]; // sorts number in ascending order.

// numbers.sort((a, b) => a-b); // callback function sorts (a-b) in ascending order ,(b-a )in decending order.

// console.log(numbers)