class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;

        // add the rest of the class properties here
    }
    shuffleCards() {

        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }
    checkIfPair(card1, card2) {
        this.pairsClicked++;
        if (card1 === card2) {
            this.pairsGuessed++;
            return true
        }
        return false;



    }
    isFinished() {
        return (this.cards.length / 2 === this.pairsGuessed)

    }
}