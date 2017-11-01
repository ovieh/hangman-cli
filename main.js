const Letter = require('./letter.js');
// const Word = require('./word.js');
const inquirer = require('inquirer');
let guessesRemaining = 12;


let newLetter = new Letter;

const gamePrompt = () => {
    
    let alpha = /^[A-Za-z]+$/;
    // let array = Array.from(newLetter.parseUnderscore());

    // && newLetter.dashArray.join("") !== newLetter.stringArray.join('') 

    if (guessesRemaining > 0 && newLetter.dashArray.join("") !== newLetter.stringArray.join('')) {
        inquirer.prompt([{
                // when: () => {

                // },
                type: 'input',
                name: 'letter',
                message: 'Guess a letter!',
                validate: str => {
                    let pass = (str.length === 1 && str.match(alpha));
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a single letter'
                },
                filter: val => {
                    return val.toLowerCase();
                },
            }

        ]).then(guess => {
            // if (newLetter.dashArray.join("") === newLetter.stringArray.join('')) {
            // console.log('you did it');
            // } 
            if (newLetter.compare(guess.letter)) {
                newLetter.vannaFlip(guess.letter);
                console.log(newLetter.printChar(newLetter.dashArray));
            } else {
                console.log(newLetter.printChar(newLetter.dashArray));

            }

            guessesRemaining--;

            gamePrompt();
        });

    } else if (newLetter.dashArray.join("") === newLetter.stringArray.join('')) {
        console.log("You go it right, next word!");
        newGame();

    } else if(guessesRemaining === 0) {
        console.log("You lost, new game starting!");
        // gamePrompt();
        newGame();

    }

    // gamePrompt();


}

gamePrompt();

const newGame = () => {
    guessesRemaining = 5;
    newLetter = new Letter;    
    // console.log(newLetter);
    gamePrompt();
}