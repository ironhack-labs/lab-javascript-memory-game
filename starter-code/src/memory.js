var MemoryGame = function(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
    shuffledArr = cardsArr.slice();

    //stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (var i = shuffledArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffledArr[i];
        shuffledArr[i] = shuffledArr[j];
        shuffledArr[j] = temp;
    }
    return shuffledArr;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked++;
    // if the cards are the same also add 1 to pairsGuessed
    // return true or false depending on the result of comparing both cards
    if (this.firstCard === this.secondCard) {
        this.pairsGuessed++;
        return true;
    } else {
        return false;
    }
};

// check if our property pairsGuessed reaches the numbers of pairs the game has (12)
MemoryGame.prototype.finished = function() {
    if (this.pairsGuessed === 12) {
        return true;
    }
    return false;
};
