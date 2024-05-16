#!/usr/bin/env node

import inquirer from "inquirer";

let counter  = await inquirer.prompt({
    message:"Enter text",
    type:"input",
    name:"words"
})

let display = counter.words.trim().replaceAll(" ","");
let trim = display.split(" ")
console.log(trim);
console.log(trim.length);

// .replaceAll(" ","")