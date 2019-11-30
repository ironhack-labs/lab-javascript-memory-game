class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    function shuffle(arr){
      arr.sort(function(a,b){
        return  Math.random() - 0.5
      })
    }
    shuffle(this.cards)
  }
  checkIfPair(card1, card2) {

    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }  
    return false;

  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2) return true
    return false
  }
}