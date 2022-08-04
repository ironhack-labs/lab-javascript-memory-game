class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    let randi=0;
    for(let i=0;i<=this.cards.length-1;i++){
      randi=Math.floor(Math.random()*this.cards.length);
      [this.cards[i],this.cards[randi]]=[this.cards[randi],this.cards[i]];
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if(card1 === card2){
      this.pairsClicked+=1;
      this.pairsGuessed+=1;
      return true;
    }else{
      this.pairsClicked+=1;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed===12){
      return true;
    }else{
      return false;
    }
  }
}