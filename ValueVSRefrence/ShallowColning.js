// Cloning Array
// FIrst way:  SPREAD OPERATOR

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 123asd

// Shallow cloning
// const newNums = [...nums];  //dsa3121 

// const copyNums = nums;  //123asd

// nums.push(10); // when we push a number in an array the nums and copyNums changes but newNums didnt change.

// console.log(nums)
// console.log(copyNums)
// console.log(newNums)

// console.log(nums === copyNums);
// console.log(newNums === nums);




// Cloning Array
// Second way:  Array.slice()

// const newNums = nums.slice();  //dsa3121 

// const copyNums = nums;  //123asd

// nums.push(10); // when we push a number in an array the nums and copyNums changes but newNums didnt change.

// console.log(nums)
// console.log(copyNums)
// console.log(newNums)

// console.log(nums === copyNums);
// console.log(newNums === nums);




// Cloning Objects
// First way : Spread Operator


// const Person =  {
//     name: 'john',
//     age: 29
// }


// const otherPerson =  { ...Person };

// Person.age = 22;

// console.log(Person);
// console.log(otherPerson);


// Cloning Objects
// First way : Object.assign();


const Person =  {
    name: 'john',
    age: 29
}


const otherPerson =  Object.assign({},Person);

Person.age = 22;

console.log(Person);
console.log(otherPerson);