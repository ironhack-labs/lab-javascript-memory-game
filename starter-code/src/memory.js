class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    let RandomPos = Math.floor(Math.random() * this.cards.length) + 1
    this.cards.sort(() => { return RandomPos / 2 - RandomPos });
}
checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 == card2) {
        this.pairsGuessed += 1
        return true
    } else {
        return false
    }
}

isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
        return true
    } else {
        return false
    }
}
}

