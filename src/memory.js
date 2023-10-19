class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards){
      return undefined
    }
         let i = this.cards.length
         while (--i > 0) {
            let temp = Math.floor(Math.random() * (i + 1));
            [this.cards[temp], this.cards[i]] = [this.cards[i], this.cards[temp]];
         }

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1===card2){
      this.pairsGuessed += 1
      return true
    }
    else{
      this.pairsClicked += 1
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === 12){
      return true 
    }
    else{
      return false 
    }
  }
}
