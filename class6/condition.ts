// // lets create a variable ;

// let classDay : string = "monday";
//  // if else statement (conditional statment)
//  if(classDay === "wednesday"){
//     console.log("Go on time and take class")
//  }else{
//     console.log("Sleep, take rest,  have a nice day")
//  }
// // //  Another example of logic statments

// let Salary:number =3000;
// let endofMonth: number = 1000;
// let midMonth: string = "amount";

// if ( endofMonth <= 1000 && midMonth === "have less amount"){
//   console.log("Eat what ever cooked at home.");
// } else if (midMonth === "have less amount"){
//   console.log("Eat what ever cooked at home.");
// } else {
//   console.log("stay at home")
// }


// Assignment Given by Sir ISFHAN AHMED

// let email : string = "giaic00@gmail.com";
// let password :number = 12345;

// // if else statement (conditional statements/ logical opertors && )

// if (email === "giaic00@gmail.com"  && password === 12345) {
//   console.log("succecfully login");
// }else{
//   console.log("email or password is incorrect");
  
// }


// Assignment Given by Sir Isfhan Ahmed in onsite class..
// Use logical operator in if else statement and take input from the User by using inquirer

// solution

import  inquirer from "inquirer";

const email : string = "giaic123@gmail.com";
const password : string = "1234";
const answers = await inquirer.prompt([
  {
    type:"input",
    name:"email",
    message:"enter your email i'd",

},
{
  type:"password",
  name:"password",
  message:"enter your password",

}
]);

// Apply conditions and operators

if( answers.email === email  && answers.password === password ){
  console.log("logged in successfully");
  }else {
  console.log("email or password is incorrect");
  
};

