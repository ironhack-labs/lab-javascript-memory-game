class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCards() {
        
    }

    checkIfPair(card1, card2) {
        if (card1 === card2) {
            return true;
        } else {
            return false;
        }
    }

    checkIfFinished() {
        if (this.cards === true) {
            return true;
        } else {
            return false;
        }
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
