var MemoryGame = function(cards, pickedCards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
    var cartasRandom = []
        // for (let i = 0; i < this.cards.length; i++) {
        //     cartasRandom.push(this.cards.splice(Math.floor(Math.random * this.cards.length)))

    // }
    this.cards = this.cards.sort(function() {
        return 0.5 - Math.random();
    })

};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    if (firstCard === secondCard) {
        this.pairsGuessed++;
        return true;
    } else {
        this.pairsClicked++;
        return false;
    }
}

MemoryGame.prototype.isFinished = function() {
    if (this.pairsGuessed == this.cards.length / 2) {
        return true;
    } else {
        return false;
    }
};