// Understanding callbacks hell

// Callback hell happens when multiple callbacks are nested,
//  making the code hard to read and maintain.

function mosam_Is_Awesome(making_Meal: () => void){
    console.log("Let's Get ready for Picnic");

    setTimeout(() => {
        console.log("As Mosam Is Awesome so Going on a picnic and Now decision has been done ");
        making_Meal();
    }, 500);

}

function making_Meal(packBag:() => void){
    console.log("Preparing Meal ");
    
    setTimeout(() => {
        console.log("Meal is Ready");
       packBag()
        
    }, 1500);
}

function packBag2( load_Car : () => void){
console.log("Packing Bag and putting stuff in it");

setTimeout(() => {
    console.log("Packed Bag");
    load_Car()
}, 1000);


}

function load_Car(cb: () => void){
    console.log("Ready to Leave the home.");
    setTimeout(() => {
        console.log("finally");
        cb()
    }, 500);
}

mosam_Is_Awesome( function (){
    making_Meal(function (){
        packBag2(function (){
            load_Car( function (){
                console.log("On the way");
                
            })
        })
    })
})


