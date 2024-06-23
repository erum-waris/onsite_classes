"use strict";
// Understanding Promises
// Promises provide a cleaner way to handle asynchronous operations.
// They represent a value that may be available now,
// or in the future, or never.
Object.defineProperty(exports, "__esModule", { value: true });
// Key Concepts:
// Pending: Initial state
// Fulfilled: Operation completed successfully = resolved
// Rejected: Operation failed = rejected
// Basic syntax: const promise = new Promise((resolve, reject) => {})
console.log("Hello World");
console.log("Hello Kitty");
const promise = new Promise((resolve, reject) => {
    let isjob = false;
    if (isjob) {
        resolve("Have job");
    }
    else {
        reject("Jobless");
    }
});
console.log(promise);
console.log(" Promise Practice");
promise
    .then((val) => console.log(val)) // Run only when the promise is resolved
    .catch((err) => console.log(err)); // Run only when the promise is rejected
console.log("Here we are");
