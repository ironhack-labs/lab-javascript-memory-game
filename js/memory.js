class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        // add the rest of the class properties here

        this.pickedCards = []

        this.pairsClicked = 0

        this.pairsGuessed = 0
    }

    //TODO mezclar cartas
    shuffleCards(cards) {

        this.cards.sort(() => Math.random() - 0.5)
        return !cards ? undefined : this.cards

    }

    //TODO: comparar cartas
    checkIfPair(card1, card2) {

        if (card1 === card2) {
            this.pairsClicked++
                this.pairsGuessed++
                return true
        } else {
            this.pairsClicked++
                return false
        }

    }

    //TODO: finalizar el ejericio cuando no quedan pares
    isFinished() {

        return this.pairsGuessed !== this.cards.length / 2 ? false : true

    }


}