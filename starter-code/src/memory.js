class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
  }
  shuffleCards() {
    let m = cards.length, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      [cards[m], cards[i]]= [cards[i], cards[m]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked +=1

    if (card1 === card2){
      this.pairsGuessed +=1
       return true
    } else {
      return false
    }
  }
  
  isFinished() {

    let result = false;
    if(this.pairsGuessed === 8) {
      result = true;
    }
    return result;
  }

}