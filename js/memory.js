class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }
  shuffleCards() {
    const newArr = []
    for (let i = this.cards.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const randomNum = this.cards.splice(randomIndex, 1)
      newArr.unshift(randomNum[0])
    }
    this.cards = newArr
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 === card2) {
      this.pairsGuessed ++;
    }
    return card1 === card2;
  }

  isFinished() {
    return this.pairsGuessed === 12;
  }
}