class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;

    }

    shuffleCards() {
        let cardsNoShuffled = this.cards;
        let cardsLength = cardsNoShuffled.length;
        let cardsShuffled = [];
        for (let i = 0; i < cardsLength; i++) {
            let indexRandom = Math.floor(Math.random() * cardsNoShuffled.length);
            let cardRandom = cardsNoShuffled.splice(indexRandom, 1)[0];
            cardsShuffled.push(cardRandom);
        }
        this.cards = cardsShuffled;
    }


    checkIfPair(card1, card2) {
        this.pairsClicked++;
        if (card1 === card2) {
            this.pairsGuessed++;
            return true;
        } else {
            return false;
        }
    }


    isFinished() {
        if (this.pairsGuessed === this.cards.length / 2)
            return true;
        else {
            return false;
        }
    }

    notFinished() {
        if (this.pairsGuessed < this.cards.length / 2)
            return true;
        else {
            return false;
        }
    }


}