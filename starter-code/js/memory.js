class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0; 
    this.pairsGuessed = 0;
    this.shuffleCards(cards);
  }
  shuffleCards(a) {
    if(!a){return undefined}
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a  
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let areSame = false;
    if (card1 === card2){
      this.pairsGuessed++;
      areSame = true
    }
    return areSame
  }
  isFinished() {
    let endGame = false
    if(this.pairsGuessed === this.cards.length/2){
      endGame = true
    }
    return endGame
  }
}