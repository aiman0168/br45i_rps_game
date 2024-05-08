import inquirer from 'inquirer';
const input = await inquirer.prompt([
    { name: "player1", type: "list", message: "Please select any option", choices: ["Rock", "Paper", "Scissor"] },
    { name: "player2", type: "list", message: "Please select any option", choices: ["Rock", "Paper", "Scissor"] }
]);
if (input.player1 === input.player2) {
    console.log("its a tie!");
}
else if ((input.player1 === "Rock" && input.player2 === "Scissor") || (input.player1 === "Scissor" && input.player2 === "Paper") || (input.player1 === "Paper" && input.player2 === "Rock")) {
    console.log("Player 1 wins!");
}
else {
    console.log("Player 2 wins");
}
;
