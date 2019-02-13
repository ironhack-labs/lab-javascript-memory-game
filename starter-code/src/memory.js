var MemoryGame = function(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
}

MemoryGame.prototype.shuffleCards = function() {
    var i = this.cards.length,
        cardI, j;
    // While there remain elements to shuffle…
    while (i) {
        // Pick a remaining element…
        j = Math.floor(Math.random() * i--);
        // And swap it with the current element.
        cardI = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = cardI;
    }
}

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked++
        if (firstCard === secondCard) {
            this.pairsGuessed++
        }
    return (firstCard === secondCard)
}

MemoryGame.prototype.isFinished = function() {
    return (this.pairsGuessed === this.cards.length / 2)
}