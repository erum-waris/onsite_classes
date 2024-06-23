//nested array practice

let arr :(string[]|string)[]  = ["Palestine" , "Masjid e Aqsa" , ["palestine is" , "Our Red Line"]]

console.log("index 0:" , arr[0]);
console.log("index 1:" , arr[1]);
console.log("index 2:", arr[2]);
console.log("index 2 Nested Array el 1 :" , arr[2][0]);
console.log("index 2 Nested Array el 2 :" , arr[2][1]);


// Creating a nested array


let nestedArray: number[][] = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements
console.log(nestedArray[0][1]);  // Output: 2

// Iterating through nested array by  nested loop

for (let subArray of nestedArray) {
    for (let item of subArray) {
        console.log(item);
    }
}



