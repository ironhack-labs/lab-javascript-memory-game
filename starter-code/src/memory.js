class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  

  shuffleCards(cards) {
    let arrayClone = [...this.cards];
    let newArray = [];
    
    for (let i = 0; i < this.cards.length; i++) {
      let randomArrayCloneIndex = Math.floor(Math.random() * Math.floor(arrayClone.length));
      newArray.push(arrayClone[randomArrayCloneIndex]);
      arrayClone.splice(randomArrayCloneIndex, 1);    
    }
    this.cards = newArray;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == (this.cards.length/2)) {
      return true
    } else {
      return false
    }
  }
}