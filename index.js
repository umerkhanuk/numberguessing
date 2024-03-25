import inquirer from "inquirer";
let game = await inquirer.prompt([
    {
        message: "Guess the Right Number between 1 to 5:",
        type: "number",
        name: "guess",
    },
]);
let number = Math.random();
if (game.guess === number) {
    console.log("You Won you guessed the right number");
}
else {
    console.log(`You Lost ${number}`);
}
