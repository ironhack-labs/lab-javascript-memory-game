class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; 
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

   // if (Array.isArray(cards)){}
   if (this.cards === undefined){
    return undefined
  }
  else{
  let currentIndex = this.cards.length, randomIndex;
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [this.cards[currentIndex], this.cards[randomIndex]] = 
    [this.cards[randomIndex], this.cards[currentIndex]]
  }
  return this.cards
}}



checkIfPair(card1, card2) {
  this.pairsClicked += 1;
  if (card1 === card2) {
    this.pairsGuessed += 1
    return true
  }
  else {
    return false
  }
}
  

  checkIfFinished() {
    if (this.pairsGuessed < this.cards.length/2){
      return false
    }
    else {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
