//promises  // onsite class Assignment

let myPromise = new Promise((resolve,reject)=> {
    console.log("Hello World");
    
    setTimeout(()=>{
        console.log("Promise resolved");
        resolve(123);
    } , 1000)
    
})

myPromise.then((res)=> {console.log("Promise has been resolved",res);
})

const ourPromise = new Promise<number>((resolve, reject) => {
    console.log("number will print");
    
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        resolve(42); // After 2 seconds, the Promise is resolved with the value 42
    }, 2000);
});

ourPromise.then((result) => {
    console.log('Promise resolved with:', result);
});
