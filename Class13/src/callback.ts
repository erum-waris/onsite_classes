// Understanding callbacks
// A callback is a function that is passed as an argument to another function.
// and are called after the completion of the function.

// Real-Life Example: Imagine you're planning a picnic.
// You start by making Pizza, then packing stuff
// Each step depends on the previous one being completed.

function makingPizza(packBag_1:() => void){
    console.log("preparing Pizza" );
    
    setTimeout(() => {
        console.log(" Pizza is ready!");
        
        packBag_1()
    } , 2000);
}

function packBag_1(){
    console.log("Packing Bag and putting stuff in it, like swimming suites , Snacks , colddrinks , and water bottles etc")

    setTimeout(() => {
        console.log(" Bag is Packed");
        console.log(" Here we are ready to go.");
        
    }, 1500);
}

makingPizza(packBag_1)
