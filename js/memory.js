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
    if (card1.attributes[1].value == card2.attributes[1].value) {
      this.pairsGuessed += 0.5;
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