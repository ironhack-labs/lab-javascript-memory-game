class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;

        this.shuffleCards();
    }

    shuffleCards() {
        if (typeof this.cards === "undefined") {
            return undefined;
        }

        for (let i = this.cards.length - 1; i > 0; i--) {
            // const j = Math.floor(Math.random() * 10000) % i;
            // [array[i], array[j]] = [array[j], array[i]];
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

    }

    checkIfPair(card1, card2) {
        this.pairsClicked++;

        if (card1 !== card2) {
            return false;

        }

        this.pairsGuessed++;

        return true;
    }

    checkIfFinished() {
        return this.pairsGuessed === this.cards.length / 2;
    }

    // holdCard() {
    //     if (this.pickedCards.length > 2) {
    //         return true
    //     }
    // }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;