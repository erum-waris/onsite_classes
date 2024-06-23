"use strict";
// Understanding callbacks hell
Object.defineProperty(exports, "__esModule", { value: true });
// Callback hell happens when multiple callbacks are nested,
//  making the code hard to read and maintain.
function mosam_Is_Awesome(making_Meal) {
    console.log("Let's Get ready for Picnic");
    setTimeout(() => {
        console.log("As Mosam Is Awesome so Going on a picnic and Now decision has been done ");
        making_Meal();
    }, 500);
}
function making_Meal(packBag) {
    console.log("Preparing Meal ");
    setTimeout(() => {
        console.log("Meal is Ready");
        packBag();
    }, 1500);
}
function packBag2(load_Car) {
    console.log("Packing Bag and putting stuff in it");
    setTimeout(() => {
        console.log("Packed Bag");
        load_Car();
    }, 1000);
}
function load_Car(cb) {
    console.log("Ready to Leave the home.");
    setTimeout(() => {
        console.log("finally");
        cb();
    }, 500);
}
mosam_Is_Awesome(function () {
    making_Meal(function () {
        packBag2(function () {
            load_Car(function () {
                console.log("On the way");
            });
        });
    });
});
