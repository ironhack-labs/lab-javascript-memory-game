var MemoryGame = function(cards) {
    this.cards = cards;
    this.firstCard = null;
    this.secondCard = null;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function() {
    this.cards = JSON.parse(JSON.stringify(this.cards));
    var copy = [],
        n = this.cards.length,
        i;
    // While there remain elements to shuffle…
    while (n) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * this.cards.length);

        // If not already shuffled, move it to the new array.
        if (i in this.cards) {
            copy.push(this.cards[i]);
            delete this.cards[i];
            n--;
        }
    }
    return copy;
};

MemoryGame.prototype.checkIfPair = function() {
    console.log('CHECKPAIR', this.firstCard, this.secondCard);
    if (this.firstCard != null && this.secondCard != null && this.firstCard === this.secondCard) {
        this.pairsGuessed += 1;
        return true;
    }

    return false;
};

MemoryGame.prototype.registerCard = function(card) {
    console.log(this.firstCard, this.secondCard);
    if (this.firstCard === null) {
        this.firstCard = card;
    } else if (this.secondCard === null) {
        this.secondCard = card;
    }

    if (this.firstCard !== null && this.secondCard !== null) {
        this.pairsClicked += 1;
    }
};

MemoryGame.prototype.getPairsClicked = function() {
    return this.pairsClicked;
};

MemoryGame.prototype.getPairsGuessed = function() {
    return this.pairsGuessed;
};

MemoryGame.prototype.canOpenNewCard = function() {
    console.log('CANOPEN:', this.secondCard === null, this.secondCard);
    return this.secondCard === null;
};

MemoryGame.prototype.unregisterCards = function() {
    this.firstCard = null;
    this.secondCard = null;
    console.log('UNREGISTERING', this.firstCard, this.secondCard);
};

MemoryGame.prototype.finished = function() {};
