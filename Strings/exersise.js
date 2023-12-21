// We have a guests string.

// const guestList = 'Our guests are: emma, jacob, isabella, ethan';
// Get a length of the string. Store it in a variable called
// length
// .
// Expected output:

// console.log(length); // 44
// Uppercase the entire string. Store the result in a variablle called uppercasedGuestList.
// Expected output:

// console.log(uppercasedGuestList); // OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN
// Check whether
// 'ETHAN'
// is on the
// uppercasedGuestList
// . Store the answer in a variable called
// isEthanOnTheList
// . The data type of the variable must be a boolean.
// Expected output:

// console.log(isEthanOnTheList); // true
// Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'
// . Store the answer in a variable called
// substringGuests
// .
// Expected output:

// console.log(substringGuests); // 'EMMA, JACOB, ISABELLA, ETHAN'
// Out of the substring you just created, create an array of names of people that are on the list. Store that array in a variable called
// guests
// .
// Expected output:

// console.log(guests); // [ 'EMMA', 'JACOB', 'ISABELLA', 'ETHAN']

// Que 1

// ans:=
 const guestList = 'Our guest are: emma , jacob ,isabella, ethan';

const length  = guestList.length;

console.log(length);

// que 2

//  ans :=

const uppercasedGuestList = guestList.toUpperCase();

console.log(uppercasedGuestList);

//que 3 

// ans :=

const isEthanOnTheList =   uppercasedGuestList.includes('ETHAN');

console.log(isEthanOnTheList);

// que 4 

// ans :=

const  substringGuests = uppercasedGuestList.substring("15");

console.log(substringGuests) ;


//que 5

//ans :=

const guests =  substringGuests.split(",");

console.log(guests);

// completed the strings

