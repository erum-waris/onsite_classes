//name of file doesn't matter when we are using default keyword we can access without declaring sepcific name
import a from "./first.js";
import { b, c } from "./second.js";
console.log(a);
console.log(b);
console.log(c);
import addtask from "./todo.js";
import { showTask } from "./todo.js";
import chalk from "chalk";
addtask(chalk.gray.italic("Quiz preparation"));
addtask(chalk.blue.bold("Class work pratice"));
addtask(chalk.yellow.italic("Do pratice at least 2 to 3 hours in a day"));
showTask();
import { addTask } from "./first.js";
import { showTasks } from "./first.js";
addTask("pray");
addTask("makedua");
addTask("hope for best");
addTask("keep growing");
addTask("rain");
addTask("sunny");
showTasks();
