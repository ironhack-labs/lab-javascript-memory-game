class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    let newCards = [...this.cards]

    if (!newCards) {
      return undefined
    } else {
    if (newCards.length == 0) {
      return undefined
    } else {

    var m = newCards.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = newCards[m];
      newCards[m] = newCards[i];
      newCards[i] = t;
    }

    this.cards = [...newCards];
    return undefined;
  }}
  }

  checkIfPair(card1, card2) {
    this.pairsClicked +=1
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }}
  
  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}