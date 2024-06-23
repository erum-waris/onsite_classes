

// Basic syntax of for of loop
// for of loop
 let girls= ["erum" ,"nargis","salma" ,"muzna"]
for (let girl of girls) {
    console.log("my sister is " ,girl);
    
}
let index = 1
for (let girl  of girls) {
    console.log(` my ${index} sister is ${girl} `);
    index++;
}