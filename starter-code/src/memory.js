class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCards() {
        var aleatorycards = [],
            n = this.cards.length,
            i;

        while (n) {

            i = Math.floor(Math.random() * n--);

            aleatorycards.push(this.cards.splice(i, 1)[0]);
        }

        this.cards = aleatorycards;


    }
    checkIfPair(card1, card2) {
        this.pairsClicked++
            if (card1 === card2) {
                this.pairsGuessed++
                    return true
            } else {
                return false
            }


    }
    isFinished() {}
}