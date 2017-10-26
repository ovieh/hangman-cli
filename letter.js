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

Letter.prototype.parseArray = function(){
    let letterArray = this.state.word.split('');
    return letterArray;
}

Letter.prototype.parseUnderscore = function() {
    let underScoreArray = Array.from(this.parseArray());    
    console.log(underScoreArray);
    return underScoreArray.fill("_");
}

let blah = new Letter;
// blah.printWord();
console.log(blah.parseUnderscore());

module.exports = Letter;