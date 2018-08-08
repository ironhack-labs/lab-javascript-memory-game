var MemoryGame = function(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
    this.didpair = false;
};

MemoryGame.prototype.shuffleCard = function() {
    this.cards = JSON.parse(JSON.stringify(this.cards));
    var copy = [],
        n = this.cards.length,
        i;
    while (n) {
        i = Math.floor(Math.random() * this.cards.length);

        if (i in this.cards) {
            copy.push(this.cards[i]);
            delete this.cards[i];
            n--;
        }
    }
    return copy;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
        this.pairsGuessed++;
        return true;
    }
    return false;
};

MemoryGame.prototype.finished = function() {
    if (this.pairsGuessed === 12) return true;
    else if (this.pairsGuessed < 12) return false;
};
