"use strict";
//promises in typescript
Object.defineProperty(exports, "__esModule", { value: true });
//promise syntax  : variable name = new promise(keyword) ((resolve , reject) , => {})
function check_weather() {
    return new Promise((resolve, reject) => {
        console.log("Checking Weather");
        setTimeout(() => {
            console.log("Weather is Awesom");
            resolve();
        }, 2000);
    });
}
function make_Pizza() {
    return new Promise((resolve, reject) => {
        console.log("Making Pizza");
        setTimeout(() => {
            console.log("packed bag");
            resolve();
        }, 1800);
    });
}
function packBag() {
    return new Promise((resolve, reject) => {
        console.log("Packing Bag");
        setTimeout(() => {
            console.log("packed bag");
            resolve();
        }, 1500);
    });
}
function load_car() {
    return new Promise((resolve, reject) => {
        console.log("Loading Car");
        setTimeout(() => {
            console.log("car has been loaded");
            reject();
        }, 1000);
    });
}
check_weather()
    .then(make_Pizza)
    .then(packBag)
    .then(load_car)
    .catch((err) => console.log("Something Went Wrong"));
