class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [pickedCards];
    this.pairsClicked = 1;
    this.pairsGuessed = 1;
  }
  shuffleCards(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;
 // while there remain elements to shuffle...
    while (0 !== currentIndex) {
 // pick a remain element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
 // and swap it with the current element
    
 temporaryValue = cards[currentIndex];
 cards[currentIndex] = cards[randomIndex]
 cards[randomIndex] = temporaryValue;     
       
    }
    return currentIndex;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {}
}
