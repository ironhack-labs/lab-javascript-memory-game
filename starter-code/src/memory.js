var MemoryGame = function(cards) {
    //should pass pairsClicked and pairsGuessed???
    this.cards = cards;
    this.pickedCards = []; //should this be an empty array or a paramater?
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
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
    // console.log(copy);
    console.log(this.cards);

    this.cards = copy;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked += 1;
    var pairClickedEl = document.querySelector('#pairs_clicked');
    pairClickedEl.innerHTML = this.pairsClicked; //updates DOM

    var pairsGuessedEl = document.querySelector('span#pairs_guessed');
    if (firstCard.getAttribute('id') === secondCard.getAttribute('id')) {
        this.pairsGuessed += 1;
        pairsGuessedEl.innerHTML = this.pairsGuessed; //updates DOM
    }
};

MemoryGame.prototype.finished = function() {
    if (this.pairsGuessed === 12) {
        alert('You finished the game');
        return true;
    } else return false;
};
