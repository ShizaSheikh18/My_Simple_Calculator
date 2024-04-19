#! /usr/bin/env node

//inquirer for user input
import inquirer from "inquirer";
//calculator code
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//condition statement
if(answer.operator === "Addition"){
    console.log( answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "Subtraction"){
    console.log( answer.firstNumber - answer.secondNumber);
}else if(answer.operator === "Multiplication"){
    console.log( answer.firstNumber * answer.secondNumber);
}else if(answer.operator === "Divison"){
    console.log( answer.firstNumber / answer.secondNumber);
}else{
    console.log("Please select Valid operator");
}