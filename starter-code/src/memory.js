var MemoryGame = function(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.win = false;
};

//1

MemoryGame.prototype.shuffleCard = function shuffle(cardsArr) {
    cardsArr = JSON.parse(JSON.stringify(cardsArr));
    var copy = [],
        n = cardsArr.length,
        i;

    // While there remain elements to shuffle…
    while (n) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * cardsArr.length);

        // If not already shuffled, move it to the new cardsArr.
        if (i in cardsArr) {
            copy.push(cardsArr[i]);
            delete cardsArr[i];
            n--;
        }
    }

    return copy;
};
//2

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
        this.pairsGuessed++;

        return true;
    } else {
        return false;
    }
};

// 3
// As Memory doesn't have a 'Game Over', we just need a 'Win' function,
// where we need to check if our property pairsGuessed reach 12.

MemoryGame.prototype.finished = function() {
    if (this.pairsGuessed === 12) {
        alert('You won!');
        return true;
    }
    return false;
};
