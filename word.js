const chance = require('chance').Chance();

const wordArray = [];
let randomWord;

for (let i = 0; i < 10; i++) {
    wordArray.push(chance.state( { full: true } ));
}
randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];


class Word {
    constructor(word=randomWord) {
        this.word = word;
    }

}

Word.prototype.toLowerCase = function(word) {
    // let lowerCaseWord = "";
    // lowerCaseWord =

    return word.toLowerCase();
}
// const word = new Word();

// console.log(word.word.toLowerCase());


module.exports = Word;