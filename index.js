#! /usr/bin/env node
// first we import inquirer.
import inquirer from 'inquirer';
// now we make the variable.
// in addition we take the input from the user.
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Please enter some sentence or paragragh for counting:"
});
const word = answers.sentence.trim().split(" "); // here trim is used to remove unwanted space.
// while split is used to count the word based on space between to words.
// now we print the program with the help of console.log & also print a message with answer.
console.log(`Your sentence or paragraph word count is ${word.length} `);
