// // Understanding setTimeout and Web APIs
// Web APIs is a set of APIs that are provided by the browser to JavaScript.

// setTimeout is a function that is used to schedule a function to be executed
// after a given time.

// Javascript is a single threaded language, 
// so it will execute the code sequentially.

console.log("one");

console.log("Two"); 


setTimeout(function () {
    console.log("three");
}, 4000)
    
setTimeout( function (){
    console.log("Hello World");
    
} , 2000)


console.log("four");
