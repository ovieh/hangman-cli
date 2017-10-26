const Letter = require('./letter.js');
const inquirer = require('inquirer');


const newLetter = new Letter;

const gamePrompt = () => {

    let guessesRemaining = 0;
    let alpha = /^[A-Za-z]+$/; 

    if( guessesRemaining < 2 ) {


    }
    inquirer.prompt([
        {
            name: 'letter',
            message: 'Guess a letter!',
            validate: str =>{
                let pass = (str.length === 1 && str.match(alpha));
                if(pass) {
                    return true;
                }
                return 'Please enter a single letter'
            }
        }
    ]).then( guess =>{

        guessesRemaining++;
        
        gamePrompt();

    });

}

gamePrompt();