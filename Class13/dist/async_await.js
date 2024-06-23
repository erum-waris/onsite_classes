"use strict";
// Understanding async/await
// async/await is a syntax that allows you to write asynchronous code
// without using callbacks or promises.
Object.defineProperty(exports, "__esModule", { value: true });
// Async/Await makes working with promises easier by allowing us to 
// write asynchronous code that looks like synchronous code.
function Invitation() {
    //function body
    return new Promise((resolve, reject) => {
        // promise callback function body
        console.log("inviting Guests for Dinner, i'm calling");
        setTimeout(() => {
            console.log("I have invited Guests for dinner");
            resolve();
        }, 2000);
    });
}
function prepare_dinner() {
    return new Promise((resolve, reject) => {
        console.log("Preparing dinner the menu is: Tandoori Pizza,Pasta,Lasagna,Kabab,Dam Qeema");
        setTimeout(() => {
            console.log("Dinner is Ready");
            resolve();
        }, 1500);
    });
}
function making_table() {
    return new Promise((resolve, reject) => {
        console.log("Making Table");
        setTimeout(() => {
            console.log("Made the table");
            reject(console.log("Guests are not coming As they have to go Hospital to look after someone "));
        }, 1000);
    });
}
//creating async function for invoking created promises 
async function Dinner() {
    try {
        await Invitation();
        await prepare_dinner();
        await making_table();
    }
    catch (Error) {
        console.log("Catched error");
    }
}
Dinner();
function Call() {
    return new Promise((resolve, reject) => {
        console.log("hi");
        setTimeout(() => {
            console.log("Hello World");
            resolve();
        }, 5000);
    });
}
let x = Call().then(() => console.log("Erum"));
console.log(x);
