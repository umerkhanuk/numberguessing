#!/usr/bin/env node
import inquirer from "inquirer";
let game = await inquirer.prompt([
  {
    message: "Guess the Right Number between 1 to 5:",
    type: "number",
    name: "guess",
  },
]);
// let score = 0;
let number = Math.floor(Math.random() * 5 + 1);
if (game.guess === number) {
  console.log("You Won you guessed the right number");
} else {
  console.log(`You Lost ${number}`);
}

