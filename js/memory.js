class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        // add the rest of the class properties here
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCards() {
        // ... write your code here
        if (!this.cards) return undefined;

        let tempStack = [];
        this.cards.forEach((element) => {
            tempStack.splice(
                Math.floor(Math.random() * tempStack.length),
                0,
                element
            );
            this.cards = tempStack;
        });

    }

    checkIfPair(card1, card2) {
        // ... write your code here
        this.pairsClicked += 1;

        if (card1 === card2) {

            this.pairsGuessed++;
            return true;
        } else {

            return false;
        }
    }

    checkIfFinished() {
        // ... write your code here
        if (this.pairsGuessed === this.cards.length / 2) return true;
        return false;
    }

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
