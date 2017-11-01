const chance = require('chance').Chance();

const wordArray = [];
let randomWord;

class Word {
    constructor() {
        this.word = this.pickWord();
    }
    pickWord() {
        for (let i = 0; i < 10; i++) {
            wordArray.push(chance.state( { full: true } ));
        }
        randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        // console.log(randomWord);
        return randomWord;
    }
    printWord() {
        console.log(this.word);
    }
    

}

Word.prototype.toLowerCase = function(word) {

    return word.toLowerCase();
}
module.exports = Word;