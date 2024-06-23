// enum is using as a data type

enum color{
    black,
    blue,
    white
}

let get_color = color.blue

console.log(get_color);

//Enum strings - fully initialized

enum orderStatus{
    placed = 'ordered pizza',
    order = 'order is pending',
    delivery = 'order delivered'
}

let get_status = orderStatus
console.log(get_status);

let get_order_info = orderStatus.placed
console.log(get_order_info);



//  creating enum fully  initialized

enum error {
    NotFound = 404,
    warning = 202,
    success = 200
}
//enum can be u sed like data type

let get_error : error = error.NotFound

console.log(get_error);

enum food {
    Pizza = "Enjoy Pizza",
    Burger = "Enjoy Burger",
    Chinese = "Enjoy Chinese meal",
    Spaghetti = "Enjoy Spaghetti"
}
    let orderFood : food = food.Pizza;

    console.log(orderFood);
    
    // applying conditions

    if(orderFood === food.Pizza){
        console.log(" Enjoy pizza");
        
    } else if( orderFood === food.Burger) {
            console.log("Enjoy Burger");
            
    } else if( orderFood === food.Chinese){
        console.log("Enjoy Chinese meal");
        
    } else if( orderFood === food.Pizza){
        console.log(" Enjoy Spaghetti");
        
    } else {
        console.log("BYE BYE")
        
    }

