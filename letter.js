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
    // let underScoreArray = Array.from(this.parseArray());
    // underScoreArray = underScoreArray.fill("_");
    // this.underScoreArray = underScoreArray;
    // console.log(underScoreArray);
    // return this.underScoreArray;

    let underScoreArray = [];

    for (let i = 0; i < this.parseArray().length; i++) {
        if (this.parseArray()[i] == ' ') {
            underScoreArray[i] = " ";
        } else {
            underScoreArray[i] = "_";
        }

    }

    return underScoreArray;

}

Letter.prototype.printChar = function (arr) {

    // var preserveWord = arr.filter(word => {
    //     if(word === " " ){
    //         arr[word] = "blah";
    //     }

    // });

    // console.log(preserveWord.join(" "));
    // console.log(arr);

    return arr.join(" ");
}

Letter.prototype.compare = function (char) {
    if (this.parseArray().indexOf(char) !== -1) {
        return true;
    }
    return false;
}

Letter.prototype.vannaFlip = function (char) {
    // if(this.compare(char)) {
        let dashArray = this.parseUnderscore();
        let letterArray = this.parseArray();

        for(let i=0; i<dashArray.length; i++){
            if(char === letterArray[i]) {
                dashArray[i] = letterArray[i];
            }
        }

        console.log(dashArray);
        
        return dashArray;

}

let blah = new Letter;
blah.printWord();
// console.log(blah.printChar(blah.parseUnderscore()));
blah.vannaFlip('o');
module.exports = Letter;