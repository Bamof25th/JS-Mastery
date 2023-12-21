// Synchronous JS Example

// const functionOne  = () => {
//     console.log('Function One');

//     functionTwo();

//     console.log('Function One, part 2')
// }



// const functionTwo  = () => {
//     console.log('Function Two');
// }


// const functionThree  = () => {
//     console.log('Function three');
// }


// functionOne();

// 1
// 2
// 3


// Asynchronous JS Example

const functionOne  = () => {
    console.log('Function One');

    functionTwo();

    console.log('Function One, part 2')
}



const functionTwo  = () => {
    setTimeout(() => {
        console.log('Function Two');
    }, 2000);
}
// const functionThree  = () => {
//     console.log('Function three');
// }


functionOne();

// What is synchronous Javascript?

// Synchronous Javascript is one in which
//  the code is executed line by line and their tasks
//   are completed instantly, i.e. there is no time delay in the 
//   completion of the tasks for those lines of code.

// What is Asynchronous Javascript?

// Asynchronous Javascript is one in which some lines of code take
//  time to run. These tasks are run in the background while the
//   Javascript engine keeps executing other lines of code. 
//   When the result of the asynchronous tasks 
//   gets available, it is then used in the program.