class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards = this.cards.sort(function() {return Math.random() - 0.5})
  }
  AddPickedCards(card){
    this.pickedCards.push(card);
  }
  resetPickedCards(){
    this.pickedCards = []
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
       this.pairsGuessed+=1;
       return true;
     }
    else 
      return false;
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false
  }

}