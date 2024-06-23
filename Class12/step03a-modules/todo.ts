

let todos : string[] = [];

export default function addtask(task:string) : void{
    todos.push(task);
      console.log(`task ${task} added successfully.`);
       console.log("****************************");
    
};

export function showTask() : void{
    
    
    console.log(` Updated todo list is here:`);

    todos.forEach((todo,index) => {

        console.log(`${index+1}:- ${todo}`);

        console.log('***^^^***');
        
    });
}