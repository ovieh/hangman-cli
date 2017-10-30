const Letter = require('./letter.js');
const inquirer = require('inquirer');
let guessesRemaining = 10;


const newLetter = new Letter;

const gamePrompt = () => {

    let alpha = /^[A-Za-z]+$/;
    let array = Array.from(newLetter.parseUnderscore());
    

    if (guessesRemaining > 0) {
        inquirer.prompt([{
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
            }
        }]).then(guess => {
            console.log(array);
            console.log(newLetter.state.word);
            let strArray = newLetter.underScoreArray;
            if(newLetter.compare(guess.letter)){
                

                newLetter.vannaFlip(guess.letter);
                console.log(newLetter.printChar(newLetter.underScoreArray));
            }

            guessesRemaining--;

            gamePrompt();

        });

    }
    else {

    }


}

gamePrompt();