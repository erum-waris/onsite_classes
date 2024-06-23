let todos = [];
export default function addtask(task) {
    todos.push(task);
    console.log(`task ${task} added successfully.`);
    console.log("****************************");
}
;
export function showTask() {
    console.log(` Updated todo list is here:`);
    todos.forEach((todo, index) => {
        console.log(`${index + 1}:- ${todo}`);
        console.log('***^^^***');
    });
}
