const Word = require('./word.js')

class Letter {
    constructor() {
        const state = new Word();
        this.state = state;
    }
    printWord() {
        console.log(this.state.word)
    }

}

Letter.prototype.parseArray = function () {
    return this.state.word.split('');
}

Letter.prototype.parseUnderscore = function () {
    let underScoreArray = Array.from(this.parseArray());
    console.log(underScoreArray);
    return underScoreArray.fill("_");
}

Letter.prototype.printChar = function(arr) {
    console.log(arr.join(" "));
    // console.log(arr);
}

// Letter.prototype.

// let blah = new Letter;
// // blah.printWord();
// console.log(blah.parseUnderscore());
// blah.printChar(blah.parseUnderscore());

module.exports = Letter;