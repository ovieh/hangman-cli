const Word = require('./word.js')

class Letter {
    constructor() {
        const state = new Word();
        this.state = state;
        this.parseArray();
        this.parseUnderscore();
        this.dashArray = Array.from(this.parseUnderscore());

    }
    printWord() {
        console.log(this.state.word)
    }
    // newWord() {
    //     this.state = this.state.pickWord();;
    // }


}

Letter.prototype.parseArray = function () {
    this.stringArray = this.state.word.split('');
    return this.stringArray;
}

Letter.prototype.parseUnderscore = function () {
    this.parseArray();

    this.underScoreArray = [];

    for (let i = 0; i < this.stringArray.length; i++) {
        if (this.stringArray[i] == ' ') {
            this.underScoreArray[i] = " ";
        } else {
            this.underScoreArray[i] = "_";
        }

    }
    
    return this.underScoreArray;

}



Letter.prototype.printChar = function (arr) {

    return arr.join(" ");
}

Letter.prototype.compare = function (char) {
    let lowerCaseArray = this.state.word.toLowerCase().split('');

    if (lowerCaseArray.indexOf(char) !== -1) {
        return true;
    }
    return false;
}

Letter.prototype.vannaFlip = function (char) {
    let lowerCaseArray = this.state.word.toLowerCase().split('');
    for (let i = 0; i < this.underScoreArray.length; i++) {
        if (char === lowerCaseArray[i]) {
            this.dashArray[i] = this.stringArray[i];

        }

    }
    // if (this.dashArray.join("") === this.stringArray.join("")) {
    //     console.log('You got it right! Next word!');
    //     return 0;
    // }
    // console.log(this.dashArray);
    return this.dashArray;

}

// let blah = new Letter;
// console.log(blah.newWord());
module.exports = Letter;