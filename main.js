const Letter = require('./letter.js');
const inquirer = require('inquirer');
const colors = require('colors');

let guessesRemaining = 12;
let guessArray = [];


let newLetter = new Letter;

const gamePrompt = () => {

    let alpha = /^[A-Za-z]+$/;

    if (guessesRemaining > 0 && newLetter.dashArray.join("") !== newLetter.stringArray.join('')) {
        inquirer.prompt([{
                type: 'input',
                name: 'letter',
                message: 'Guess a letter!',
                validate: str => {
                    let pass = (str.length === 1 && str.match(alpha) && guessArray.indexOf(str) === -1);
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a single new letter!';
                }
            }

        ]).then(guess => {
            guessArray.push(guess.letter);
            

            if (newLetter.compare(guess.letter)) {
                newLetter.vannaFlip(guess.letter);
                console.log(colors.green("CORRECT!"))
                console.log(newLetter.printChar(newLetter.dashArray));
            } else {
                console.log(colors.red("WRONG!"));
                console.log(newLetter.printChar(newLetter.dashArray));

            }
            guessesRemaining--;
            gamePrompt();
        });

    } else if (newLetter.dashArray.join("") === newLetter.stringArray.join('')) {
        console.log("You go it right, next word!");
        newGame();

    } else if (guessesRemaining === 0) {
        inquirer.prompt([{
            type: 'confirm',
            name: 'continue',
            message: 'You lost, would you like to continue?',
            default: true
        }]).then(answer => {
            if (answer.continue === true) {
                newGame();
            } else {
                process.exit();
            }

        });

    }

}

gamePrompt();

const newGame = () => {
    guessesRemaining = 12;
    guessArray=[];
    newLetter = new Letter;
    gamePrompt();
}