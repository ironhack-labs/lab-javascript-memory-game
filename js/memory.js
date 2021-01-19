class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        // add the rest of the class properties here
        this.pickedCards = []
        this.pairsClicked = 0
        this.pairsGuessed = 0
    }

    shuffleCards() {
        if (this.cards) {
            let m = this.cards.length - 1
            while (m) {
                const i = Math.floor(Math.random())
                const randomElement = this.cards[i]
                this.cards[i] = this.cards[m]
                this.cards[m] = randomElement
                m--
            }
        }
    }

    checkIfPair(card1, card2) {
        this.pairsClicked++
            if (card1 === card2) {
                this.pairsGuessed++
                    return true
            }
        return false
    }

    isFinished() {
        return this.pairsGuessed === this.cards.length / 2
    }
}