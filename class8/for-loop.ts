// basic syntax of for loop
//for( initialization ; condition ; increment/decrement)        (first for loop)

    // initialization where the code starts
    // increment decrement is used to  update value
    for( let i = 0 ; i < 10 ; i++){
        console.log(" i won't be late in class");     
    }

// Table of 2
for (let i = 1; i <= 10; i++) {
    console.log( 9 , "x" , i , " = " , i * 9);
    
    
}

for(let i = 1; i <= 12; i++){
    console.log(12, "x", i, "=", i * 12);
    
}

//declaring variable in for loop

let cars :string[] = ["BMW" , "COROLLA" ,  "SUZUKI", "VOLVO"];
console.log(cars.length);

let dataLength= cars.length

for(let i = 0 ; i < dataLength  ; i++ ){
   
console.log("dataLength",dataLength);

console.log(` My car is ${cars[i]}`);

}
//  as th variable is out of the block we access it after for loop block















// }

// const array: number[]=[1,2,3,4,5]
// const item1=3;
// const item2=6;
// console.log(array.includes(item1)? "item in array test passed" : "item in array test failed");
// console.log(array.includes(item2)? "item in not array test passed" : "item in array not test failed");