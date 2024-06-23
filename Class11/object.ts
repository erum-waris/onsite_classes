//creating an object( javascript object literal = object initilizer)

const car = {
    name:"Mehran",
    model:2002,
    weight:"1000kg",
    color:"White",
    availableColor:["Blue","Red","Silver"]
}

console.log(car);      //whole object logged

//accessing object properties

console.log(car.availableColor);  //specific property

//by [] access property

console.log(car["model"]);

//creating object  for using object Methods

const person: {
    firstName : string,
    lastName : string,
    age: number,
    isjob: boolean,
    anonymus : () => void

} = {
    firstName : "Adil",
    lastName : "Malik",
    age: 37,
    isjob: true,
    anonymus : function (){
        console.log(this);
        console.log(this.firstName);
        
        
    }
}



// type Aliases ( custom type )

// type 




