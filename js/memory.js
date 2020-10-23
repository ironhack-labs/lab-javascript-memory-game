class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }
    shuffleCards(array) {
        let currentIndex = array.length;
        let tempValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }
        return array;
    }

    checkIfPair(card1, card2) {
        this.pairsClicked++;
        if (!card1.localeCompare(card2)) {
            this.pairsGuessed++;
            return true;
        } else {
            return false;
        }
    }
    isFinished() {
        if (this.pairsGuessed == (this.cards.length / 2)) {
            return true;
        } else {
            return false;
        }
    }
}