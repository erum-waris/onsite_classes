// creating function

function make_Tea(): void {           //void means no return
    let tea = 2 + 2 + 3
    console.log(tea);
}
let response = make_Tea()  // declare variable for invoking function
console.log(response);

function make_Tea1() {
    let tea = 2 + 2 + 3
    return tea;

}
let response1 = make_Tea1()
console.log(response1);

function make_biryani() {
    let biryani = ["Rice", "chicken", "Spices"]
    return biryani
}

let Result = make_biryani();
console.log(Result);

//creating function

function placestoVisit(places: string[], train?: string) {
    let Visitplaces: string[] = places
    console.log(Visitplaces)
}

//invoking function 
placestoVisit(["muree", "skardu"], "Daewoo")
placestoVisit(["Saudia", "SwitzerLand"])

// creating object

// basic syntax of an object and creating function

function admitCard(
    name: string,
    fatherName: string,
    age: number,
    course: string="Graphic Designing",    //default value
    rollNo: number,
    email: string,
    contactNo?: number,

): void {
    console.log("My name is :", name);

    console.log(`My FatherName is: ${fatherName}`);

    console.log("My age is :" + age);
    
    console.log(`I have enrolled  in ${course} course`);

    console.log(`My rollNo is : ${rollNo}`);

    console.log("My email is :" + email);


    //Applying condition on contact no

    if (contactNo) {
        console.log("My contactNo is:", contactNo);
    }
}

// argument  with default value
admitCard("salma","Asim", 34 , undefined , 123434 , "salma23@gmail.com") 

// argument without default value
admitCard("Afifa","Rao Zulfiqar",20,"Python",12345,"afifa@gmail.com",98765)


const studentData  = [
    {
        name: "Erum",
        fatherName:"Raja Waris Khan",
        age: 20,
        course: "Typescript",
        contactNo: 12345678,
        rollNo: 42501,
        email: "erum@gmail.com",


    },
    {
        name: "Muzna",
        fatherName:"Irshad",
        age: 25,
        course: "javascript",
        contactNo: 134689,
        rollNo: 476891,
        email: "muzna76@gmail.com"

    },
    
    {
        name: "Rania",
        fatherName:"Ubaid",
        age: 23,
        course: "Next.js",
        rollNo: 76543,
        email:"rania43@gmail.com",
        
}
];

// invoking function with object propertiesand applying  for loop
studentData.forEach(student => {
    admitCard(student.name,
        student.fatherName,
        student.age,
        student.course,
        student.rollNo,
        student.email,
        student.contactNo
    )
});

