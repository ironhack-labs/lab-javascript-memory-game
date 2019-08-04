class MemoryGame {
    constructor(cards) {
        this.round = [];
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;

    }
    shuffleCards = () => {

        for (let i = 0; i < (this.cards.length - 2); i++) {
            let j = Math.floor(Math.random() * this.cards.length);
            let first = this.cards[i];
            let second = this.cards[j];
            this.cards[i] = second;
            this.cards[j] = first;
        }

    }
    setPair(card) {
        this.round.push(card);
        if (this.round.length === 2) {
            checkIfPair(this.round[0], this.round[1]);
            this.round = [];
        }
    }


    checkIfPair = (firstCard, secondCard) => {

        this.pairsClicked += 1;
        if (firstCard === secondCard) {
            this.pairsGuessed += 1;
            return true;
        } else {
            return false;
        }
    }
    isFinished = () => {

        return (this.pairsGuessed === 13);

    }
}