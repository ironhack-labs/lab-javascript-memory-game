class MemoryGame {
    constructor(cards) {
        this.round = [];
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        this.shuffleCards();
    }
    
    shuffleCards = () => {
        for (let i = 0; i < (this.cards.length - 2); i++) {
            let j = Math.floor(Math.random() * this.cards.length);
            let first = this.cards[i];
            let second = this.cards[j];
            this.cards[i] = second;
            second.position = i + 1;
            this.cards[j] = first;
            first.position = j + 1;

        }


    }
    findCard = (position) => {
        for (i = 0; i < this.cards.length; i++) {
            if (this.cards[i].position === position) {
                return this.cards[i];
            }
        }
    }
    roundLength = () => {
        return this.round.length;
    }
    setPair(card, callback, anotherCallBack) {
        this.round.push(card);
        if (this.round.length === 2) {
            let firstCardToCompare = this.round[0];
            let secondCardToCompare = this.round[1];
            let result = this.checkIfPair(firstCardToCompare.name, secondCardToCompare.name);
            if (callback) callback(result, firstCardToCompare, secondCardToCompare);
            this.round = [];
        }
    }


    checkIfPair = (firstCard, secondCard, ) => {

        this.pairsClicked += 1;

        if (firstCard === secondCard) {
            this.pairsGuessed += 1;
            return true;
        } else {
            return false;

        }
    }
    isFinished = () => {

        return (this.pairsGuessed === 12);

    }
}
class Card {
    constructor(name, img, position) {
        this.name = name;
        this.img = img;
        this.position = position;
    }

}