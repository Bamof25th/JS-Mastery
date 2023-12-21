// SCOPE

// Global Scope ->

// const name = 'John'; // global variable

// const logName =  ()  => {
//     console.log(name);
// }

// logName();

// Local Scope / Function Scope

const someFun = () =>{
    //Local Scope 1
    // const age = 30;
    
    // console.log(age);

        //    const anotherFun = () =>{
            //Local Scope 2
        //     console.log(age)
        //    }
    
    // anotherFun();
}


// someFun();

// Block Sscope ||note => (var is not block scoped)

// if (true) {
//     const name = 'john';

//     // console.log(name)
// }
// console.log(name);


//  HOISTING  in JAVASCRIPT

// it is almnost never used in Modern javascript




// console.log( age) // for var it gives undefined .

// var age = 20;

// let age =24; //=> for let and const hoisting does not work.

// EX  =>
// hoist(); // does not work for arrow fun , o/p = as uncaught ref error.

// const hoist = () =>{
//     var  message = "Go"; ;
    
//     console.log(message);
    
// }



// CLOSURES IN JS

// const outer = () => {
      

//     const outerVar = 'Hello';
    

//     const inner  = () => {
//         const innerVar =  'hi!';
        
//         console.log(outerVar , innerVar)
//     }
//   return inner ;
// }

// const innerFn  = outer();

// innerFn();



const init = () => {
    const hobby = " playing football "; // Local vriable created by init Fn

    const  displayHobby = () => {       // inner Fn 
        console.log(hobby);             // using the variable created in parent function
    }
   return displayHobby;
}

  const myFn = init();

   myFn();



