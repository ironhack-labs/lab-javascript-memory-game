
class MemoryGame {
  constructor(cards, pickedCards,pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
    // add the rest of the class properties here
  }
  shuffleCards(cards) {
    if (!cards){
      return undefined
    }
      for (let i = cards.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = cards[i];
          cards[i] = cards[j];
          cards[j] = temp;
      }
      return cards
  }
  checkIfPair(card1, card2) {
    this.pairsClicked =+ 1
    if (card1 === card2){
      this.pairsClicked =+ 1
      this.pairsGuessed =+ 1
      return true
    }
    return false
  }
  isFinished() {
    if (cards.length === 0){
    return true
    }if (this.pickedCards === 0){
      return false
    }else if (cards.length - 2 === 0){
      return false
    }else if(cards.length > 2){
      return false
    }
  }
}