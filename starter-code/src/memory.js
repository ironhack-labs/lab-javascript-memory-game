var MemoryGame = function(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
    var array = this.cards
    var shuffle = function(array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };

};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    var firstCard = this.cards.name
    var secondCard = this.cards.name
    pairsClicked += 1
    if (firstCard.name == secondCard.name) {
        pairGuessed += 1
        return true
    }
    return false

}



MemoryGame.prototype.isFinished = function() {
    return pairsGuessed == 12
};