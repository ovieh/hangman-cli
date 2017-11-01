const Letter = require('./letter.js');
// const Word = require('./word.js');
const inquirer = require('inquirer');
let guessesRemaining = 12;


let newLetter = new Letter;

const gamePrompt = () => {

    let alpha = /^[A-Za-z]+$/;
    let guessArray = [];

    if (guessesRemaining > 0 && newLetter.dashArray.join("") !== newLetter.stringArray.join('')) {
        inquirer.prompt([{
                type: 'input',
                name: 'letter',
                message: 'Guess a letter!',
                validate: str => {
                    let pass = (str.length === 1 && str.match(alpha));
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a single letter!';
                },
                // validate: str => {
                //     let pass = (guessArray.indexOf(str) === -1)
                //     if (pass) {
                //         return true;
                //     }
                //     return 'You already made that guess!';
                // },
                // filter: val => {
                //     return val.toLowerCase();
                // },
            }

        ]).then(guess => {

            if (newLetter.compare(guess.letter)) {
                newLetter.vannaFlip(guess.letter);
                console.log("CORRECT!")
                console.log(newLetter.printChar(newLetter.dashArray));
            } else {
                console.log("WRONG!")
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
            message: 'You lost, would you like to continue',
            default: true
        }]).then(answer => {
            if (answer.continue === true) {
                newGame();
            } else {
                process.exit();

            }

        });
        // console.log("You lost, new game starting!");
        // gamePrompt();

    }

}

gamePrompt();

const newGame = () => {
    guessesRemaining = 15;
    newLetter = new Letter;
    // console.log(newLetter);
    gamePrompt();
}