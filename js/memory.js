class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = []; //where we will be storing the cards the user has clicked so we can compare them.
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        // add the rest of the class properties here
    }

    shuffleCards() {
        if (this.cards === undefined) return undefined;
        for (let i = this.cards.length - 1; i > 0; i--) {
            //Match.floot() para redondear
            //Match.random() === 0
            const j = Math.floor(Math.random() * (i + 1));
            // temp temporar va a guardar un elemento en el arreglo
            // en otro lugar(variable)
            const temp = this.cards[i];
            //reasignacion
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }

        return this.cards;
    }

    checkIfPair(card1, card2) {
        this.pairsClicked += 1;

        if (card1 === card2) {
            this.pairsGuessed += 1;
            return true;
        } else {
            return false;
        }
    }


    checkIfFinished() {
        const pairs = this.cards.length / 2;
        return this.pairsGuessed === pairs ? true : false;
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;