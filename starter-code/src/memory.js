
class MemoryGame {
  constructor(cards) { 
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

shuffleCards() { this.cards.splice(0,0, this.cards.pop()) }

checkIfPair(firstCard, secondCard) {

  if (firstCard === secondCard) {
    this.pairsClicked += 1;
    this.pairsGuessed += 1;
    return true
  } else {
    this.pairsClicked += 1;
    return false}
}
 

isFinished() {
if (this.cards.length / 2 === this.pairsGuessed) { 
  return true
} else if (this.pairsClicked === 0 || this.pairsGuessed < this.cards.length / 2) {
  return false}

}  }


