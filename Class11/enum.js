"use strict";
// enum is using as a data type
var color;
(function (color) {
    color[color["black"] = 0] = "black";
    color[color["blue"] = 1] = "blue";
    color[color["white"] = 2] = "white";
})(color || (color = {}));
let get_color = color.blue;
console.log(get_color);
//Enum strings - fully initialized
var orderStatus;
(function (orderStatus) {
    orderStatus["placed"] = "ordered pizza";
    orderStatus["order"] = "order is pending";
    orderStatus["delivery"] = "order delivered";
})(orderStatus || (orderStatus = {}));
let get_status = orderStatus;
console.log(get_status);
let get_order_info = orderStatus.placed;
console.log(get_order_info);
//  creating enum fully  initialized
var error;
(function (error) {
    error[error["NotFound"] = 404] = "NotFound";
    error[error["warning"] = 202] = "warning";
    error[error["success"] = 200] = "success";
})(error || (error = {}));
//enum can be u sed like data type
let get_error = error.NotFound;
console.log(get_error);
var food;
(function (food) {
    food["Pizza"] = "Enjoy Pizza";
    food["Burger"] = "Enjoy Burger";
    food["Chinese"] = "Enjoy Chinese meal";
    food["Spaghetti"] = "Enjoy Spaghetti";
})(food || (food = {}));
let orderFood = food.Spaghetti;
console.log(orderFood);
// applying conditions
// if(orderFood === food.Pizza){
//     console.log(" Enjoy pizza");
// } else if( orderFood === food.Burger) {
//         console.log("Enjoy Burger");
// } else if( orderFood === food.Chinese){
//     console.log("Enjoy Chinese meal");
// } else if( orderFood === food.Spaghetti){
//     console.log(" Enjoy Spaghetti");
// } else {
//     console.log("BYE BYE")
// }
