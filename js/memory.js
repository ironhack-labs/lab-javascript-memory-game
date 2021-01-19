class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        // add the rest of the class properties here
        this.pickedCards = []
        this.pairsClicked = 0
        this.pairsGuessed = 0

    }
    shuffleCards() {


        var m = this.cards.length,
            t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        console.log(this.cards)
        return this.cards;

    }
    checkIfPair(card1, card2) {
        this.pairsClicked += 1
        if (card1 === card2) {
            this.pairsGuessed += 1
            return true
        } else {
            return false
        }


    }
    isFinished() {
        if (this.pairsGuessed = this.cards / 2) {
            return true
        } else {
            return false
        }
    }

    // ALGO FALLA EN ESTE CONDICIONAL, PERO NO VEO EL QUÉ PUEDE SER,
    // PORQUE LAS CARTAS ADIVINADAS DEBERIAN SER LA MITAD DE LAS CARTAS Y DEBERIA RETORNAR TRUE....

}