class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = []
        this.pairsClicked = 0;
        this.pairsGuessed = [];
    }

    shuffleCards() {
        if (!this.cards) return undefined;

        for (const [index, card] of this.cards.entries()) {

            const randomIndex = this.getRandom(index);
            const holder = this.cards[randomIndex];
            this.cards[randomIndex] = this.cards[index];
            this.cards[index] = holder;
        }
        return this.cards;
    }

    getRandom(endIdx) {
        return Math.floor(Math.random() * endIdx);
    }

    checkIfPair(card1, card2) {
        this.pairsClicked++;
        if (card1 === card2) {
            this.pairsGuessed++;
            return true;
        }
        return false;
    }

    checkIfFinished() {
        return this.pairsGuessed === this.cards.length / 2;
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
