const chance = require('chance').Chance();


const wordArray = [];
let randomWord;

for (let i = 0; i < 10; i++) {
    wordArray.push(chance.state({
        full: true
    }));
}
randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// wordArray.forEach( word => { console.log(word) });

class Word {
    constructor(word=randomWord) {
        this.word = word;
    }

}
const word = new Word();

console.log(word.word);


module.exports = Word;