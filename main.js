#! /usr/bin/env node
import inquirer from "inquirer";
let workToDo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what doe want to add in your workToDo ?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "wdo you want add more in your workToDo ?",
            default: "false",
        }
    ]);
    workToDo.push(addTask.todo);
    condition = addTask.addMore;
    console.log(workToDo);
}
