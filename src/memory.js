class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    if(!this.cards){return undefined}
    else {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
      }
      return this.cards
  }
  }

  checkIfPair(card1, card2) {
  if(card1 === card2){
    this.pairsClicked +=1;
    this.pairsGuessed +=1;
    return true
  }
  else {
    this.pairsClicked +=1
    return false
  }
    // ... write your code here
  }

  checkIfFinished() {
    if (this.pairsGuessed != this.cards.length/2){
      return false
    }else
    return true

    // ... write your code here
  }
}
