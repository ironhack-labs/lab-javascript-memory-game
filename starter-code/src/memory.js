
class MemoryGame {
  constructor(cardsArr){
    this.cards = cardsArr;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }
  checkIfPair(card1, card2) {
    let result = false;
    if (card1 === card2) {
      this.pairsGuessed++;
      result = true;
    }
    this.pairsClicked++;
    return result;
  }
  isFinished() {
    if (this.pairsGuessed >= this.cards.length / 2) {
      if(!alert('You ain\'t better than Thanos tho!')){window.location.reload();}
    }
  }
}